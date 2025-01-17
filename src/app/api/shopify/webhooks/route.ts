import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, deleteDoc, collection, query, where, getDocs } from "firebase/firestore";
import { headers } from 'next/headers';
import crypto from 'crypto';
import { mapShopifyProduct } from "@/lib/shopify/utils";

// Verify webhook is from Shopify
function verifyShopifyWebhook(rawBody: string, hmac: string) {
  const hash = crypto
    .createHmac('sha256', process.env.SHOPIFY_CLIENT_SECRET!)
    .update(rawBody, 'utf8')
    .digest('base64');
  
  return hash === hmac;
}

export async function POST(req: Request) {
  try {
    const headersList = headers();
    const topic = headersList.get('x-shopify-topic');
    const shop = headersList.get('x-shopify-shop-domain');
    const hmac = headersList.get('x-shopify-hmac-sha256');
    
    // Get raw body for HMAC verification
    const rawBody = await req.text();
    
    // Verify webhook authenticity
    if (!hmac || !verifyShopifyWebhook(rawBody, hmac)) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 });
    }

    const data = JSON.parse(rawBody);

    // Find user by shop domain
    const shopifyConnectionsRef = collection(db, "shopify_connections");
    const q = query(shopifyConnectionsRef, where("shopDomain", "==", shop));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return NextResponse.json({ error: 'Shop not found' }, { status: 404 });
    }

    const userId = querySnapshot.docs[0].id;
    const { accessToken } = querySnapshot.docs[0].data();

    switch (topic) {
      case 'products/create':
      case 'products/update':
        // Map and save product
        const mappedProduct = mapShopifyProduct(data, userId, shop!);
        await setDoc(
          doc(db, "products", data.id.toString()),
          mappedProduct
        );
        break;

      case 'products/delete':
        // Delete product
        await deleteDoc(doc(db, "products", data.id.toString()));
        break;

      case 'inventory_levels/update':
        // Update inventory only
        const productRef = doc(db, "products", data.inventory_item_id);
        const productDoc = await getDoc(productRef);
        
        if (productDoc.exists()) {
          await setDoc(productRef, {
            inventoryQuantity: data.available,
            inventoryStatus: data.available > 0 ? 'in_stock' : 'out_of_stock',
            updatedAt: new Date(),
          }, { merge: true });
        }
        break;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
} 
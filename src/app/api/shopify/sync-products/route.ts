import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, writeBatch } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    // Get Shopify connection details
    const connectionDoc = await getDoc(doc(db, "shopify_connections", userId));
    if (!connectionDoc.exists()) {
      return NextResponse.json(
        { error: "Shopify connection not found" },
        { status: 404 }
      );
    }

    const { shopDomain, accessToken } = connectionDoc.data();

    // Fetch products from Shopify
    const productsResponse = await fetch(
      `https://${shopDomain}/admin/api/2023-01/products.json`,
      {
        headers: {
          "X-Shopify-Access-Token": accessToken,
        },
      }
    );

    const { products } = await productsResponse.json();

    // Batch write products to Firebase
    const batch = writeBatch(db);
    const productsRef = collection(db, "products");

    products.forEach((product: any) => {
      const docRef = doc(productsRef);
      batch.set(docRef, {
        userId,
        productId: product.id,
        title: product.title,
        price: product.variants[0]?.price || 0,
        inventoryQuantity: product.variants[0]?.inventory_quantity || 0,
        sku: product.variants[0]?.sku || "",
        imageUrl: product.images[0]?.src || "",
        createdAt: new Date().toISOString(),
      });
    });

    await batch.commit();

    return NextResponse.json({ success: true, productCount: products.length });
  } catch (error) {
    console.error("Error syncing products:", error);
    return NextResponse.json(
      { error: "Failed to sync products" },
      { status: 500 }
    );
  }
} 
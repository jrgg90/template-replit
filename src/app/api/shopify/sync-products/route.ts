import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, writeBatch, getDocs, query, where } from "firebase/firestore";
import { ShopifyProduct } from "@/types/product";
import { mapShopifyProduct } from "@/lib/shopify/utils";

const PRODUCTS_PER_PAGE = 250; // Shopify's max limit per request

async function fetchAllProducts(shopDomain: string, accessToken: string) {
  let allProducts: any[] = [];
  let hasNextPage = true;
  let nextPageInfo = '';

  while (hasNextPage) {
    const query = nextPageInfo 
      ? `?limit=${PRODUCTS_PER_PAGE}&page_info=${nextPageInfo}`
      : `?limit=${PRODUCTS_PER_PAGE}`;
      
    const response = await fetch(
      `https://${shopDomain}/admin/api/2023-01/products.json${query}`,
      {
        headers: {
          'X-Shopify-Access-Token': accessToken,
        },
      }
    );

    const data = await response.json();
    allProducts = [...allProducts, ...data.products];

    // Check pagination headers
    const link = response.headers.get('Link');
    if (link?.includes('rel="next"')) {
      nextPageInfo = link.match(/page_info=([^>&]*)/)?.[1] || '';
    } else {
      hasNextPage = false;
    }
  }

  return allProducts;
}

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

    // Delete existing products for this user before syncing
    const existingProducts = await getDocs(
      query(collection(db, "products"), where("userId", "==", userId))
    );
    
    const batch = writeBatch(db);
    existingProducts.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    
    // Fetch and sync new products
    const { shopDomain, accessToken } = connectionDoc.data();
    const products = await fetchAllProducts(shopDomain, accessToken);

    // Add new products to the same batch
    products.forEach((product: any) => {
      const mappedProduct = mapShopifyProduct(product, userId, shopDomain);
      batch.set(doc(db, "products", product.id.toString()), mappedProduct);
    });

    // Commit all changes in one batch
    await batch.commit();

    return NextResponse.json({ 
      success: true, 
      productCount: products.length 
    });
  } catch (error) {
    console.error("Error syncing products:", error);
    return NextResponse.json(
      { error: "Failed to sync products" },
      { status: 500 }
    );
  }
} 
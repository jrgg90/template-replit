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
    console.log("Starting sync for user:", userId);

    // Get Shopify connection details
    const connectionDoc = await getDoc(doc(db, "shopify_connections", userId));
    console.log("Connection exists:", connectionDoc.exists());
    
    if (!connectionDoc.exists()) {
      return NextResponse.json(
        { error: "Shopify connection not found" },
        { status: 404 }
      );
    }

    const { shopDomain, accessToken } = connectionDoc.data();
    console.log("Shop domain:", shopDomain);

    // Fetch products from Shopify
    console.log("Fetching products from Shopify...");
    const products = await fetchAllProducts(shopDomain, accessToken);
    console.log("Fetched products count:", products.length);

    // Delete existing products
    const existingProducts = await getDocs(
      query(collection(db, "products"), where("userId", "==", userId))
    );
    console.log("Existing products to delete:", existingProducts.size);
    
    const batch = writeBatch(db);
    existingProducts.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // Add new products
    products.forEach((product: any) => {
      const mappedProduct = mapShopifyProduct(product, userId, shopDomain);
      batch.set(doc(db, "products", product.id.toString()), mappedProduct);
    });

    // Commit changes
    console.log("Committing batch with", products.length, "products");
    await batch.commit();
    console.log("Sync completed successfully");

    return NextResponse.json({ 
      success: true, 
      productCount: products.length 
    });
  } catch (err) {
    // Properly type the error
    const error = err as Error;
    console.error("Error syncing products:", error);
    return NextResponse.json(
      { 
        error: "Failed to sync products", 
        details: error.message || 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
} 
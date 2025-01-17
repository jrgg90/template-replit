import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET!;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/callback`;

export async function POST(req: Request) {
  try {
    const { shopDomain, userId } = await req.json();

    // Check if store is already connected
    const existingConnection = await getDoc(doc(db, "shopify_connections", userId));
    if (existingConnection.exists()) {
      return NextResponse.json(
        { error: "Ya tienes una tienda conectada. Desconecta la tienda actual antes de conectar una nueva." },
        { status: 400 }
      );
    }

    // Validate shop domain
    if (!shopDomain.match(/^[a-zA-Z0-9][a-zA-Z0-9-]*\.myshopify\.com$/)) {
      return NextResponse.json(
        { error: "Invalid Shopify domain" },
        { status: 400 }
      );
    }

    // Generate authorization URL with minimal required scopes
    const authUrl = `https://${shopDomain}/admin/oauth/authorize?` + 
      `client_id=${SHOPIFY_CLIENT_ID}&` +
      `redirect_uri=${REDIRECT_URI}&` +
      `scope=read_products,read_inventory&` +
      `state=${userId}&` +
      `shop=${shopDomain}`;

    // Store temporary state in Firebase
    await setDoc(doc(db, "shopify_auth_states", userId), {
      shopDomain,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ authUrl });
  } catch (error) {
    console.error("Error in Shopify auth:", error);
    return NextResponse.json(
      { error: "Failed to initiate Shopify authorization" },
      { status: 500 }
    );
  }
}
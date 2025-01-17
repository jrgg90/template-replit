import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET!;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/callback`;

export async function POST(req: Request) {
  try {
    const { shopDomain, userId } = await req.json();

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
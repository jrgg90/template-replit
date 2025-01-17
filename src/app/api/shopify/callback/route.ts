import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const shop = searchParams.get("shop");

  try {
    // Verify state and get shop domain
    const stateDoc = await getDoc(doc(db, "shopify_auth_states", state!));
    if (!stateDoc.exists()) {
      console.error("Invalid state - no matching document found");
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?error=invalid_state`
      );
    }

    const { shopDomain } = stateDoc.data();

    // Verify shop matches
    if (shop && shop !== shopDomain) {
      console.error("Shop mismatch", { received: shop, expected: shopDomain });
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?error=shop_mismatch`
      );
    }

    // Exchange code for access token
    const tokenResponse = await fetch(
      `https://${shopDomain}/admin/oauth/access_token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: process.env.SHOPIFY_CLIENT_ID,
          client_secret: process.env.SHOPIFY_CLIENT_SECRET,
          code,
        }),
      }
    );

    if (!tokenResponse.ok) {
      console.error("Token exchange failed", await tokenResponse.text());
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?error=token_exchange_failed`
      );
    }

    const { access_token } = await tokenResponse.json();

    // Store the access token
    await setDoc(doc(db, "shopify_connections", state!), {
      shopDomain,
      accessToken: access_token,
      connectedAt: new Date().toISOString()
    });

    // Clean up the temporary state
    await deleteDoc(doc(db, "shopify_auth_states", state!));

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?success=true`
    );
  } catch (error) {
    console.error("Error in Shopify callback:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?error=unexpected_error`
    );
  }
} 
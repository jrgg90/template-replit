import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

async function registerWebhooks(shopDomain: string, accessToken: string) {
  const webhooks = [
    { topic: 'products/create', address: `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/webhooks` },
    { topic: 'products/update', address: `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/webhooks` },
    { topic: 'products/delete', address: `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/webhooks` },
    { topic: 'inventory_levels/update', address: `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/webhooks` },
  ];

  for (const webhook of webhooks) {
    await fetch(`https://${shopDomain}/admin/api/2023-01/webhooks.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
      },
      body: JSON.stringify({
        webhook: {
          topic: webhook.topic,
          address: webhook.address,
          format: 'json',
        },
      }),
    });
  }
}

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

    // Register webhooks before storing the token
    await registerWebhooks(shopDomain, access_token);

    // Store the access token
    await setDoc(doc(db, "shopify_connections", state!), {
      shopDomain,
      accessToken: access_token,
      timestamp: new Date().toISOString()
    });

    // Wait for product sync to complete
    const syncResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/sync-products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: state })
    });

    const syncResult = await syncResponse.json();
    
    // Delete the temporary state
    await deleteDoc(doc(db, "shopify_auth_states", state!));

    // Redirect back to onboarding with success state
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?sync=success`
    );
  } catch (error) {
    console.error("Error in callback:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?error=sync_failed`
    );
  }
} 
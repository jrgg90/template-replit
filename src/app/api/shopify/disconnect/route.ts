import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, deleteDoc, collection, query, where, getDocs, writeBatch } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    const batch = writeBatch(db);

    // Delete Shopify connection
    batch.delete(doc(db, "shopify_connections", userId));

    // Delete all products
    const productsSnapshot = await getDocs(
      query(collection(db, "products"), where("userId", "==", userId))
    );
    
    productsSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error disconnecting store:', error);
    return NextResponse.json(
      { error: 'Failed to disconnect store' },
      { status: 500 }
    );
  }
} 
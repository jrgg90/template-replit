import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    // Get all products for this user
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);

    // Extract unique product types and vendors
    const productTypes = new Set<string>();
    const vendors = new Set<string>();

    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.productType) productTypes.add(data.productType);
      if (data.vendor) vendors.add(data.vendor);
    });

    return NextResponse.json({
      productTypes: Array.from(productTypes).sort(),
      vendors: Array.from(vendors).sort()
    });
  } catch (error) {
    console.error('Error fetching options:', error);
    return NextResponse.json(
      { error: 'Failed to fetch filter options' },
      { status: 500 }
    );
  }
} 
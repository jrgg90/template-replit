import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, query, where, orderBy, limit, startAfter, getDocs, Query, DocumentData } from "firebase/firestore";
import { ShopifyProduct } from "@/types/product";

interface RequestBody {
  userId: string;
  page: number;
  limit: number;
  filters: {
    status: string;
    inventoryStatus: string;
    productType: string;
    vendor: string;
    search: string;
  };
}

export async function POST(req: Request) {
  try {
    const { userId, page, limit: pageLimit, filters }: RequestBody = await req.json();

    // Start building the query
    let baseQuery: Query<DocumentData> = collection(db, "products");

    // Add base filter for user
    baseQuery = query(baseQuery, where("userId", "==", userId));

    // Add filters if they exist
    if (filters.status) {
      baseQuery = query(baseQuery, where("status", "==", filters.status));
    }

    if (filters.inventoryStatus) {
      baseQuery = query(baseQuery, where("inventoryStatus", "==", filters.inventoryStatus));
    }

    if (filters.productType) {
      baseQuery = query(baseQuery, where("productType", "==", filters.productType));
    }

    if (filters.vendor) {
      baseQuery = query(baseQuery, where("vendor", "==", filters.vendor));
    }

    // Add search if it exists
    if (filters.search) {
      baseQuery = query(baseQuery, where("title", ">=", filters.search));
      baseQuery = query(baseQuery, where("title", "<=", filters.search + "\uf8ff"));
    }

    // Add ordering
    baseQuery = query(baseQuery, orderBy("createdAt", "desc"));

    // Get total count
    const totalSnapshot = await getDocs(baseQuery);
    const total = totalSnapshot.size;

    // Calculate pagination
    const offset = (page - 1) * pageLimit;
    let paginatedQuery = baseQuery;

    if (offset > 0) {
      // Get the document at the offset position
      const snapshot = await getDocs(query(baseQuery, limit(offset)));
      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      if (lastVisible) {
        paginatedQuery = query(baseQuery, startAfter(lastVisible), limit(pageLimit));
      }
    } else {
      paginatedQuery = query(baseQuery, limit(pageLimit));
    }

    // Get the paginated results
    const paginatedSnapshot = await getDocs(paginatedQuery);
    const products = paginatedSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ShopifyProduct[];

    return NextResponse.json({
      products,
      total,
      page,
      totalPages: Math.ceil(total / pageLimit)
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
} 
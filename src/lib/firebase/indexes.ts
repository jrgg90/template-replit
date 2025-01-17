export const requiredIndexes = [
  {
    collectionGroup: "products",
    queryScope: "COLLECTION",
    fields: [
      { fieldPath: "userId", arrayConfig: "CONTAINS" },
      { fieldPath: "status", arrayConfig: "CONTAINS" },
      { fieldPath: "createdAt", order: "DESCENDING" }
    ]
  },
  {
    collectionGroup: "products",
    queryScope: "COLLECTION",
    fields: [
      { fieldPath: "userId", arrayConfig: "CONTAINS" },
      { fieldPath: "inventoryStatus", arrayConfig: "CONTAINS" },
      { fieldPath: "createdAt", order: "DESCENDING" }
    ]
  },
  {
    collectionGroup: "products",
    queryScope: "COLLECTION",
    fields: [
      { fieldPath: "userId", arrayConfig: "CONTAINS" },
      { fieldPath: "productType", arrayConfig: "CONTAINS" },
      { fieldPath: "createdAt", order: "DESCENDING" }
    ]
  },
  {
    collectionGroup: "products",
    queryScope: "COLLECTION",
    fields: [
      { fieldPath: "userId", arrayConfig: "CONTAINS" },
      { fieldPath: "vendor", arrayConfig: "CONTAINS" },
      { fieldPath: "createdAt", order: "DESCENDING" }
    ]
  }
]; 
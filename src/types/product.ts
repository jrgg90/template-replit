export interface ShopifyProduct {
  id: string;
  userId: string;
  shopDomain: string;
  
  // Basic Info
  title: string;
  description: string;
  productType: string;
  vendor: string;
  tags: string[];
  
  // Pricing
  price: number;
  compareAtPrice: number | null;
  
  // Inventory
  inventoryQuantity: number;
  inventoryStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
  sku: string;
  
  // Media
  images: Array<{
    url: string;
    alt?: string;
  }>;
  
  // Status & Dates
  status: 'active' | 'draft' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  
  // Variants
  hasVariants: boolean;
  variants: Array<{
    id: string;
    title: string;
    sku: string;
    price: number;
    inventoryQuantity: number;
    options: Record<string, string>;
  }>;
} 
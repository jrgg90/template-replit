export interface ProductImage {
  id: string;
  src: string;
  alt?: string;
}

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
  images: ProductImage[];
  
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
  
  selectedForExport?: boolean;
  selectedAt?: string | null;
}

export interface ProductListing {
  id: string;
  name: string;
  description: string;
  images: string[];
  marketplace: string;
  status: 'published' | 'draft' | 'error';
  optimizationScore: number;
  price: number;
  sku: string;
  category: string;
  inventory: number;
  originalData?: ShopifyProduct; // Para mantener referencia a los datos originales
} 
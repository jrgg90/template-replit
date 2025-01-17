import { ShopifyProduct } from "@/types/product";

export function mapShopifyProduct(product: any, userId: string, shopDomain: string): ShopifyProduct {
  return {
    id: product.id.toString(),
    userId,
    shopDomain,
    
    // Basic Info
    title: product.title,
    description: product.body_html || '',
    productType: product.product_type || '',
    vendor: product.vendor || '',
    tags: product.tags ? product.tags.split(',').map((tag: string) => tag.trim()) : [],
    
    // Pricing
    price: parseFloat(product.variants[0]?.price || '0'),
    compareAtPrice: product.variants[0]?.compare_at_price 
      ? parseFloat(product.variants[0].compare_at_price) 
      : null,
    
    // Inventory
    inventoryQuantity: product.variants.reduce((total: number, variant: any) => 
      total + (variant.inventory_quantity || 0), 0),
    inventoryStatus: product.variants[0]?.inventory_quantity > 0 ? 'in_stock' 
      : product.variants[0]?.inventory_quantity === 0 ? 'out_of_stock' 
      : 'low_stock',
    sku: product.variants[0]?.sku || '',
    
    // Media
    images: product.images.map((img: any) => ({
      url: img.src,
      alt: img.alt || ''
    })),
    
    // Status & Dates
    status: product.status,
    createdAt: new Date(product.created_at),
    updatedAt: new Date(product.updated_at),
    
    // Variants
    hasVariants: product.variants.length > 1,
    variants: product.variants.map((variant: any) => ({
      id: variant.id.toString(),
      title: variant.title,
      sku: variant.sku || '',
      price: parseFloat(variant.price || '0'),
      inventoryQuantity: variant.inventory_quantity || 0,
      options: product.options.reduce((acc: Record<string, string>, option: any, index: number) => {
        acc[option.name] = variant[`option${index + 1}`];
        return acc;
      }, {})
    }))
  };
} 
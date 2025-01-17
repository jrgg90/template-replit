import { ShopifyProduct } from "@/types/product";

export function mapShopifyProduct(shopifyProduct: any, userId: string, shopDomain: string): ShopifyProduct {
  return {
    id: shopifyProduct.id.toString(),
    userId,
    shopDomain,
    title: shopifyProduct.title,
    description: shopifyProduct.body_html || '',
    productType: shopifyProduct.product_type || '',
    vendor: shopifyProduct.vendor || '',
    tags: shopifyProduct.tags ? shopifyProduct.tags.split(',') : [],
    price: parseFloat(shopifyProduct.variants[0]?.price || '0'),
    compareAtPrice: shopifyProduct.variants[0]?.compare_at_price ? 
      parseFloat(shopifyProduct.variants[0].compare_at_price) : null,
    inventoryQuantity: shopifyProduct.variants[0]?.inventory_quantity || 0,
    inventoryStatus: getInventoryStatus(shopifyProduct.variants[0]?.inventory_quantity || 0),
    sku: shopifyProduct.variants[0]?.sku || '',
    images: shopifyProduct.images.map((img: any) => ({
      url: img.src,
      alt: img.alt || ''
    })),
    status: shopifyProduct.status,
    createdAt: new Date(shopifyProduct.created_at),
    updatedAt: new Date(shopifyProduct.updated_at),
    hasVariants: shopifyProduct.variants.length > 1,
    variants: shopifyProduct.variants.map((variant: any) => ({
      id: variant.id.toString(),
      title: variant.title,
      sku: variant.sku || '',
      price: parseFloat(variant.price || '0'),
      inventoryQuantity: variant.inventory_quantity || 0,
      options: variant.option_values || {}
    }))
  };
}

function getInventoryStatus(quantity: number): 'in_stock' | 'low_stock' | 'out_of_stock' {
  if (quantity <= 0) return 'out_of_stock';
  if (quantity <= 5) return 'low_stock';
  return 'in_stock';
} 
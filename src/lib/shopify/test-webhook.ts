import fetch from 'node-fetch';
import crypto from 'crypto';

const WEBHOOK_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/webhooks`;
const SECRET = process.env.SHOPIFY_CLIENT_SECRET!;

// Test data for different webhook events
const testEvents = {
  productCreate: {
    topic: 'products/create',
    data: {
      id: '12345',
      title: 'Test Product',
      body_html: '<p>Test description</p>',
      vendor: 'Test Vendor',
      product_type: 'Test Type',
      status: 'active',
      tags: 'tag1,tag2',
      variants: [{
        id: '67890',
        title: 'Default Title',
        price: '19.99',
        sku: 'TEST-SKU',
        inventory_quantity: 10
      }],
      images: [{
        src: 'https://example.com/test.jpg',
        alt: 'Test Image'
      }],
      options: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  inventoryUpdate: {
    topic: 'inventory_levels/update',
    data: {
      inventory_item_id: '12345',
      available: 5
    }
  }
};

async function sendTestWebhook(event: keyof typeof testEvents) {
  const { topic, data } = testEvents[event];
  const body = JSON.stringify(data);
  
  // Generate HMAC
  const hmac = crypto
    .createHmac('sha256', SECRET)
    .update(body, 'utf8')
    .digest('base64');

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Topic': topic,
        'X-Shopify-Hmac-SHA256': hmac,
        'X-Shopify-Shop-Domain': 'test-store.myshopify.com'
      },
      body
    });

    const result = await response.json();
    console.log(`Test ${event} result:`, result);
    return result;
  } catch (error) {
    console.error(`Test ${event} failed:`, error);
    throw error;
  }
}

// Usage example:
async function runTests() {
  console.log('Starting webhook tests...');
  
  try {
    console.log('Testing product create webhook...');
    await sendTestWebhook('productCreate');
    
    console.log('Testing inventory update webhook...');
    await sendTestWebhook('inventoryUpdate');
    
    console.log('All tests completed successfully!');
  } catch (error) {
    console.error('Test suite failed:', error);
  }
}

// Only run if called directly
if (require.main === module) {
  runTests();
}

export { sendTestWebhook, testEvents }; 
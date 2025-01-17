import { ShopifyProduct } from '@/types/product'

interface TableProps {
  products: ShopifyProduct[];
  loading: boolean;
  currentPage: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function ProductsTable({
  products,
  loading,
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange
}: TableProps) {
  const totalPages = Math.ceil(totalProducts / productsPerPage)

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div>
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Inventory
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vendor
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {product.images[0] && (
                    <img
                      src={product.images[0].url}
                      alt={product.title}
                      className="h-10 w-10 rounded-lg object-cover mr-3"
                    />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">{product.title}</div>
                    <div className="text-sm text-gray-500">{product.sku}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${product.status === 'active' ? 'bg-green-100 text-green-800' : 
                    product.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'}`}>
                  {product.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${product.inventoryStatus === 'in_stock' ? 'bg-green-100 text-green-800' : 
                    product.inventoryStatus === 'low_stock' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}`}>
                  {product.inventoryQuantity} units
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {product.productType}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {product.vendor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-700">
          Showing {(currentPage - 1) * productsPerPage + 1} to {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts} results
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 
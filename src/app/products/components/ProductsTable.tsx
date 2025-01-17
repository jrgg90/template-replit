import { ShopifyProduct } from '@/types/product'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface ProductsTableProps {
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
}: ProductsTableProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 flex justify-center">
          <LoadingSpinner className="w-8 h-8 text-blue-600" />
        </div>
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <p className="text-center text-gray-500">No hay productos disponibles</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Producto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Inventario
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vendedor
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
      <div className="px-6 py-4 border-t">
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-700">
            Showing {(currentPage - 1) * productsPerPage + 1} to {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts} results
          </div>
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(totalProducts / productsPerPage) }, (_, i) => i + 1).map((page) => (
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
    </div>
  );
} 
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Products from '../constants/products'
import { Link } from 'react-router-dom'


// Map all Products
const products = Products.map((product)=>({
  id:product.id,
  name:product.name,
  link:product.link,
  mainImage:product.mainImage,
  extraImages:product.extraImages,
  description:product.description
}))

export default function AlternatingProductListing() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Products</h1>
        <div className="space-y-12">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <img 
                  src={`/products/${product.mainImage}`}
                  alt={product.name} className="w-full h-64 object-cover" />
                  {product.extraImages.length > 0 && (
                    <div className="flex p-2 gap-2 justify-center">
                      {product.extraImages.map((img, i) => (
                        <img key={i} src={`/products/${img}`} alt={`${product.name} ${i + 1}`} className="w-20 h-20 object-cover rounded" />
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{product.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
                  <Link 
                    to={`../${product.link}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300 self-start"
                  >
                    Learn More
                    <FiArrowRight className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
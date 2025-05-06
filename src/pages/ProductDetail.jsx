import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaStar, FaHeart, FaShoppingCart, FaTruck, FaShieldAlt, FaUndo, FaMinus, FaPlus, FaShare } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { products } from '../data/products'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find(p => p.id === parseInt(id))
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link
          to="/products"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-purple-600">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 dark:text-white">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative w-full pb-[100%] overflow-hidden rounded-lg">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-full pb-[100%] overflow-hidden rounded-lg ${
                  selectedImage === index ? 'ring-2 ring-purple-600' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                SKU: {product.sku}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-purple-600">
              ${product.price.toFixed(2)}
            </span>
            {product.discount > 0 && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            {product.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Key Features
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-4 py-2 text-gray-600 hover:text-purple-600"
              >
                <FaMinus />
              </button>
              <span className="px-4 py-2 text-gray-800 dark:text-white">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 text-gray-600 hover:text-purple-600"
              >
                <FaPlus />
              </button>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {product.stock} items available
            </span>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button className="p-3 border rounded-lg text-gray-600 hover:text-red-500 transition-colors">
              <FaHeart />
            </button>
            <button className="p-3 border rounded-lg text-gray-600 hover:text-purple-600 transition-colors">
              <FaShare />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaTruck className="text-2xl mr-2" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaUndo className="text-2xl mr-2" />
              <span>30 Days Return</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaShieldAlt className="text-2xl mr-2" />
              <span>2 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-3 border-b">
              <span className="text-gray-600 dark:text-gray-400">{key}</span>
              <span className="text-gray-800 dark:text-white font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-w-1 aspect-h-1 bg-gray-100">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {relatedProduct.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                      {relatedProduct.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(relatedProduct.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      ({relatedProduct.reviews})
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${relatedProduct.price.toFixed(2)}
                    </span>
                    {relatedProduct.discount > 0 && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${relatedProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail 
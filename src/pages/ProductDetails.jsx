import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaStar, FaShoppingCart, FaHeart, FaArrowLeft } from 'react-icons/fa'
import { addToCart } from '../store/cartSlice'
import { products } from '../data/products'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
          >
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white/60 hover:text-cyan-400 mb-8 transition-colors duration-500"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative w-full pb-[100%] rounded-2xl overflow-hidden bg-white/5">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.discount > 0 && (
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-cyan-400 px-4 py-1 rounded-full text-sm font-light tracking-wider border border-white/20">
                  {product.discount}% OFF
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full pb-[100%] rounded-lg overflow-hidden transition-all duration-500 ${
                    selectedImage === index
                      ? 'ring-2 ring-cyan-400'
                      : 'hover:ring-2 hover:ring-white/20'
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
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light tracking-wider mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-cyan-400'
                          : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/60">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-light tracking-wider">
                  ${product.price.toFixed(2)}
                </span>
                {product.discount > 0 && (
                  <span className="text-xl text-white/40 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-white/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.features && (
              <div>
                <h3 className="text-xl font-light tracking-wider mb-4">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.specifications && (
              <div>
                <h3 className="text-xl font-light tracking-wider mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="bg-white/5 p-4 rounded-lg">
                      <span className="text-white/60 text-sm">{key}</span>
                      <p className="text-white/80">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
                >
                  +
                </button>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-light tracking-wider transition-colors duration-500 flex items-center justify-center space-x-2"
                >
                  <FaShoppingCart className="text-lg" />
                  <span>ADD TO CART</span>
                </button>
                <button className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500">
                  <FaHeart className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails 
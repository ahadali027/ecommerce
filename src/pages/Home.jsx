import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar, FaTruck, FaShieldAlt, FaUndo, FaHeadset, FaInstagram, FaTwitter, FaFacebook, FaHeart, FaShoppingBag, FaSearch, FaUser } from 'react-icons/fa'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { products } from '../data/products'
import Carousel from '../components/Carousel'

const Home = () => {
  const dispatch = useDispatch()

  const carouselSlides = [
    {
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: 'FUTURE OF FASHION',
      description: 'Experience the next generation of wearable technology with our cutting-edge collection.',
      buttonText: 'EXPLORE COLLECTION',
      link: '/products'
    },
    {
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: 'LIMITED EDITION',
      description: 'Exclusive designs crafted for those who dare to be different.',
      buttonText: 'VIEW COLLECTION',
      link: '/products'
    },
    {
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: 'SMART LUXURY',
      description: 'Where innovation meets elegance in perfect harmony.',
      buttonText: 'LEARN MORE',
      link: '/about'
    }
  ]

  const featuredCategories = [
    {
      title: 'SMART',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=smart'
    },
    {
      title: 'LUXURY',
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=luxury'
    },
    {
      title: 'SPORTS',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=sports'
    }
  ]

  const features = [
    {
      id: 1,
      icon: <FaTruck className="h-6 w-6" />,
      title: "FREE SHIPPING",
      description: "On all orders over $100"
    },
    {
      id: 2,
      icon: <FaShieldAlt className="h-6 w-6" />,
      title: "SECURE PAYMENT",
      description: "100% secure payment"
    },
    {
      id: 3,
      icon: <FaUndo className="h-6 w-6" />,
      title: "EASY RETURNS",
      description: "30 days return policy"
    },
    {
      id: 4,
      icon: <FaHeadset className="h-6 w-6" />,
      title: "24/7 SUPPORT",
      description: "Dedicated support"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    }))
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Implement newsletter subscription
    console.log('Newsletter subscription submitted')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Carousel */}
      <Carousel slides={carouselSlides} />

      {/* Featured Categories */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-center mb-20 text-white">
            FEATURED CATEGORIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-end p-12">
                  <div className="w-full">
                    <h3 className="text-3xl font-light tracking-wider text-white mb-6 transform transition-all duration-500 translate-y-0 opacity-100">
                      {category.title}
                    </h3>
                    <div className="flex items-center text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="mr-2 font-light tracking-wider">EXPLORE</span>
                      <FaArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 flex items-center justify-center mb-6">
                  <div className="text-cyan-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-wider mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
              FEATURED PRODUCTS
            </h2>
            <Link
              to="/products"
              className="text-cyan-400 hover:text-cyan-300 flex items-center font-light tracking-wider transition-colors duration-500"
            >
              VIEW ALL
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative w-full pb-[100%] overflow-hidden rounded-2xl bg-white/5">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-cyan-400 px-4 py-1 rounded-full text-sm font-light tracking-wider border border-white/20">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-light tracking-wider text-white group-hover:text-cyan-400 transition-colors duration-500">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-cyan-400'
                                : 'text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-white/60">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-xl font-light tracking-wider text-white">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.discount > 0 && (
                          <span className="ml-2 text-sm text-white/40 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-8 w-full bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-light tracking-wider hover:bg-white/10 transition-colors duration-500 flex items-center justify-center space-x-2 border border-white/10"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-6">
              STAY UPDATED
            </h2>
            <p className="text-xl text-white/80 mb-12 font-light tracking-wide">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-light tracking-wide border border-white/20"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black rounded-lg font-light tracking-wide hover:bg-white/90 transition-colors duration-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Access Bar */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/products"
            className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
          >
            <FaShoppingBag className="h-6 w-6 text-cyan-400" />
            <span className="text-white/80">Shop Now</span>
          </Link>
          <Link
            to="/products"
            className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
          >
            <FaSearch className="h-6 w-6 text-cyan-400" />
            <span className="text-white/80">Browse All</span>
          </Link>
          <Link
            to="/account"
            className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
          >
            <FaUser className="h-6 w-6 text-cyan-400" />
            <span className="text-white/80">My Account</span>
          </Link>
          <button className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
            <FaHeart className="h-6 w-6 text-cyan-400" />
            <span className="text-white/80">Wishlist</span>
          </button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-wider text-white mb-4">
            Follow Us on Social Media
          </h2>
          <p className="text-white/60">
            Stay connected and be the first to know about our latest updates
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          <a
            href="#"
            className="text-4xl text-white/60 hover:text-cyan-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-4xl text-white/60 hover:text-cyan-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-4xl text-white/60 hover:text-cyan-400 transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home; 
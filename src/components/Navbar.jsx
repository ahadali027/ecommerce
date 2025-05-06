import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [location])

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
    setIsSearchOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl sm:text-3xl font-light tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
              NEXUS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/" 
              className={`text-sm font-light tracking-wider transition-all duration-500 ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-white/80 hover:text-cyan-400'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-light tracking-wider transition-all duration-500 ${
                isActive('/products') 
                  ? 'text-cyan-400' 
                  : 'text-white/80 hover:text-cyan-400'
              }`}
            >
              SHOP
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-light tracking-wider transition-all duration-500 ${
                isActive('/about') 
                  ? 'text-cyan-400' 
                  : 'text-white/80 hover:text-cyan-400'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-light tracking-wider transition-all duration-500 ${
                isActive('/contact') 
                  ? 'text-cyan-400' 
                  : 'text-white/80 hover:text-cyan-400'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Desktop Right Side Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-500"
              aria-label="Search"
            >
              <FaSearch className="text-white/80 hover:text-cyan-400 text-lg transition-colors duration-500" />
            </button>

            <Link 
              to="/cart" 
              className="relative p-2 rounded-full hover:bg-white/10 transition-all duration-500"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-white/80 hover:text-cyan-400 text-lg transition-colors duration-500" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>

            <Link 
              to="/signin"
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-500"
              aria-label="Account"
            >
              <FaUser className="text-white/80 hover:text-cyan-400 text-lg transition-colors duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-white/10 transition-all duration-500 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-white/80 text-xl" />
            ) : (
              <FaBars className="text-white/80 text-xl" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className={`overflow-hidden transition-all duration-500 ${
          isSearchOpen ? 'h-16 opacity-100' : 'h-0 opacity-0'
        }`}>
          <form onSubmit={handleSearch} className="py-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-500"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-cyan-400 transition-colors duration-500"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-lg transition-all duration-500 ${
                isActive('/') 
                  ? 'bg-white/10 text-cyan-400' 
                  : 'text-white/80 hover:bg-white/10 hover:text-cyan-400'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/products" 
              className={`block px-4 py-3 rounded-lg transition-all duration-500 ${
                isActive('/products') 
                  ? 'bg-white/10 text-cyan-400' 
                  : 'text-white/80 hover:bg-white/10 hover:text-cyan-400'
              }`}
            >
              SHOP
            </Link>
            <Link 
              to="/about" 
              className={`block px-4 py-3 rounded-lg transition-all duration-500 ${
                isActive('/about') 
                  ? 'bg-white/10 text-cyan-400' 
                  : 'text-white/80 hover:bg-white/10 hover:text-cyan-400'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className={`block px-4 py-3 rounded-lg transition-all duration-500 ${
                isActive('/contact') 
                  ? 'bg-white/10 text-cyan-400' 
                  : 'text-white/80 hover:bg-white/10 hover:text-cyan-400'
              }`}
            >
              CONTACT
            </Link>
            <div className="border-t border-white/10 my-2"></div>
            <Link 
              to="/cart" 
              className="flex items-center px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-cyan-400 transition-all duration-500"
            >
              <FaShoppingCart className="mr-3 text-lg" />
              CART
              {totalQuantity > 0 && (
                <span className="ml-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <Link 
              to="/signin"
              className="flex items-center px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-cyan-400 transition-all duration-500"
            >
              <FaUser className="mr-3 text-lg" />
              ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
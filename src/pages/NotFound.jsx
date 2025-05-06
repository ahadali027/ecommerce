import { Link } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h1 className="text-9xl font-light tracking-wider mb-8 text-cyan-400">404</h1>
            <h2 className="text-4xl font-light tracking-wider mb-6">PAGE NOT FOUND</h2>
            <p className="text-white/60 mb-12 text-lg">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
              >
                <FaHome className="text-lg" />
                <span>Back to Home</span>
              </Link>
              <Link
                to="/products"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 rounded-lg transition-colors duration-500"
              >
                <FaSearch className="text-lg" />
                <span>Browse Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound 
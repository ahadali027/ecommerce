import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebook } from 'react-icons/fa'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    // Here you would typically handle the signup logic
    console.log('Signing up:', formData)
    navigate('/signin')
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light tracking-wider mb-4">CREATE ACCOUNT</h1>
            <p className="text-white/60">
              Join our community and start your shopping journey
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 mb-2">First Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                      placeholder="John"
                    />
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 mb-2">Last Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                      placeholder="Doe"
                    />
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white/60 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                    placeholder="john@example.com"
                  />
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                </div>
              </div>

              <div>
                <label className="block text-white/60 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                    placeholder="••••••••"
                  />
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                </div>
              </div>

              <div>
                <label className="block text-white/60 mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                    placeholder="••••••••"
                  />
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-light tracking-wider transition-colors duration-500"
              >
                CREATE ACCOUNT
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-white/60">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
                >
                  <FaGoogle className="text-xl" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
                >
                  <FaFacebook className="text-xl" />
                  <span>Facebook</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/60">
                Already have an account?{' '}
                <Link to="/signin" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp 
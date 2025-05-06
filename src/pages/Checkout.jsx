import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaLock, FaCreditCard, FaPaypal, FaApplePay } from 'react-icons/fa'
import { clearCart } from '../store/cartSlice'

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items, totalAmount } = useSelector((state) => state.cart)
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the payment processing
    console.log('Processing payment:', { paymentMethod, formData })
    dispatch(clearCart())
    navigate('/success')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light tracking-wider mb-12 text-center">CHECKOUT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-light tracking-wider mb-6">ORDER SUMMARY</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white/80 font-light">{item.name}</h3>
                      <p className="text-white/60">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 my-6"></div>
              <div className="flex justify-between items-center text-xl">
                <span className="text-white/80">Total</span>
                <span className="font-light">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-light tracking-wider mb-6">PAYMENT METHOD</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-500 ${
                    paymentMethod === 'credit'
                      ? 'bg-white/20 text-cyan-400'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <FaCreditCard className="text-xl" />
                  <span>Credit Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-500 ${
                    paymentMethod === 'paypal'
                      ? 'bg-white/20 text-cyan-400'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <FaPaypal className="text-xl" />
                  <span>PayPal</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-500 ${
                    paymentMethod === 'apple'
                      ? 'bg-white/20 text-cyan-400'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <FaApplePay className="text-xl" />
                  <span>Apple Pay</span>
                </button>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-light tracking-wider mb-6">SHIPPING INFORMATION</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                  />
                </div>
                <div>
                  <label className="block text-white/60 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                />
              </div>

              <div>
                <label className="block text-white/60 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-white/60 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                  />
                </div>
                <div>
                  <label className="block text-white/60 mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                  />
                </div>
                <div>
                  <label className="block text-white/60 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                  />
                </div>
              </div>

              {paymentMethod === 'credit' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/60 mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 mb-2">Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-light tracking-wider transition-colors duration-500 flex items-center justify-center space-x-2"
              >
                <FaLock className="text-lg" />
                <span>PLACE ORDER</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout 
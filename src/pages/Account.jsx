import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaShoppingBag, FaHeart, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa'

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St',
    city: 'New York',
    country: 'United States',
    zipCode: '10001'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically handle the profile update
    console.log('Updating profile:', profileData)
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'orders', label: 'Orders', icon: FaShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: FaHeart },
    { id: 'settings', label: 'Settings', icon: FaCog }
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light tracking-wider mb-12 text-center">MY ACCOUNT</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <nav className="space-y-2">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-500 ${
                        activeTab === tab.id
                          ? 'bg-white/20 text-cyan-400'
                          : 'text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <tab.icon className="text-lg" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                  <button
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-all duration-500"
                  >
                    <FaSignOutAlt className="text-lg" />
                    <span>Sign Out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-light tracking-wider">PROFILE INFORMATION</h2>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
                      >
                        <FaEdit />
                        <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/60 mb-2">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/60 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-white/60 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-white/60 mb-2">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={profileData.address}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <label className="block text-white/60 mb-2">City</label>
                          <input
                            type="text"
                            name="city"
                            value={profileData.city}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 mb-2">Country</label>
                          <input
                            type="text"
                            name="country"
                            value={profileData.country}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 mb-2">ZIP Code</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={profileData.zipCode}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-white/40 disabled:opacity-50"
                          />
                        </div>
                      </div>

                      {isEditing && (
                        <div className="flex justify-end space-x-4">
                          <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-500"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-3 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 rounded-lg transition-colors duration-500"
                          >
                            Save Changes
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div>
                    <h2 className="text-2xl font-light tracking-wider mb-8">ORDER HISTORY</h2>
                    <div className="text-center text-white/60 py-12">
                      No orders found
                    </div>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div>
                    <h2 className="text-2xl font-light tracking-wider mb-8">MY WISHLIST</h2>
                    <div className="text-center text-white/60 py-12">
                      Your wishlist is empty
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-light tracking-wider mb-8">ACCOUNT SETTINGS</h2>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <h3 className="text-white/80">Email Notifications</h3>
                          <p className="text-white/60 text-sm">Receive updates about your orders</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <h3 className="text-white/80">Marketing Emails</h3>
                          <p className="text-white/60 text-sm">Receive updates about new products</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <h3 className="text-white/80">Two-Factor Authentication</h3>
                          <p className="text-white/60 text-sm">Add an extra layer of security</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account 
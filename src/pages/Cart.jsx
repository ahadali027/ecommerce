import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, deleteFromCart } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalAmount } = useSelector((state) => state.cart)

  const shipping = 10
  const total = totalAmount + shipping

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Cart Items */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-bold">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-gray-800 dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => handleDeleteFromCart(item.id)}
                    className="p-2 text-red-500 hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Order Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart 
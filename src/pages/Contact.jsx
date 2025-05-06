import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-purple-600">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Get in touch with our team for any questions or assistance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                123 Watch Street<br />
                New York, NY 10001
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
                <FaPhone className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                +1 (555) 123-4567<br />
                +1 (555) 987-6543
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
                <FaEnvelope className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                info@watchhub.com<br />
                support@watchhub.com
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
                <FaClock className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mon-Fri: 9:00 AM - 8:00 PM<br />
                Sat: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 dark:bg-gray-700">
        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564750986!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact 
import { FaUsers, FaAward, FaHandshake, FaGlobe } from 'react-icons/fa'

const About = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl" />,
      number: "10K+",
      label: "Happy Customers"
    },
    {
      id: 2,
      icon: <FaAward className="text-4xl" />,
      number: "20+",
      label: "Years Experience"
    },
    {
      id: 3,
      icon: <FaHandshake className="text-4xl" />,
      number: "50+",
      label: "Brand Partners"
    },
    {
      id: 4,
      icon: <FaGlobe className="text-4xl" />,
      number: "100+",
      label: "Countries Served"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-purple-600">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About WatchHub
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Your premier destination for luxury timepieces and exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                Founded in 2003, WatchHub has grown from a small boutique to one of the world's leading luxury watch retailers. Our journey began with a simple mission: to provide watch enthusiasts with access to the finest timepieces while delivering exceptional service.
              </p>
              <p>
                Over the years, we've built strong relationships with renowned watch brands and established ourselves as a trusted authority in the industry. Our expert team of watch specialists ensures that every customer receives personalized attention and expert guidance.
              </p>
              <p>
                Today, we continue to expand our collection while maintaining our commitment to quality, authenticity, and customer satisfaction. Whether you're a seasoned collector or new to the world of luxury watches, WatchHub is your trusted partner in finding the perfect timepiece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We carefully curate our collection to ensure every watch meets our high standards of quality and authenticity.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team of watch specialists provides expert guidance to help you find the perfect timepiece.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to providing exceptional service and support throughout your watch-buying journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 
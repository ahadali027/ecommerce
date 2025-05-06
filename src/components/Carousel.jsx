import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [slides.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [isTransitioning])

  const goToSlide = useCallback((index) => {
    if (isTransitioning || current === index) return
    setIsTransitioning(true)
    setCurrent(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [current, isTransitioning])

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, isHovered, nextSlide])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div 
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
                    {slide.title}
                  </h2>
                  <p className="text-xl sm:text-2xl text-white/80 mb-12 transform transition-all duration-1000 translate-y-0 opacity-100 max-w-xl font-light tracking-wide">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.link}
                    className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-light tracking-wide transform transition-all duration-500 hover:bg-white/20 hover:scale-105 border border-white/20"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-500 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-500 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              current === index 
                ? 'bg-white w-12' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
        <span className="text-sm font-light tracking-wide mb-2">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </div>
  )
}

export default Carousel 
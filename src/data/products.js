export const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "smart"
  },
  {
    id: 2,
    name: "Luxury Chronograph",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    rating: 4.8,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "luxury"
  },
  {
    id: 3,
    name: "Sports Tracker",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.3,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "sports"
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 299.99,
    originalPrice: 349.99,
    discount: 10,
    rating: 4.6,
    reviews: 89,
    description: "Stay connected and track your fitness goals with our advanced smart watch. Features include heart rate monitoring, GPS tracking, and seamless smartphone integration.",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Water Resistant",
      "Sleep Tracking",
      "Smart Notifications",
      "7-Day Battery Life"
    ],
    specifications: {
      "Display": "1.4\" AMOLED",
      "Battery Life": "7 Days",
      "Water Resistance": "50m",
      "Connectivity": "Bluetooth 5.0",
      "Sensors": "Heart Rate, GPS, Accelerometer",
      "Compatibility": "iOS & Android",
      "Strap": "Silicone",
      "Warranty": "1 Year"
    },
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww"
    ],
    category: "smart",
    stock: 25,
    sku: "SMART-FIT-001"
  },
  {
    id: 5,
    name: "Classic Automatic Watch",
    price: 899.99,
    originalPrice: 999.99,
    discount: 0,
    rating: 4.9,
    reviews: 156,
    description: "A timeless classic that combines traditional watchmaking with modern elegance. This automatic watch features a sophisticated design that's perfect for any occasion.",
    features: [
      "Automatic Movement",
      "Sapphire Crystal",
      "Stainless Steel Case",
      "Water Resistant",
      "Date Window",
      "Leather Strap"
    ],
    specifications: {
      "Movement": "Automatic",
      "Case Material": "Stainless Steel",
      "Case Diameter": "40mm",
      "Case Thickness": "11mm",
      "Crystal": "Sapphire",
      "Water Resistance": "50m",
      "Strap": "Genuine Leather",
      "Warranty": "2 Years"
    },
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww"
    ],
    category: "classic",
    stock: 20,
    sku: "CLASS-AUTO-001"
  },
  {
    "id": 6,
    "name": "Vintage Chronograph Watch",
    "price": 749.99,
    "originalPrice": 899.99,
    "discount": 0.17,
    "rating": 4.7,
    "reviews": 89,
    "description": "A retro-inspired chronograph with genuine leather strap and precise quartz movement.",
    "features": [
      "Quartz Movement",
      "Mineral Crystal",
      "Chronograph Function",
      "Water Resistant",
      "Luminous Hands"
    ],
    "specifications": {
      "Movement": "Quartz",
      "Case Material": "Brass",
      "Case Diameter": "42mm",
      "Water Resistance": "30m",
      "Strap": "Vintage Leather"
    },
    "images": [
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop&q=60"
    ],
    "category": "vintage",
    "stock": 15,
    "sku": "VINT-CHRON-001"
  },
  {
    "id": 7,
    "name": "Diver's Professional Watch",
    "price": 1299.99,
    "originalPrice": 1499.99,
    "discount": 0.13,
    "rating": 4.9,
    "reviews": 210,
    "description": "Professional diving watch with 300m water resistance and unidirectional bezel.",
    "features": [
      "Automatic Movement",
      "Ceramic Bezel",
      "Super-LumiNova Markers",
      "Helium Escape Valve",
      "Screw-down Crown"
    ],
    "specifications": {
      "Movement": "Automatic",
      "Case Material": "Stainless Steel",
      "Case Diameter": "44mm",
      "Water Resistance": "300m",
      "Strap": "Rubber"
    },
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&auto=format&fit=crop&q=60"
    ],
    "category": "sports",
    "stock": 8,
    "sku": "DIVE-PRO-202"
  },
  {
    "id": 8,
    "name": "Minimalist Bauhaus Watch",
    "price": 349.99,
    "rating": 4.5,
    "reviews": 67,
    "description": "Clean German design with ultra-thin profile and minimalist dial.",
    "features": [
      "Quartz Movement",
      "Sapphire Crystal",
      "5ATM Water Resistance",
      "Mesh Strap",
      "Under 6mm Thick"
    ],
    "images": [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1451290337906-ac107fc5043e?w=800&auto=format&fit=crop&q=60"
    ],
    "category": "minimalist",
    "stock": 25,
    "sku": "MINI-BAU-003"
  },
  {
    "id": 9,
    "name": "Smart Hybrid Watch",
    "price": 199.99,
    "originalPrice": 249.99,
    "discount": 0.2,
    "rating": 4.3,
    "reviews": 312,
    "description": "Analog watch with smart notifications and activity tracking.",
    "features": [
      "Bluetooth Connectivity",
      "6 Months Battery",
      "Activity Tracking",
      "Call/SMS Alerts",
      "IP68 Waterproof"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=60"
    ],
    "category": "smart",
    "stock": 42,
    "sku": "SMART-HY-004"
  }
] 
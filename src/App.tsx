import { useState } from 'react';
import { Leaf, ShoppingBag, Heart, Mail, Phone, Facebook, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Natural Beige',
      color: 'Beige',
      image: 'https://images.pexels.com/photos/6069064/pexels-photo-6069064.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/6069064/pexels-photo-6069064.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6069065/pexels-photo-6069065.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      description: 'Classic and versatile beige cotton covers that blend seamlessly with any kitchen decor.',
      longDescription: 'Our Natural Beige collection brings timeless elegance to your kitchen. Made from 100% organic cotton, these covers are perfect for everyday use. The neutral tone complements any kitchen style while providing an eco-friendly solution to food storage.',
      features: [
        '100% organic cotton fabric',
        'Elastic edge for secure fit',
        'Machine washable up to 60°C',
        'Breathable material keeps food fresh',
        'Durable and long-lasting'
      ],
      sizes: [
        { name: 'Small', diameter: '15cm (6")', ideal: 'Perfect for cups and small bowls' },
        { name: 'Medium', diameter: '20cm (8")', ideal: 'Great for medium bowls and containers' },
        { name: 'Large', diameter: '25cm (10")', ideal: 'Ideal for large bowls and serving dishes' }
      ]
    },
    {
      id: 2,
      name: 'Sage Green',
      color: 'Green',
      image: 'https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6069064/pexels-photo-6069064.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6069066/pexels-photo-6069066.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      description: 'Fresh sage green covers that bring a touch of nature into your sustainable kitchen.',
      longDescription: 'The Sage Green collection adds a refreshing natural touch to your kitchen. Inspired by nature, this calming color promotes sustainable living while keeping your food fresh and protected.',
      features: [
        '100% organic cotton fabric',
        'Elastic edge for secure fit',
        'Machine washable up to 60°C',
        'Breathable material keeps food fresh',
        'Durable and long-lasting'
      ],
      sizes: [
        { name: 'Small', diameter: '15cm (6")', ideal: 'Perfect for cups and small bowls' },
        { name: 'Medium', diameter: '20cm (8")', ideal: 'Great for medium bowls and containers' },
        { name: 'Large', diameter: '25cm (10")', ideal: 'Ideal for large bowls and serving dishes' }
      ]
    },
    {
      id: 3,
      name: 'Terracotta',
      color: 'Terracotta',
      image: 'https://images.pexels.com/photos/6069066/pexels-photo-6069066.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/6069066/pexels-photo-6069066.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      description: 'Warm terracotta tones that add an earthy, organic feel to your food storage.',
      longDescription: 'Our Terracotta collection brings warmth and rustic charm to your kitchen. The rich, earthy tones create a cozy atmosphere while providing a practical, sustainable solution for food storage.',
      features: [
        '100% organic cotton fabric',
        'Elastic edge for secure fit',
        'Machine washable up to 60°C',
        'Breathable material keeps food fresh',
        'Durable and long-lasting'
      ],
      sizes: [
        { name: 'Small', diameter: '15cm (6")', ideal: 'Perfect for cups and small bowls' },
        { name: 'Medium', diameter: '20cm (8")', ideal: 'Great for medium bowls and containers' },
        { name: 'Large', diameter: '25cm (10")', ideal: 'Ideal for large bowls and serving dishes' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-emerald-600" />
              <span className="text-xl font-semibold text-stone-800">EcoCover</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-stone-600 hover:text-emerald-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-stone-600 hover:text-emerald-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-stone-600 hover:text-emerald-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-600 hover:text-emerald-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Kitchen with cotton bowl covers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <Leaf className="w-16 h-16 text-emerald-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Reusable Cotton Bowl Covers
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 mb-10 font-light">
            Sustainable, Stylish, Simple
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
                <h2 className="text-4xl font-bold text-stone-800">Our Mission</h2>
              </div>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                At EcoCover, we believe that small changes can make a big impact. Our reusable cotton bowl covers are designed to help you reduce plastic waste in your kitchen while adding a touch of natural beauty to your daily routine.
              </p>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Made from 100% organic cotton, each set is crafted with care to provide a sustainable alternative to single-use plastic wrap. Join us in creating a greener future, one bowl at a time.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                  <div className="text-sm text-stone-600">Organic Cotton</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">Zero</div>
                  <div className="text-sm text-stone-600">Plastic Waste</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">Reusable</div>
                  <div className="text-sm text-stone-600">Long Lasting</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/6069065/pexels-photo-6069065.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cotton fabric and kitchen setting"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShoppingBag className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-stone-800">Our Collection</h2>
            </div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Choose from three beautiful colors. Each set includes 4 covers in small, medium, and large sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setCurrentImageIndex(0);
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-stone-800 mb-2">{product.name}</h3>
                  <p className="text-stone-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-stone-700 mb-2">Set includes:</div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-600">Small</span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-600">Medium</span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-600">Large</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                      setCurrentImageIndex(0);
                    }}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-stone-800">Get In Touch</h2>
            </div>
            <p className="text-lg text-stone-600">
              Have questions? We would love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors outline-none resize-none"
                    placeholder="Tell us about your order..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-stone-600">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span>hello@ecocover.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span>(555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="font-semibold text-stone-800 mb-2">Why Choose EcoCover?</h4>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>100% organic, breathable cotton</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Machine washable and reusable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Reduces plastic waste in your home</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-stone-800">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-stone-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1))}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                        >
                          <ChevronLeft className="w-5 h-5 text-stone-800" />
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1))}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                        >
                          <ChevronRight className="w-5 h-5 text-stone-800" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {selectedProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx ? 'border-emerald-600 scale-95' : 'border-stone-200 hover:border-emerald-400'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">{selectedProduct.longDescription}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-stone-800 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-stone-600">
                          <Leaf className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-stone-800 mb-3">Set Includes (4 covers)</h3>
                    <div className="space-y-3">
                      {selectedProduct.sizes.map((size, idx) => (
                        <div key={idx} className="bg-stone-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-stone-800">{size.name}</span>
                            <span className="text-sm text-stone-600">{size.diameter}</span>
                          </div>
                          <p className="text-sm text-stone-500">{size.ideal}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-stone-800 mb-2">Care Instructions</h4>
                    <p className="text-sm text-stone-600">Machine wash at 60°C. Tumble dry low or air dry. Iron on medium heat if needed. Do not bleach.</p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      scrollToSection('contact');
                    }}
                    className="w-full bg-emerald-600 text-white py-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-lg"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-stone-800 text-stone-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-semibold text-white">EcoCover</span>
          </div>
          <p className="text-sm mb-4">
            Sustainable living starts with simple choices.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-stone-400">
            © 2025 EcoCover. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

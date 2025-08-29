import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Wrench, Car, Facebook, Instagram, MessageSquare, Youtube, ExternalLink, Camera, Image, Play } from 'lucide-react';
import ReviewSection from './components/ReviewSection';

function App() {
  const services = [
    "Oil Changes & Fluid Services",
    "Brake Repair & Replacement", 
    "Battery Testing & Replacement",
    "Tire Services & Rotation",
    "Preventive Maintenance"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-3">
            <img 
              src="/IMG_0804.PNG" 
              alt="Cottondale Auto Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-blue-400"
            />
            <h1 className="text-lg sm:text-2xl font-bold">Cottondale Auto</h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a 
              href="tel:9405773346"
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 sm:px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <a 
              href="sms:9405773346"
              className="bg-green-600 hover:bg-green-700 px-3 py-2 sm:px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
            >
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Text</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-12 sm:py-20">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Professional Mobile <span className="text-blue-400">Auto Repair</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 leading-relaxed px-4">
              Expert automotive service that comes to you. No more waiting at the shop - 
              we bring professional repairs right to your location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <a 
                href="tel:9405773346"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>(940) 577-3346</span>
              </a>
              <p className="text-base sm:text-lg text-gray-300 font-medium">
                Call for Scheduling
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-colors duration-200">
                <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">We Come to You</h3>
                <p className="text-gray-300 text-sm sm:text-base">Service at your home, office, or anywhere convenient</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-colors duration-200">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-300 text-sm sm:text-base">Evening and weekend appointments available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-colors duration-200">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-300 text-sm sm:text-base">Professional service with warranty protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mr-3 sm:mr-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Work in Action</h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See the quality and professionalism we bring to every mobile repair service
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Work Photos */}
            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0844.jpg" 
                alt="Auto repair work - Engine maintenance" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0845.jpg" 
                alt="Auto repair work - Vehicle service" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0846.PNG" 
                alt="Auto repair work - Professional service" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0884.jpg" 
                alt="Cottondale Auto - Professional mobile mechanic" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0979.JPG" 
                alt="Mobile auto repair service in action" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0968.JPG" 
                alt="Quality automotive service" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0980.JPG" 
                alt="Quality automotive service" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <img 
                src="/IMG_0965.JPG" 
                alt="Quality automotive service" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Quality You Can See</h3>
            <p className="text-blue-100 text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
              Every repair is performed with precision and care. See the difference professional mobile service makes.
            </p>
            <a 
              href="tel:9405773346"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 sm:space-x-3"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>Schedule Your Service</span>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <ReviewSection />

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Complete automotive repair and maintenance services delivered with professional expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{service}</h3>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
            <Car className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-blue-200" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Mobile Service?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Save Time</h4>
                <p className="text-blue-100 text-sm sm:text-base">No need to drive to a shop or wait in uncomfortable waiting areas</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Save Money</h4>
                <p className="text-blue-100 text-sm sm:text-base">Lower overhead means competitive pricing for quality work</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Peace of Mind</h4>
                <p className="text-blue-100 text-sm sm:text-base">Watch the work being done and ask questions throughout the process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Fair, upfront pricing with no hidden fees. Quality service at competitive rates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 sm:p-8 text-white text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Car className="h-12 w-12 sm:h-16 sm:w-16 text-orange-100" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Oil Change Service</h3>
              <div className="text-4xl sm:text-5xl font-bold mb-4">$80</div>
              <p className="text-orange-100 text-base sm:text-lg mb-6">
                Complete oil change service including filter replacement
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                <p className="text-sm sm:text-base font-medium">
                  * Prices may vary depending on location and vehicle requirements
                </p>
              </div>
              <a 
                href="tel:9405773346"
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 sm:space-x-3"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Book Now</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-200">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Quality Oil</h4>
                <p className="text-gray-600 text-sm sm:text-base">Premium motor oil for optimal engine performance</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-200">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Filter Included</h4>
                <p className="text-gray-600 text-sm sm:text-base">New oil filter with every service</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-200 sm:col-span-2 lg:col-span-1">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Mobile Service</h4>
                <p className="text-gray-600 text-sm sm:text-base">Convenient service at your location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* YouTube Showcase Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Youtube className="h-12 w-12 sm:h-16 sm:w-16 text-red-200 mr-3 sm:mr-4" />
              <h2 className="text-3xl sm:text-4xl font-bold">See Our Work</h2>
            </div>
            <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto px-4">
              Watch real repairs and maintenance services on our YouTube channel. 
              See the quality and professionalism we bring to every job.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main YouTube CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Cottondale Auto YouTube Channel</h3>
                <p className="text-red-100 text-lg lg:text-xl mb-8 leading-relaxed">
                  Subscribe to see behind-the-scenes footage of our mobile repair services, 
                  maintenance tips, and satisfied customer testimonials. Watch real work being done by real professionals.
                </p>
                <a 
                  href="https://youtube.com/@cottondaleauto?si=IytP3KjfwjS57vgY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
                >
                  <Youtube className="h-6 w-6" />
                  <span>Visit Our Channel</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
                <div className="text-center mb-6">
                  <Youtube className="h-16 w-16 lg:h-20 lg:w-20 mx-auto mb-4 text-red-200" />
                  <h4 className="text-xl lg:text-2xl font-bold mb-2">Why Watch Our Videos?</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Play className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">Live Repairs</h5>
                      <p className="text-red-100 text-sm">Watch actual repair work being performed on customer vehicles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">Quality Proof</h5>
                      <p className="text-red-100 text-sm">See the attention to detail and professional standards we maintain</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">Customer Stories</h5>
                      <p className="text-red-100 text-sm">Hear from satisfied customers about their mobile service experience</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            
            {/* Video Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-200 transform hover:scale-105">
                <div className="bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-red-200" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Real Work</h4>
                <p className="text-red-100">Unedited footage of actual repairs and maintenance being performed</p>
              </div> */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-200 transform hover:scale-105">
                <div className="bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-red-200" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Expert Tips</h4>
                <p className="text-red-100">Learn maintenance tips and tricks from experienced professionals</p>
              </div>
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-200 transform hover:scale-105">
                <div className="bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-red-200" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Testimonials</h4>
                <p className="text-red-100">Hear directly from customers about their mobile service experience</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Ready to Schedule Service?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-4">
              Contact us today to schedule your convenient mobile auto repair service
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <a 
                href="tel:9405773346"
                className="bg-orange-500 hover:bg-orange-600 rounded-xl p-4 sm:p-6 transition-colors duration-200 transform hover:scale-105 group"
              >
                <Phone className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-white group-hover:animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Call Now</h3>
                <p className="text-xl sm:text-2xl font-bold">(940) 577-3346</p>
                <p className="mt-2 text-orange-100 text-sm sm:text-base">Click to call for scheduling</p>
              </a>
              
              <a 
                href="sms:9405773346"
                className="bg-green-500 hover:bg-green-600 rounded-xl p-4 sm:p-6 transition-colors duration-200 transform hover:scale-105 group"
              >
                <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-white group-hover:animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Text Us</h3>
                <p className="text-xl sm:text-2xl font-bold">(940) 577-3346</p>
                <p className="mt-2 text-green-100 text-sm sm:text-base">Send us a text message</p>
              </a>
              
              <a 
                href="mailto:samuel.wooley@live.com"
                className="bg-blue-600 hover:bg-blue-700 rounded-xl p-4 sm:p-6 transition-colors duration-200 transform hover:scale-105 group"
              >
                <Mail className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-white group-hover:animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Email Us</h3>
                <p className="text-base sm:text-lg font-semibold break-all">samuel.wooley@live.com</p>
                <p className="mt-2 text-blue-100 text-sm sm:text-base">Send us a message</p>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Service Area</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Serving Wise County and surrounding areas with professional mobile auto repair services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/IMG_0804.PNG" 
              alt="Cottondale Auto Logo" 
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover border border-blue-400"
            />
            <span className="text-lg sm:text-xl font-bold">Cottondale Auto</span>
          </div>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
            <a 
              href="https://www.facebook.com/lance.wooley.90/" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
             href="https://www.instagram.com/cottondaleauto?igsh=MTF2d2Z0czRsMGljYw%3D%3D&utm_source=qr"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://youtube.com/@cottondaleauto?si=IytP3KjfwjS57vgY" 
              className="text-gray-400 hover:text-red-500 transition-colors duration-200 transform hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://www.tiktok.com/@cottondaleauto?_t=ZT-8yAaSOATz5h&_r=1" 
              className="text-gray-400 hover:text-pink-400 transition-colors duration-200 transform hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-gray-400 mb-2 text-sm sm:text-base">Professional Mobile Auto Repair Services</p>
          <p className="text-gray-400 text-sm sm:text-base">
            Call for Scheduling
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
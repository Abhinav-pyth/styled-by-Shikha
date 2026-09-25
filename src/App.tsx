import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import BlogModal from './components/BlogModal';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import ContactForm from './components/ContactForm';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [bookingModal, setBookingModal] = useState<{ open: boolean; pkg: string }>({ open: false, pkg: '' });
  const [showContactSection, setShowContactSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load dark mode preference
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleBookPackage = (pkg: string) => {
    setBookingModal({ open: true, pkg });
  };

  const handleReadMore = (post: any) => {
    setSelectedBlogPost(post);
  };

  return (
    <div className={`min-h-screen font-serif transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar scrolled={scrolled} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing onBook={handleBookPackage} />
      <Testimonials />
      <Blog onReadMore={handleReadMore} />
      <FAQ />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Left - Info */}
            <div>
              <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Let's Work Together
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to transform your style? Fill out the form and I'll get back to you within 24 hours. 
                Whether you need a complete wardrobe overhaul or just some styling tips, I'm here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 text-amber-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">hello@styledbyshikha.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 text-amber-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 text-amber-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-stone-50 p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
      <BackToTop />
      <CookieConsent />

      {/* Blog Modal */}
      {selectedBlogPost && (
        <BlogModal
          post={selectedBlogPost}
          onClose={() => setSelectedBlogPost(null)}
        />
      )}

      {/* Booking Modal */}
      {bookingModal.open && (
        <BookingModal
          selectedPackage={bookingModal.pkg}
          onClose={() => setBookingModal({ open: false, pkg: '' })}
        />
      )}
    </div>
  );
}

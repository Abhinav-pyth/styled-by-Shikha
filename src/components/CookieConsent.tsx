import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show after 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-700 text-sm">
            🍪 We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-6 py-2 text-sm tracking-wider uppercase text-gray-600 border border-gray-300 hover:border-gray-400 transition-colors duration-300"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 text-sm tracking-wider uppercase bg-amber-700 text-white hover:bg-amber-800 transition-colors duration-300"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

import ContactForm from './ContactForm';

interface BookingModalProps {
  selectedPackage: string;
  onClose: () => void;
}

export default function BookingModal({ selectedPackage, onClose }: BookingModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors duration-300"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-2">
            Book a Session
          </p>
          <h2 className="text-3xl font-light text-gray-900">
            {selectedPackage || 'Get in Touch'}
          </h2>
          {selectedPackage && (
            <p className="text-gray-500 text-sm mt-2">
              Fill out the form below to book your {selectedPackage} session
            </p>
          )}
        </div>

        <ContactForm selectedPackage={selectedPackage} onClose={onClose} />
      </div>
    </div>
  );
}

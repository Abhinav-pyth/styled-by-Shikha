interface PortfolioModalProps {
  item: {
    id: number;
    src: string;
    title: string;
    category: string;
  } | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PortfolioModal({ item, onClose, onPrev, onNext }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 z-10"
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/30 rounded-full text-white/70 hover:text-white hover:border-white/60 transition-all duration-300 z-10"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/30 rounded-full text-white/70 hover:text-white hover:border-white/60 transition-all duration-300 z-10"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="max-w-5xl max-h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.title}
          className="max-w-full max-h-[75vh] object-contain mx-auto"
        />
        <div className="text-center mt-6">
          <h3 className="text-white text-xl font-light">{item.title}</h3>
          <p className="text-white/60 text-sm tracking-widest uppercase mt-2">{item.category}</p>
        </div>
      </div>
    </div>
  );
}

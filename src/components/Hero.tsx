export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/1cc59b42-4cf6-4b25-90cb-ec3f9e7d8dc7/_result.png"
          alt="Fashion Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-white/80 text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in">
          Fashion • Style • Lifestyle
        </p>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight mb-8">
          Styled by Aria
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Curating timeless elegance and modern style. Discover outfit inspiration,
          styling tips, and fashion stories that celebrate your unique beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-10 py-4 bg-white text-gray-900 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Marketing Executive',
      text: 'Shikha completely transformed my wardrobe. She has an incredible eye for what suits your body type and personality. I now get compliments everywhere I go!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Ananya Patel',
      role: 'Entrepreneur',
      text: 'The color analysis session was life-changing. I finally understand which colors make me look radiant. My confidence has skyrocketed since working with Shikha.',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      name: 'Meera Joshi',
      role: 'Bride',
      text: 'Shikha styled me for my wedding and every function. She understood my vision perfectly and made me feel like the most beautiful version of myself.',
      rating: 5,
      avatar: '👰',
    },
    {
      name: 'Kavya Reddy',
      role: 'Content Creator',
      text: 'Working with Shikha on my brand styling was amazing. She knows how to create a cohesive look that translates beautifully on camera and social media.',
      rating: 5,
      avatar: '📸',
    },
    {
      name: 'Nisha Gupta',
      role: 'Doctor',
      text: 'As a busy professional, I needed someone who could create a capsule wardrobe for me. Shikha delivered beyond my expectations - effortless elegance!',
      rating: 5,
      avatar: '👩‍⚕️',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Real stories from real people who have transformed their style with my help.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-8 md:p-12 shadow-sm">
            {/* Quote Icon */}
            <div className="absolute top-6 left-8 text-6xl text-amber-100 font-serif leading-none">
              "
            </div>

            {/* Content */}
            <div
              className={`relative z-10 text-center transition-all duration-300 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="text-5xl mb-6">{testimonials[current].avatar}</div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h4 className="text-gray-900 font-medium text-lg">
                {testimonials[current].name}
              </h4>
              <p className="text-gray-500 text-sm tracking-wider uppercase mt-1">
                {testimonials[current].role}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-gray-400 hover:text-amber-700 hover:border-amber-700 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-gray-400 hover:text-amber-700 hover:border-amber-700 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'bg-amber-700 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

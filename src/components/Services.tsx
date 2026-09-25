export default function Services() {
  const services = [
    {
      icon: '✨',
      title: 'Personal Styling',
      description:
        'One-on-one styling sessions tailored to your body type, lifestyle, and personal preferences. Discover your signature look.',
    },
    {
      icon: '👗',
      title: 'Wardrobe Consultation',
      description:
        'Let me help you curate a versatile wardrobe that works for every occasion. From closet edits to shopping guides.',
    },
    {
      icon: '📸',
      title: 'Content Creation',
      description:
        'Professional fashion content for brands and individuals. Outfit photography, styling for shoots, and social media content.',
    },
    {
      icon: '💍',
      title: 'Special Occasions',
      description:
        'From weddings to galas, I will ensure you look and feel your absolute best on your most important days.',
    },
    {
      icon: '🎨',
      title: 'Color Analysis',
      description:
        'Discover the colors that complement your skin tone, hair, and eyes. Build a palette that makes you glow.',
    },
    {
      icon: '🛍️',
      title: 'Shopping Companion',
      description:
        'Let me guide you through the stores. I will help you find pieces that fit perfectly and align with your style goals.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            My Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From personal styling to wardrobe transformations, I offer a range of
            services designed to help you look and feel your best every day.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gray-900 text-white text-sm tracking-widest uppercase hover:bg-amber-700 transition-colors duration-300"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}

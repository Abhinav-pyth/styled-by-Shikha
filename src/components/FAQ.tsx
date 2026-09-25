import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a styling session?',
      answer: 'You can book a session through our contact form, by emailing hello@styledbyshikha.com, or by calling us directly. We recommend booking at least 2 weeks in advance to secure your preferred date and time.',
    },
    {
      question: 'What should I wear to my consultation?',
      answer: 'Wear something comfortable that you feel good in. Avoid overly baggy or tight clothing. The goal is for me to see your natural body shape and style preferences. Neutral colors work best.',
    },
    {
      question: 'Do you offer virtual styling sessions?',
      answer: 'Yes! We offer virtual consultations via Zoom for clients who are not local or prefer remote sessions. Virtual sessions include video calls, photo reviews, and detailed style guides delivered digitally.',
    },
    {
      question: 'How long does a typical styling session last?',
      answer: 'Initial consultations are 90 minutes. Wardrobe edits typically take 2-3 hours. Shopping sessions are 3-4 hours. Special event styling varies based on the number of outfits needed.',
    },
    {
      question: 'Can you help with specific body types or sizes?',
      answer: 'Absolutely! I work with all body types, sizes, and ages. My approach is inclusive and focused on celebrating your unique features. I believe style has no size limit.',
    },
    {
      question: 'Do you provide the clothing or do I purchase it?',
      answer: 'You purchase all clothing and accessories. I provide guidance, recommendations, and styling expertise. I can accompany you on shopping trips or provide a curated shopping list with links.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We offer free rescheduling up to 48 hours before your session. Cancellations within 48 hours may incur a 50% fee. No-shows are charged the full session fee.',
    },
    {
      question: 'Do you work with men as well?',
      answer: 'Yes! While my specialty is womens fashion, I also offer styling services for men. Many clients book couples sessions to coordinate their looks for events or everyday style.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Common Questions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Everything you need to know about working with me. Can't find your answer? Feel free to reach out!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:border-amber-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <h3 className="text-gray-900 font-medium pr-4 group-hover:text-amber-700 transition-colors duration-300">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-amber-700 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block text-sm tracking-widest uppercase text-amber-700 border-b border-amber-700 pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

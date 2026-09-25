import { useState } from 'react';

interface PricingProps {
  onBook: (pkg: string) => void;
}

export default function Pricing({ onBook }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'one-time' | 'monthly'>('one-time');

  const packages = [
    {
      name: 'Style Discovery',
      description: 'Perfect for getting started on your style journey',
      price: { 'one-time': 199, monthly: 0 },
      features: [
        '90-minute consultation',
        'Personal style assessment',
        'Color palette recommendation',
        'Basic wardrobe audit',
        'Style guide PDF',
        'Email support for 1 week',
      ],
      popular: false,
    },
    {
      name: 'Style Transformation',
      description: 'Complete wardrobe overhaul and personal styling',
      price: { 'one-time': 499, monthly: 0 },
      features: [
        'Everything in Discovery',
        'Full wardrobe edit (3 hours)',
        'Personal shopping session',
        '10 outfit combinations',
        'Seasonal style plan',
        'Follow-up consultation',
        'Email support for 1 month',
        'Priority booking',
      ],
      popular: true,
    },
    {
      name: 'Style VIP',
      description: 'Ongoing styling support and exclusive access',
      price: { 'one-time': 0, monthly: 299 },
      features: [
        'Everything in Transformation',
        'Monthly styling sessions',
        'Unlimited email support',
        'Seasonal wardrobe updates',
        'Event styling included',
        'Early access to workshops',
        'Exclusive discounts',
        'Virtual styling calls',
        'Personal shopper on-call',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Investment in Your Style
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Choose the package that fits your needs. All packages include a satisfaction guarantee.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setBillingCycle('one-time')}
            className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
              billingCycle === 'one-time' ? 'text-amber-700 font-medium' : 'text-gray-500'
            }`}
          >
            One-Time
          </button>
          <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer" onClick={() => setBillingCycle(billingCycle === 'one-time' ? 'monthly' : 'one-time')}>
            <div className={`absolute top-1 w-4 h-4 bg-amber-700 rounded-full transition-all duration-300 ${billingCycle === 'monthly' ? 'left-7' : 'left-1'}`}></div>
          </div>
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
              billingCycle === 'monthly' ? 'text-amber-700 font-medium' : 'text-gray-500'
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 border transition-all duration-300 hover:shadow-lg ${
                pkg.popular
                  ? 'border-amber-700 shadow-md scale-105'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs tracking-widest uppercase px-4 py-1">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-light text-gray-900 mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>

              <div className="mb-6">
                {billingCycle === 'one-time' ? (
                  pkg.price['one-time'] > 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-light text-gray-900">${pkg.price['one-time']}</span>
                      <span className="text-gray-500 text-sm">/session</span>
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm italic">Available in monthly plan</div>
                  )
                ) : (
                  pkg.price.monthly > 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-light text-gray-900">${pkg.price.monthly}</span>
                      <span className="text-gray-500 text-sm">/month</span>
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm italic">Available as one-time</div>
                  )
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onBook(pkg.name)}
                className={`w-full py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-amber-700 text-white hover:bg-amber-800'
                    : 'bg-gray-900 text-white hover:bg-amber-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>✨ 100% satisfaction guarantee • Free rescheduling • Secure payment</p>
        </div>
      </div>
    </section>
  );
}

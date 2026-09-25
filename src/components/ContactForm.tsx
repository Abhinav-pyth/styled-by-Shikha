import { useState } from 'react';

interface ContactFormProps {
  selectedPackage?: string;
  onClose?: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm({ selectedPackage = '', onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: selectedPackage || '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✨</div>
        <h3 className="text-2xl font-light text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been sent successfully. I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border transition-colors duration-300 focus:outline-none focus:border-amber-700 ${
            errors.name ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border transition-colors duration-300 focus:outline-none focus:border-amber-700 ${
            errors.email ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border transition-colors duration-300 focus:outline-none focus:border-amber-700 ${
            errors.phone ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="+1 (555) 000-0000"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 transition-colors duration-300 focus:outline-none focus:border-amber-700 bg-white"
        >
          <option value="">Select a service</option>
          <option value="Style Discovery">Style Discovery</option>
          <option value="Style Transformation">Style Transformation</option>
          <option value="Style VIP">Style VIP</option>
          <option value="Personal Styling">Personal Styling</option>
          <option value="Wardrobe Consultation">Wardrobe Consultation</option>
          <option value="Color Analysis">Color Analysis</option>
          <option value="Special Occasion">Special Occasion</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border transition-colors duration-300 focus:outline-none focus:border-amber-700 resize-none ${
            errors.message ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="Tell me about your style goals, any specific events, or questions you have..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-amber-700 text-white hover:bg-amber-800'
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 text-sm tracking-widest uppercase text-gray-600 border border-gray-300 hover:border-gray-400 transition-colors duration-300"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

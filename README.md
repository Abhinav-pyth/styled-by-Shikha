# Styled by Shikha - Fashion & Style Blog

A modern, feature-rich fashion blog website built with React, Vite, and Tailwind CSS.

![Styled by Shikha](https://img.shields.io/badge/Styled%20by-Shikha-amber?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan?style=flat-square&logo=tailwindcss)

## ✨ Features

### 🎨 Design & UI
- **Elegant Design** - Clean, minimalist aesthetic with warm neutral tones
- **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- **Smooth Animations** - Hover effects, transitions, and scroll animations throughout
- **Custom Scrollbar** - Styled scrollbar matching the design aesthetic
- **Back to Top Button** - Smooth scroll to top functionality

### 📱 Core Functionality
- **Interactive Portfolio Gallery** - Filter by category with lightbox modal and navigation
- **Blog with Search & Filters** - Real-time search and category filtering
- **Blog Post Reader** - Full article modal with rich content and share buttons
- **Testimonials Carousel** - Auto-rotating carousel with manual navigation
- **FAQ Accordion** - Expandable FAQ section with smooth animations
- **Pricing Plans** - Interactive pricing with billing cycle toggle
- **Booking System** - Modal booking form for styling packages

### 📧 Forms & Validation
- **Contact Form** - Full validation with error messages
  - Name, email, phone validation
  - Service selection dropdown
  - Loading states and success feedback
  - Data persistence to localStorage
- **Newsletter Signup** - Email subscription with confirmation
- **Booking Modal** - Package-specific booking forms

### 🔧 Technical Features
- **SEO Optimized** - Meta tags, Open Graph, Twitter cards
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML
- **Performance** - Fast load times with Vite, optimized images
- **TypeScript** - Full type safety throughout
- **Component-Based** - Modular, reusable React components
- **State Management** - React hooks for local state
- **Local Storage** - Persistent preferences (dark mode, form data, cookies)

### 🍪 User Experience
- **Cookie Consent** - GDPR-compliant cookie banner
- **Smooth Scrolling** - Native smooth scroll behavior
- **Loading States** - Visual feedback during form submissions
- **Error Handling** - User-friendly error messages
- **Mobile Menu** - Responsive navigation for mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd styled-by-shikha

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

## 📁 Project Structure

```
styled-by-shikha/
├── public/                  # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogModal.tsx
│   │   ├── BookingModal.tsx
│   │   ├── ContactForm.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PortfolioModal.tsx
│   │   ├── Pricing.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles with dark mode
├── index.html               # HTML template with SEO
├── vercel.json              # Vercel configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── vite.config.js           # Vite configuration
```

## 🛠️ Tech Stack

- **React 18** - UI library with hooks
- **Vite 6** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Google Fonts** - Playfair Display & Inter

## 🎨 Customization

### Colors
The site uses a warm neutral palette with amber accents. Key colors:
- Primary text: `text-gray-900`
- Accent: `text-amber-700`
- Background: `bg-stone-50`

### Dark Mode
Dark mode is fully implemented with CSS variables and Tailwind classes. Toggle is in the navbar and persists via localStorage.

### Fonts
Fonts are loaded from Google Fonts in `index.html`. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify font-family in `src/index.css`

### Images
Replace the AI-generated images in the components with your own. Update image URLs in:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Portfolio.tsx`
- `src/components/Blog.tsx`

## 📄 Configuration

### vercel.json
Includes:
- SPA routing rewrites
- Asset caching headers (1 year for /assets)
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)

### Environment Variables
Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 🔍 SEO Features

- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy

## 📊 Performance

- **Fast Load Times** - Optimized bundle with Vite
- **Lazy Loading** - Images load efficiently
- **Minimal JavaScript** - Tree-shaking enabled
- **CSS Optimization** - Tailwind purges unused styles
- **Image Optimization** - Proper sizing and formats

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ for fashion enthusiasts everywhere.

---

**Live Demo:** [Deploy to Vercel](https://vercel.com/new) to see your site live!

## 🎯 Key Functionality Highlights

### 1. Portfolio Lightbox
- Click any portfolio image to open full-screen lightbox
- Navigate between images with prev/next buttons
- Keyboard accessible
- Smooth transitions

### 2. Blog Search & Filter
- Real-time search across titles, excerpts, and categories
- Filter by category with one click
- Clear filters button
- Result count display
- Empty state handling

### 3. Contact Form Validation
- Required field validation
- Email format validation
- Phone number format validation
- Minimum length checks
- Real-time error clearing
- Loading states
- Success confirmation
- Data saved to localStorage

### 4. Dark Mode
- Toggle in navbar
- Persists across sessions
- Smooth transitions
- Full theme coverage
- Respects system preference (future enhancement)

### 5. Booking System
- Select pricing package
- Opens modal with pre-filled service
- Full form validation
- Confirmation message
- Data persistence

### 6. Testimonials Carousel
- Auto-rotates every 5 seconds
- Manual navigation with arrows
- Dot indicators
- Smooth transitions
- Touch-friendly

### 7. FAQ Accordion
- Click to expand/collapse
- Only one open at a time
- Smooth height animations
- Hover effects
- Accessible markup

### 8. Cookie Consent
- Appears after 2 seconds
- Accept/Decline options
- Persists choice in localStorage
- GDPR compliant
- Non-intrusive design

### 9. Back to Top
- Appears after scrolling 500px
- Smooth scroll to top
- Hover effects
- Accessible label

### 10. Responsive Navigation
- Desktop: Full horizontal menu
- Mobile: Hamburger menu
- Dark mode toggle in both
- Smooth transitions
- Touch-friendly

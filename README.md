# Styled by Aria - Fashion & Style Blog

A modern, elegant fashion blog website built with React, Vite, and Tailwind CSS. Inspired by [styledbyaria.com](https://www.styledbyaria.com/).

![Styled by Aria](https://img.shields.io/badge/Styled%20by-Aria-amber?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan?style=flat-square&logo=tailwindcss)

## ✨ Features

- 🎨 **Elegant Design** - Clean, minimalist aesthetic with warm neutral tones
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🖼️ **Portfolio Gallery** - Filterable portfolio with smooth animations
- 📝 **Blog Section** - Latest posts with beautiful card layouts
- 📧 **Newsletter Signup** - Email subscription form
- 🎭 **Smooth Animations** - Hover effects and transitions throughout
- 🌐 **SEO Ready** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd styled-by-aria

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

That's it! Vercel will automatically build and deploy your site.

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop your project folder
3. Click "Deploy"

## 📁 Project Structure

```
styled-by-aria/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Portfolio.tsx
│   │   └── Services.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vercel.json          # Vercel configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── vite.config.js       # Vite configuration
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite 6** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Google Fonts** - Playfair Display & Inter

## 🎨 Customization

### Colors

The site uses a warm neutral palette with amber accents. To change colors, update the Tailwind classes in the components:

- Primary text: `text-gray-900`
- Accent: `text-amber-700`
- Background: `bg-stone-50`

### Fonts

Fonts are loaded from Google Fonts in `index.html`. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Modify font-family in `src/index.css`

### Images

Replace the AI-generated images in the components with your own. Update the image URLs in:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Portfolio.tsx`
- `src/components/Blog.tsx`

## 📄 Configuration

### vercel.json

The `vercel.json` file includes:
- SPA routing rewrites
- Asset caching headers
- Security headers

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ for fashion enthusiasts everywhere.

---

**Live Demo:** [Deploy to Vercel](https://vercel.com/new) to see your site live!

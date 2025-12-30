# 🌟 Modern Portfolio Landing Page

A stunning, dark-themed portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features beautiful animations, responsive design, and a professional aesthetic perfect for showcasing your work.

![Portfolio Preview](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Beautiful Dark Theme** - Modern black theme with purple and cyan gradients
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🧩 **Component-Based** - Clean, reusable React components
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- ✨ **Visual Effects** - Glassmorphism, gradients, glows, and more

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository** (or you're already in it)
   ```bash
   cd zans-portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
zans-portofolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx         # Navigation header
│   │   │   └── Footer.jsx         # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.jsx           # Hero section
│   │   │   ├── About.jsx          # About section
│   │   │   ├── Skills.jsx         # Skills showcase
│   │   │   ├── Projects.jsx       # Project portfolio
│   │   │   └── Contact.jsx        # Contact form
│   │   └── ui/
│   │       ├── Button.jsx         # Reusable button
│   │       ├── Card.jsx           # Reusable card
│   │       └── Badge.jsx          # Skill badge
│   ├── data/
│   │   └── content.js             # Portfolio content data
│   ├── utils/
│   │   └── animations.js          # Framer Motion variants
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML template
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Dependencies
```

## 🎨 Customization

### 1. Update Personal Information

Edit `src/data/content.js` to customize:

- Personal info (name, email, location)
- About section description
- Skills by category
- Projects showcase
- Social media links

### 2. Change Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

Edit `src/index.css` for gradient colors:

```css
:root {
  --gradient-start: #667eea;
  --gradient-end: #764ba2;
  --accent-cyan: #06b6d4;
  --accent-purple: #a855f7;
}
```

### 3. Modify Animations

Edit `src/utils/animations.js` to adjust Framer Motion animations.

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Upload `dist/` folder to Netlify
3. Configure redirects if needed

### Other Platforms

Compatible with any static hosting service (GitHub Pages, Cloudflare Pages, etc.)

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing
- **Inter Font** - Modern typography

## 📝 Sections Overview

### 1. Hero Section
- Full-screen landing with animated gradient background
- Name and tagline with smooth animations
- CTA buttons for navigation

### 2. About Section
- Professional summary
- Key highlights with icons
- Responsive card layout

### 3. Skills Section
- Categorized skills (Frontend, Backend, Tools)
- Colorful gradient badges
- Staggered animation on scroll

### 4. Projects Section
- Project showcase with cards
- Tech stack tags
- Live demo and GitHub links
- Hover effects and animations

### 5. Contact Section
- Functional form UI with validation
- Contact information cards
- Social media links
- Form feedback (UI only, no backend)

### 6. Footer
- Social media icons
- Copyright information
- Consistent dark theme

## 🎯 Performance

- ⚡ Optimized bundle size
- 🚀 Code splitting
- 📦 Tree shaking
- 🎨 CSS purging via Tailwind

## 🐛 Known Limitations

- Contact form is UI-only (no backend submission)
- Placeholder content needs customization
- Project images are not included (add your own)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 💡 Tips

1. Replace placeholder content in `src/data/content.js`
2. Add your own project images to `public/` folder
3. Update social media links
4. Integrate a backend service for the contact form (e.g., Formspree, EmailJS)
5. Add Google Analytics for tracking

## 🙏 Credits

Built by Izan with ❤️ using modern web technologies.

---

**Happy coding! 🚀**

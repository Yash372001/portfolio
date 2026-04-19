# Yash Pawar - Neobrutalist Portfolio

A stunning, professional portfolio website built with React and a bold neobrutalist aesthetic. This portfolio showcases your work, skills, and experience with confidence and style.

## 🎨 Design Philosophy

This portfolio embraces **Neobrutalism** - a raw, structural design approach featuring:

- **Bold Geometry**: Sharp edges, thick borders, and assertive shapes
- **High Contrast**: Strong color combinations that demand attention
- **Intentional Imperfection**: Authentic, unpolished aesthetic
- **Layered Interactions**: Engaging hover effects and micro-animations
- **Functional Depth**: Not just pretty - fully functional and accessible

## ✨ Features

### Comprehensive Sections

1. **Hero Section**
   - Eye-catching animated introduction
   - Floating geometric shapes
   - Key statistics display
   - Social media links
   - Call-to-action buttons

2. **About Section**
   - Personal introduction
   - Core values and approach
   - Profile card with code-style formatting
   - Fun facts and statistics

3. **Skills Section**
   - Categorized skill sets (Frontend, Backend, Tools)
   - Animated progress bars
   - Technologies currently exploring
   - Interactive skill tags

4. **Projects Section**
   - Filterable project gallery
   - Hover overlays with project links
   - Technology tags
   - Emoji-based visual identifiers

5. **Experience Section**
   - Vertical timeline layout
   - Company positions and achievements
   - Certifications and education
   - Color-coded timeline markers

6. **Testimonials Section**
   - Client feedback carousel
   - Star ratings
   - Navigation controls
   - Preview grid of all testimonials

7. **Contact Section**
   - Functional contact form
   - Multiple contact methods
   - Availability status
   - Footer with social links

### Interactive Elements

- **Smooth Scrolling**: Navigate seamlessly between sections
- **Theme Toggle**: Switch between light and dark modes
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Active Section Tracking**: Navigation highlights current section
- **Hover Animations**: Interactive feedback on all clickable elements
- **Form Validation**: Client-side validation on contact form

### Technical Excellence

- **React + Vite**: Fast, modern development setup
- **Component Architecture**: Modular, reusable components
- **CSS Custom Properties**: Consistent design system
- **Responsive Design**: Looks great on all devices
- **Accessibility**: Semantic HTML and ARIA attributes
- **SEO Optimized**: Meta tags and structured content
- **Performance**: Optimized animations and minimal bundle size

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository (or you're already here!)

```bash
cd Portfolio-Y
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment.

## 🎨 Customization

### Colors

Edit the CSS custom properties in `src/App.css`:

```css
:root {
  --accent-1: #ff3366; /* Primary accent */
  --accent-2: #6b4ce6; /* Secondary accent */
  --accent-3: #ffd93d; /* Tertiary accent */
  --accent-4: #00d9ff; /* Quaternary accent */
}
```

### Content

1. **Personal Info**: Update in `src/components/Hero.jsx`
2. **About Text**: Modify `src/components/About.jsx`
3. **Skills**: Edit arrays in `src/components/Skills.jsx`
4. **Projects**: Update project data in `src/components/Projects.jsx`
5. **Experience**: Modify experience array in `src/components/Experience.jsx`
6. **Testimonials**: Edit testimonials in `src/components/Testimonials.jsx`
7. **Contact**: Update contact info in `src/components/Contact.jsx`

### Typography

The portfolio uses Google Fonts:

- **Space Grotesk**: Main text
- **Space Mono**: Monospace/code elements

Change fonts by updating the import in `src/index.css`.

## 📁 Project Structure

```
Portfolio-Y/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Testimonials.jsx
│   │   ├── Testimonials.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 Deployment

### Recommended Platforms

- **Vercel**: Zero-config deployment (recommended)
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3 + CloudFront**: Enterprise solution

### Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify Deployment

1. Build: `npm run build`
2. Drag the `dist` folder to Netlify
3. Done!

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips for Customization

1. **Replace Emoji Icons**: Change the emoji in project cards to match your projects
2. **Add Real Images**: Replace emoji avatars with actual photos
3. **Update Links**: Add your real GitHub, LinkedIn, Twitter, etc.
4. **Modify Stats**: Update the numbers in the Hero section to match your achievements
5. **Personal Touch**: Add your personality to the copy and make it yours

## 🐛 Troubleshooting

### Port Already in Use

```bash
npm run dev -- --port 3000
```

### Build Errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues

Clear browser cache or use incognito mode

## 📞 Support

For questions or issues, feel free to reach out or open an issue.

---

**Built with ❤️ using React, Vite, and lots of ☕**

Made by Yash Pawar © 2025

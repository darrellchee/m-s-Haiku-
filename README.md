# Spotlessify Services - Landing Page

A modern, conversion-focused landing page for Spotlessify Services, a Sydney-based cleaning business. Built with Next.js 15, TypeScript, and TailwindCSS.

## Features

- ✨ Modern, premium design with clean aesthetics
- 📱 Fully responsive (mobile-first)
- ♿ Accessible components (semantic HTML, ARIA labels)
- 🔍 SEO-ready (meta tags, JSON-LD schema)
- 🎨 Smooth animations and transitions
- 📋 Contact form with validation
- 💼 Service showcase with featured hero service
- 🗺️ Service area map & suburb listings
- ❓ FAQ accordion section
- 💬 Social proof testimonials section

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`.

## Customization Guide

### Business Information

Edit `/lib/config.ts` to update:
- Business name, phone, and service area
- Services list (with icons)
- Suburbs you service
- Testimonials
- What's included checklist
- FAQ items
- Hours of operation

### Design & Styling

- Colors: Edit `/tailwind.config.ts` (navy, aqua, slate palette)
- Fonts: System fonts by default, easy to swap
- Animations: Customizable in `/tailwind.config.ts` and `/app/globals.css`

### Adding Google Maps

In `/components/ServiceArea.tsx`, replace the placeholder with:

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>
```

Get your embed code from Google My Business → Location → Share → Embed a map.

### Form Submission

The contact form submits to `/api/quote`. Currently it logs to console. To integrate:

1. **Email**: Add email service (SendGrid, Resend, etc.)
2. **CRM**: Send to Pipedrive, HubSpot, etc.
3. **Database**: Store submissions in a database

Edit `/app/api/quote/route.ts` to implement your backend.

## Project Structure

```
spotlessify-services/
├── app/
│   ├── api/
│   │   └── quote/route.ts          # Form submission endpoint
│   ├── globals.css                  # Global styles & animations
│   ├── layout.tsx                   # Root layout with SEO
│   └── page.tsx                     # Main landing page
├── components/                      # React components
│   ├── Navbar.tsx                   # Sticky navigation
│   ├── Hero.tsx                     # Hero section
│   ├── SocialProof.tsx              # Testimonials strip
│   ├── Services.tsx                 # Services grid
│   ├── HowItWorks.tsx               # 3-step process
│   ├── WhatsIncluded.tsx            # Checklist section
│   ├── ServiceArea.tsx              # Map & suburbs
│   ├── ContactForm.tsx              # Quote form
│   ├── FAQ.tsx                      # FAQ accordion
│   └── Footer.tsx                   # Footer
├── lib/
│   ├── config.ts                    # Business config (edit here!)
│   └── types.ts                     # TypeScript types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.ts
```

## Performance

- Lighthouse-optimized (fast Core Web Vitals)
- Minimal dependencies
- CSS-only animations (no JS animations)
- Semantic HTML for accessibility

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build and deploy the `.next` folder as a static site or use `npm start` for server.

## SEO Checklist

- [x] Meta title & description
- [x] OpenGraph tags
- [x] JSON-LD LocalBusiness schema
- [x] Semantic headings (h1, h2, h3)
- [x] Mobile-friendly
- [ ] Add your business address (if available)
- [ ] Update meta tags with actual descriptions
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics

## Contact & Support

For questions about customization, reach out to your developer or check the inline comments in components.

---

Built with ❤️ for Spotlessify Services

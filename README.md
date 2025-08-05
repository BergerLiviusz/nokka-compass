# NOKKA Website

Modern, professional website for NOKKA (Nemzetközi Oktatási és Kutatási Központ Alapítvány) - Hungarian research, consulting, and education organization focused on economics.

## Features

- 🎨 **Modern Design**: Clean, professional design with NOKKA brand colors and Poppins typography
- 🔍 **Research Library**: Searchable dashboard for papers, blog posts, and projects with advanced filtering
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG AA compliant with proper focus management and keyboard navigation
- 🌙 **Dark Mode**: Elegant dark theme support
- 🌐 **i18n Ready**: Prepared for Hungarian/English localization
- ⚡ **Fast**: Optimized performance with modern React patterns
- 🔒 **Secure**: Form validation, rate limiting, and security best practices

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Search**: Algolia InstantSearch (primary) + Fuse.js (fallback)
- **Icons**: Lucide React
- **Animations**: Framer Motion ready
- **State**: Local state + React Query for server state

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── search/          # Search-specific components
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navbar.tsx       # Navigation header
│   └── Footer.tsx       # Site footer
├── pages/               # Page components
│   ├── Index.tsx        # Landing page
│   ├── Research.tsx     # Research library
│   ├── ResearchDetail.tsx # Individual research page
│   ├── Consulting.tsx   # Services page
│   ├── Education.tsx    # Educational programs
│   ├── About.tsx        # About us
│   └── Contact.tsx      # Contact form
├── lib/                 # Utilities and helpers
│   ├── types.ts         # TypeScript type definitions
│   └── i18n.ts          # Internationalization setup
├── config/              # Configuration files
│   ├── site.ts          # Site metadata and navigation
│   └── search.ts        # Search configuration
└── content/             # MDX content (research papers, etc.)
```

## Environment Variables

Create a `.env.local` file for development:

```bash
# Search (optional - falls back to local search)
NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your_search_key
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=nokka_content

# Contact form email (optional - logs to console in dev)
RESEND_API_KEY=your_resend_key

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=nokka.hu
```

## Content Management

### Adding Research Content

Create MDX files in `/src/content/research/` with frontmatter:

```markdown
---
title: "Your Research Title"
abstract: "Brief description of the research..."
authors: ["Last First", "Last First"]
type: "paper" # or "blog", "project"
tags: ["economics", "policy", "data"]
language: "hu" # or "en"
publishedAt: "2024-01-15"
doi: "10.1234/example" # optional
pdf: "/path/to/pdf" # optional
cover: "/path/to/image" # optional
---

# Your content here...
```

### Search Configuration

The site supports two search modes:

1. **Algolia** (recommended for production)
   - Set `NEXT_PUBLIC_ALGOLIA_*` environment variables
   - Use `scripts/push-to-algolia.ts` to sync content

2. **Local Search** (development fallback)
   - Uses Fuse.js with `/public/search-index.json`
   - Automatically built from MDX frontmatter

## Brand Guidelines

### Colors

```css
--nokka-green: #35D384    /* Primary actions, buttons */
--nokka-mint: #93E9BE     /* Secondary, focus states */
--nokka-black: #111111    /* Text on light backgrounds */
--nokka-gray-700: #2E2E2E /* Secondary text */
```

### Typography

- **Font**: Poppins (300, 400, 600, 700)
- **Usage**: Clean, professional, highly legible
- **Hierarchy**: Clear distinction between headings and body text

### Component Usage

```tsx
// Primary actions
<Button variant="default">Primary Action</Button>

// Secondary actions  
<Button variant="outline">Secondary</Button>

// Hero/landing CTAs
<Button variant="hero">Discover Research</Button>

// Subtle interactions
<Button variant="ghost">Ghost Action</Button>
```

## Development Workflow

### Adding New Pages

1. Create page component in `/src/pages/`
2. Add route to `App.tsx`
3. Update navigation in `/src/config/site.ts`
4. Add page metadata and translations

### Customizing Components

All UI components are in `/src/components/ui/` and can be customized:

```tsx
// Example: Custom button variant
const buttonVariants = cva(base, {
  variants: {
    variant: {
      // Add your custom variant
      special: "bg-gradient-to-r from-primary to-secondary",
    }
  }
})
```

### Form Handling

Contact forms use React Hook Form + Zod:

```tsx
const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
})

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
})
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms

The site is a standard React SPA and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Performance

- ⚡ **Lazy Loading**: Components and images load on demand
- 📦 **Code Splitting**: Automatic route-based splitting
- 🗜️ **Optimization**: Minified CSS/JS, optimized images
- 📊 **Analytics**: Optional Plausible/GA4 integration

## Accessibility

- ♿ **Keyboard Navigation**: Full keyboard support
- 🎯 **Focus Management**: Visible focus indicators
- 📢 **Screen Readers**: Proper ARIA labels and structure
- 🌈 **Contrast**: WCAG AA compliant color combinations
- ⚡ **Motion**: Respects prefers-reduced-motion

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

© 2024 NOKKA. All rights reserved.

---

**Contact**: info@nokka.hu | [LinkedIn](https://linkedin.com/company/nokka-hu)
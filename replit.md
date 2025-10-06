# PowerTap - Microsoft Power Platform Resource Hub

## Overview

PowerTap is a static website designed to be a comprehensive resource hub for Microsoft Power Platform, Dynamics 365, Microsoft 365, and Copilot. The platform showcases tutorials, playbooks, and resources to help users supercharge their productivity with these Microsoft technologies. The site features a modern, responsive design with smooth animations and provides various types of content including solutions, automation playbooks, blog posts, and community resources.

**Note:** This is now a static site with no backend dependencies, suitable for hosting on any static hosting platform (GitHub Pages, Netlify, Vercel, etc.).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth transitions, hero animations, card hover effects, and page transitions
- **Form Handling**: React Hook Form with Zod validation for type-safe form handling

### Static Site Features
- **No Backend Dependencies**: All interactive features that previously required a backend (contact forms, newsletter) have been removed or replaced with direct contact information
- **Deployment Ready**: Can be deployed to any static hosting platform (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.)
- **Contact Methods**: Uses direct email links (mailto:) instead of form submissions
- **Performance**: Fast loading times with optimized static assets and code splitting

### Build and Deployment
- **Build Tool**: Vite for fast static site builds with TypeScript compilation
- **Asset Management**: Vite handles static assets, fonts, and images with optimization
- **Build Output**: Static HTML, CSS, and JavaScript files in `dist/public` directory
- **Development Server**: Vite dev server for fast hot module replacement (HMR)
- **Production Build**: Run `vite build` to generate optimized static files
- **Preview**: Use `vite preview` to test the production build locally

## External Dependencies

### UI and Design
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **framer-motion**: Animation library for smooth user interactions
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **react-icons**: Icon library including Microsoft-specific icons

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

### Fonts and Assets
- **Google Fonts**: Inter font family for modern typography
- **Unsplash**: Stock images for blog posts and content sections
- **Custom Icons**: Microsoft technology logos and branding elements

## Recent Changes (Static Site Conversion)

### What Changed
- **Removed Backend Dependencies**: The site no longer requires a Node.js/Express backend
- **Contact Form**: Replaced with direct email link (mailto:info@powertap.co) and contact information display
- **Newsletter Signup**: Replaced with contact information instead of form submission
- **API Calls**: All API calls to `/api/contact` and `/api/newsletter` have been removed

### How to Deploy as Static Site

1. **Build the static files:**
   ```bash
   npm run build
   # or
   vite build
   ```

2. **The built files will be in:** `dist/public/`

3. **Deploy to any static hosting platform:**
   - **GitHub Pages**: Push the `dist/public` folder to a `gh-pages` branch
   - **Netlify**: Connect your repo and set build command to `vite build` and publish directory to `dist/public`
   - **Vercel**: Import your repo and set build command to `vite build` and output directory to `dist/public`
   - **Cloudflare Pages**: Same as above

4. **For local development with static server:**
   ```bash
   # Option 1: Use Vite dev server directly
   npx vite
   
   # Option 2: Build and preview
   npm run build
   npx vite preview
   ```

### Note on package.json
To run the static site in development mode (without Express), you can manually update the `dev` script in `package.json` from:
```json
"dev": "NODE_ENV=development tsx server/index.ts"
```
to:
```json
"dev": "vite"
```

The current setup still works for development, but runs through Express which serves Vite. For production deployment, use `vite build` to generate static files.
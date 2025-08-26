# PowerTap - Microsoft Power Platform Resource Hub

## Overview

PowerTap is a production-ready website designed to be a comprehensive resource hub for Microsoft Power Platform, Dynamics 365, Microsoft 365, and Copilot. The platform showcases tutorials, playbooks, and resources to help users supercharge their productivity with these Microsoft technologies. The site features a modern, responsive design with smooth animations and provides various types of content including solutions, automation playbooks, blog posts, and community resources.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth transitions, hero animations, card hover effects, and page transitions
- **State Management**: React Query (@tanstack/react-query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for the REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL (configured through Neon Database serverless for scalability)
- **API Design**: RESTful endpoints for contact forms and newsletter subscriptions
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot Module Replacement (HMR) with Vite integration for fast development

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Contacts Table**: Contact form submissions with name, email, subject, message, and timestamps
- **Newsletter Subscriptions**: Email subscription management with unique email constraints
- **Schema Validation**: Drizzle-Zod integration for runtime validation of database operations

### Data Storage Strategy
- **Production**: PostgreSQL database with Drizzle ORM for schema migrations and queries
- **Development**: In-memory storage implementation for rapid prototyping and testing
- **Storage Interface**: Abstract storage interface allowing easy switching between implementations

### Build and Deployment
- **Build Tool**: Vite for fast frontend builds with TypeScript compilation
- **Backend Build**: ESBuild for efficient Node.js bundle creation
- **Asset Management**: Vite handles static assets, fonts, and images with optimization
- **Environment Configuration**: Environment-based configuration for development and production

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: CLI tools for database migrations and schema management

### UI and Design
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **framer-motion**: Animation library for smooth user interactions
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **react-icons**: Icon library including Microsoft-specific icons

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **zod**: TypeScript-first schema validation

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

### Fonts and Assets
- **Google Fonts**: Inter font family for modern typography
- **Unsplash**: Stock images for blog posts and content sections
- **Custom Icons**: Microsoft technology logos and branding elements
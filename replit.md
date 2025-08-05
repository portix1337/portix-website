# Portix Host

## Overview

Portix Host is a modern hosting website built for bot hosting, web hosting, and game hosting services. The application features a full-stack architecture with a React frontend using Vite, an Express.js backend server, and PostgreSQL database with Drizzle ORM. The website includes a comprehensive hosting service portfolio with pricing plans, FAQ sections, and informational pages designed with a dark theme (#060201 background) and responsive design optimized for all devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for client-side routing instead of React Router
- **TanStack Query** for server state management and API data fetching
- **Tailwind CSS** with custom dark theme configuration for styling
- **shadcn/ui** component library built on Radix UI primitives for consistent UI components

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints and middleware
- **ESM modules** throughout the application for modern JavaScript standards
- **Custom storage interface** with in-memory implementation (MemStorage) that can be extended to database implementations
- **Middleware pipeline** including JSON parsing, URL encoding, request logging, and error handling
- **Vite integration** for development mode with HMR support

### Component Design Patterns
- **Reusable UI components** following atomic design principles (FeatureCard, PricingCard, FAQItem)
- **Layout component** providing consistent header, footer, and discount banner across pages
- **Configuration-driven content** through centralized siteConfig for easy content management
- **Mobile-responsive design** with custom hooks (useIsMobile) for device-specific behavior

### Styling Architecture
- **CSS Custom Properties** for theme colors and design tokens
- **Tailwind CSS** with custom configuration extending the default theme
- **Dark theme optimization** with high contrast colors for accessibility
- **Custom scrollbar styling** matching the brand color scheme
- **Responsive breakpoints** optimized for mobile, tablet, and desktop viewports

### Database Schema
- **PostgreSQL** with Drizzle ORM for type-safe database operations
- **User management system** with username/password authentication schema
- **Zod validation** integrated with Drizzle for runtime type checking
- **Migration system** configured through drizzle-kit for schema evolution

### Development Tooling
- **TypeScript** with strict configuration for type safety
- **ESLint and Prettier** integration for code quality and formatting
- **Path aliases** configured for clean imports (@/, @shared/, @assets/)
- **Development server** with error overlay and debugging tools
- **Build optimization** with separate client and server build processes

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless** - Serverless PostgreSQL driver for database connectivity
- **drizzle-orm** and **drizzle-zod** - Type-safe ORM with Zod schema validation
- **express** - Web application framework for the backend server
- **react** and **@vitejs/plugin-react** - Frontend framework and Vite integration

### UI and Styling Libraries
- **@radix-ui/* components** - Accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** and **clsx** - Conditional className utilities
- **react-icons** - Icon library for consistent iconography
- **lucide-react** - Modern icon set for UI elements

### State Management and Data Fetching
- **@tanstack/react-query** - Server state management and caching
- **wouter** - Lightweight client-side routing
- **@hookform/resolvers** - Form validation resolver integration

### Development and Build Tools
- **vite** - Build tool and development server
- **typescript** - Static type checking
- **tsx** - TypeScript execution engine for development
- **esbuild** - JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal** - Development error handling
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling

### Utility Libraries
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation
- **embla-carousel-react** - Carousel component implementation
- **cmdk** - Command palette interface component
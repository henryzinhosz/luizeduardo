# Portfolio Galaxy Theme Web Application

## Overview

This is a single-page portfolio website built with a galaxy/space theme aesthetic. The application features a modern React frontend with a starry night design, showcasing personal information, skills, projects, and contact details. The project uses a full-stack architecture with Express.js backend, Drizzle ORM for database management, and shadcn/ui components for consistent UI design. The portfolio includes animated star backgrounds, constellation-inspired skill layouts, and glassmorphism design elements to create an immersive space-themed experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the main application framework
- **Vite** as the build tool and development server for fast hot reloading
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom theme extensions for galaxy colors
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API data fetching

### Component Structure
- Modular component architecture with specialized sections:
  - `StarBackground` for animated particle effects
  - `HeroSection` for profile introduction with glowing effects
  - `AboutSection` with glassmorphism card design
  - `SkillsConstellation` displaying technical skills in Aquarius constellation pattern
  - `ProjectsCarousel` with infinite scrolling project showcase
  - `ContactFooter` with social media links

### Backend Architecture
- **Express.js** server with TypeScript support
- **Modular routing system** with dedicated route handlers
- **Memory storage interface** with abstract storage patterns for easy database switching
- **Development-optimized** Vite integration for SSR-ready setup
- **Error handling middleware** with structured error responses

### Database Design
- **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- **Schema-first approach** with Zod validation integration
- **User management system** with basic authentication schema
- **Migration support** through drizzle-kit for schema versioning

### Styling and Theme System
- **Custom CSS variables** for consistent theming across components
- **Galaxy-themed color palette** with stellar blues, purples, and cosmic gradients
- **Custom animations** for floating, pulsing, and twinkling effects
- **Responsive design** with mobile-first approach
- **Glassmorphism effects** using backdrop-blur and transparency

### State Management
- **React Query** for server state and API caching
- **React hooks** for local component state
- **Context providers** for global UI state (tooltips, toasts)
- **Form handling** with React Hook Form and Zod validation

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless** - Neon PostgreSQL serverless database driver
- **drizzle-orm** and **drizzle-zod** - Type-safe ORM with schema validation
- **express** - Node.js web application framework
- **react** and **react-dom** - Core React library for UI rendering

### UI and Styling Libraries
- **@radix-ui/* packages** - Accessible component primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Utility for creating component variants
- **clsx** and **tailwind-merge** - Conditional CSS class utilities

### Development Tools
- **vite** and **@vitejs/plugin-react** - Fast build tool and React plugin
- **typescript** - Static type checking
- **tsx** - TypeScript execution environment
- **esbuild** - Fast JavaScript bundler for production builds

### Utility Libraries
- **@tanstack/react-query** - Data fetching and state management
- **wouter** - Lightweight React router
- **date-fns** - Date manipulation utilities
- **react-icons** - Icon library with technology logos
- **embla-carousel-react** - Carousel component for project showcase

### Session and Storage
- **connect-pg-simple** - PostgreSQL session store for Express sessions
- **nanoid** - Unique ID generation utility

### Fonts and Assets
- **Google Fonts** integration (Poppins, Inter) for typography
- **Unsplash** placeholder images for project demos and profile photo
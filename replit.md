# Overview

This is a full-stack web application showcasing a cyberpunk-themed developer portfolio. The project features a React frontend with TypeScript, a Node.js/Express backend, and PostgreSQL database integration using Drizzle ORM. The application includes a comprehensive portfolio website with sections for projects, skills, services, testimonials, and contact information, all styled with a dark, neon-cyberpunk aesthetic using Tailwind CSS and shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: React Router DOM for client-side navigation with dedicated pages for Portfolio, Skills, Services, Contact, Blog, and a 404 handler
- **Styling**: Tailwind CSS with custom cyberpunk theme variables and shadcn/ui component library for consistent UI elements
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Architecture**: Modular component structure with advanced sections (hero, projects, skills, services, testimonials, contact) and reusable UI components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Server**: Custom Vite integration for development mode with HMR support
- **Middleware**: Request logging, JSON parsing, and error handling middleware
- **Storage Interface**: Abstract storage interface with in-memory implementation for development, designed to easily swap with database implementation

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver for cloud-native database operations
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: User entity with username/password fields, extensible for additional entities
- **Migrations**: Drizzle Kit for database schema migrations and management

## Authentication and Authorization
- **Current State**: Basic user schema prepared but no authentication implementation yet
- **Prepared Infrastructure**: User table with username/password fields ready for authentication system integration

## External Dependencies
- **Database Provider**: Neon serverless PostgreSQL for cloud database hosting
- **UI Components**: Extensive shadcn/ui component library including forms, dialogs, cards, navigation, and data display components
- **Icons**: Lucide React for consistent iconography throughout the application
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Development Tools**: TypeScript for type checking, ESBuild for production builds, and Replit-specific plugins for development environment integration
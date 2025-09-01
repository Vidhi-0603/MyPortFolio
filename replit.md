# Overview

This is a full-stack web application built as a personal portfolio for Vidhilika Gupta, an MCA student and full-stack developer. The application showcases her skills, projects, and contact information through a modern, responsive single-page application. The project uses React for the frontend with a Node.js/Express backend, designed with shadcn/ui components and Tailwind CSS for styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Built with React 18 using TypeScript for type safety
- **Routing**: Uses Wouter for lightweight client-side routing with a simple home/404 structure
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming, including dark mode support
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Architecture Pattern**: RESTful API design with `/api` prefix for all endpoints
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage)
- **Development Setup**: Integrated with Vite for full-stack development experience
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request logging for API endpoints

## Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: PostgreSQL schema with users table containing id, username, and password fields
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Validation**: Zod schemas for runtime type validation

## Authentication & Session Management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Basic user CRUD operations with username/password authentication
- **Type Safety**: Shared TypeScript types between frontend and backend

## UI/UX Design Decisions
- **Design System**: "New York" style from shadcn/ui with neutral base colors
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Component Architecture**: Modular component structure with reusable UI components
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation
- **Performance**: Lazy loading, optimized builds, and efficient re-renders

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon database client for PostgreSQL operations
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **express**: Web framework for Node.js backend
- **wouter**: Lightweight React router

## UI Component Libraries
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: For building type-safe component variants
- **cmdk**: Command palette component

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and enhanced developer experience
- **drizzle-kit**: Database migration and introspection tool
- **esbuild**: Fast JavaScript bundler for production builds

## Form and Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Integration between react-hook-form and validation libraries
- **zod**: Schema validation for TypeScript

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Utility for constructing className strings
- **nanoid**: URL-safe unique ID generator
- **embla-carousel-react**: Carousel component for project showcases
# Agent Guidelines for reactportfolio

## Build Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production (TypeScript + Vite)
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

There are no test files in this project currently.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9 with TypeScript support

## Code Style

### General Principles

- Use functional components with arrow function or function declaration syntax
- Prefer early returns for cleaner conditionals
- Keep components small and focused
- No comments unless explaining complex business logic

### TypeScript

- Use explicit return types for utility functions
- Let TypeScript infer types for simple components and handlers
- Use `interface` for object shapes, `type` for unions/aliases
- Avoid `any` - use `unknown` when type is truly unknown

### Imports

- Sort imports using standard ESLint ordering
- Group: external (react), then relative imports
- No file extensions in imports

Example:
```typescript
import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { formatDate } from './utils'
import { Button } from '@/components'
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`, `Button.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth`, `useLocalStorage`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `validateEmail.ts`)
- **Constants**: UPPER_SNAKE_CASE for truly static values
- **Types/Interfaces**: PascalCase with `Props` suffix for component props

### Tailwind CSS

- Use Tailwind utility classes for all styling (no custom CSS unless necessary)
- Use arbitrary values sparingly (e.g., `text-[#39FF14]`)
- Prefer semantic class names when possible
- Keep custom styles in `src/index.css` or use Tailwind's `@theme` directive

### File Organization

```
src/
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── utils/           # Helper functions
├── types/           # TypeScript type definitions
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles + Tailwind
```

### Error Handling

- Use try/catch for async operations
- Display user-friendly error messages in UI
- Log errors to console in development
- Avoid silently catching errors without handling

### JSX/TSX

- Use self-closing tags for elements without children
- Prefer fragments over unnecessary divs
- Use conditional rendering with && or ternary (avoid early returns for simple cases)
- Always use `className` not `class`

## Linting

ESLint is configured with:
- ESLint recommended rules
- TypeScript ESLint recommended rules
- React Hooks rules
- React Refresh rules

Run `npm run lint` before committing. Fix all errors and warnings.

## Production Build

Always build before deploying:
```bash
npm run build
```

This creates optimized, minified files in the `dist/` folder. The build includes:
- TypeScript compilation
- Vite bundling and minification
- Tailwind processing
- Static assets copied

The `base` in vite.config.ts is set to `'./'` for hosting in subdirectories (e.g., `/reactportfolio`).

## Git Conventions

- Use meaningful commit messages
- Create feature branches for new features
- Run lint before pushing
- No secrets or credentials in code
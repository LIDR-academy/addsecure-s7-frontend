# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LTI (Talent Tracking System) is a full-stack recruitment management application with a React frontend and Express backend using Prisma ORM with PostgreSQL.

## Development Commands

### Backend (from `/backend`)

```bash
npm install              # Install dependencies
npm run dev              # Development server with auto-reload (port 3010)
npm run build            # Compile TypeScript
npm start                # Run compiled backend
npm test                 # Run Jest tests
npm run prisma:generate  # Generate Prisma client
```

### Frontend (from `/frontend`)

```bash
npm install   # Install dependencies
npm start     # Development server (port 3000)
npm run build # Production build
npm test      # Run tests
```

### Database Setup

```bash
docker-compose up -d        # Start PostgreSQL
npx prisma generate         # Generate Prisma client
npx prisma migrate dev      # Run migrations
ts-node seed.ts             # Seed sample data
```

## Architecture

### Backend (Domain-Driven Design)

The backend follows a layered DDD architecture:

- **`domain/models/`** - Business entities (Candidate, Position, Interview, Education, WorkExperience, Resume, Application, Company, Employee, InterviewFlow, InterviewStep, InterviewType)
- **`application/services/`** - Business logic and use cases (candidateService, positionService, validator, fileUploadService)
- **`presentation/controllers/`** - HTTP request handlers
- **`routes/`** - API route definitions (candidateRoutes, positionRoutes)

Key patterns:

- Entities encapsulate business logic with constructors that transform raw data
- Candidate is an aggregate root containing Education, WorkExperience, Resume, and Application
- Services orchestrate domain models and handle complex operations

### Frontend

- **`components/`** - React components (Positions, PositionBoard, KanbanBoard, KanbanColumn, CandidateCard, CandidateSidebar, ToastNotification)
- **`hooks/`** - Custom React hooks (useCandidateDetails, usePositionBoard)
- **`services/`** - API client services
- **`types/`** - TypeScript type definitions

### API Endpoints

Base URL: `http://localhost:3010`

- `POST /candidates` - Create candidate
- `GET /candidates/:id` - Get candidate details
- `PUT /candidates/:id` - Update candidate
- `POST /upload` - File upload
- `GET /position/:id/candidates` - Get candidates for position
- `GET /position/:id/interviewflow` - Get interview flow stages

## Code Style Guidelines

### Frontend

- Use Tailwind CSS for all styling (no CSS files or inline styles)
- Use early returns for better readability
- Prefix event handlers with "handle" (e.g., `handleClick`, `handleKeyDown`)
- Use arrow functions assigned to const (e.g., `const toggle = () => {}`)
- Implement accessibility: tabindex, aria-label, keyboard event handlers
- Use descriptive variable and function names

#### React & performance best practices

- **Avoid data-fetch waterfalls**: Start independent async work in parallel (e.g. `Promise.all`) and only `await` when a value is actually needed. Prefer composing server components so data fetching can run concurrently.
- **Minimize client bundle size**: Import directly from specific library entry points instead of large barrel imports, and use dynamic imports for heavy/rarely used components.
- **Keep server/client boundary lean**: When passing props from server to client components, pass only the fields the client actually uses (avoid serializing full ORM objects).
- **Reduce unnecessary re-renders**: Extract expensive subtrees into memoizable components, narrow `useEffect` dependencies to primitives, and use functional `setState` updates when the new state depends on the previous state.
- **Optimize lists and UI rendering**: For long lists, prefer virtualization or `content-visibility: auto` styles, and avoid recreating large static JSX/SVG trees on every render.
- **For deeper guidance**: When changing React code or optimizing performance, follow `.claude/skills/react-best-practices/AGENTS.md` for detailed patterns and examples.

### General

- Follow DRY principle - centralize repeated logic
- TypeScript strict mode is enabled
- ESLint + Prettier for code formatting

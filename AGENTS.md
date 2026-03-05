# AGENTS.md

Guidance for AI agents working in the LTI (Talent Tracking System) repository. Follow this file when editing code, adding features, or answering questions about the codebase.

## Project summary

- **LTI** – Full-stack recruitment management app: React frontend, Express backend, Prisma ORM, PostgreSQL.
- **Frontend**: `frontend/` – React (Create React App), port 3000.
- **Backend**: `backend/` – Express, TypeScript, port 3010.
- **Database**: PostgreSQL; schema and migrations in `backend/prisma/`.

## Commands (run from repo root or specified directory)

| Task | Command | Where |
|------|--------|-------|
| Backend dev server | `npm run dev` | `backend/` |
| Frontend dev server | `npm start` | `frontend/` |
| Backend build | `npm run build` | `backend/` |
| Backend tests | `npm test` | `backend/` |
| Prisma generate | `npx prisma generate` | `backend/` |
| DB migrations | `npx prisma migrate dev` | `backend/` |
| Seed DB | `ts-node seed.ts` | `backend/` |
| Start Postgres | `docker-compose up -d` | repo root |
| Lint (all) | `npm run lint` | repo root |
| Lint fix (all) | `npm run lint:fix` | repo root |

## Architecture

### Backend (DDD-style)

- **`backend/src/domain/models/`** – Entities: Candidate (aggregate root), Position, Interview, Education, WorkExperience, Resume, Application, Company, Employee, InterviewFlow, InterviewStep, InterviewType. Constructors normalize/transform raw data.
- **`backend/src/application/services/`** – Use cases: `candidateService`, `positionService`, `validator`, `fileUploadService`. Services use domain models and Prisma.
- **`backend/src/presentation/controllers/`** – HTTP handlers (e.g. `candidateController`, `positionController`).
- **`backend/src/routes/`** – Route definitions: `candidateRoutes`, `positionRoutes`.

Add new features by extending domain models, then services, then controllers/routes. Keep HTTP thin; put logic in services and domain.

### Frontend

- **`frontend/src/components/`** – React components (e.g. Positions, PositionBoard, KanbanBoard, CandidateCard, CandidateSidebar, landing variants).
- **`frontend/src/services/`** – API client (e.g. `candidateService.js`).
- **`frontend/src/hooks/`** – Custom hooks if present (e.g. useCandidateDetails, usePositionBoard).
- **`frontend/src/types/`** – TypeScript types if present.

API base: `http://localhost:3010`. Main endpoints: `POST/GET/PUT /candidates`, `POST /upload`, `GET /position/:id/candidates`, `GET /position/:id/interviewflow`.

## Code and style rules

- **Use repo conventions**: Prefer patterns and libraries already in the repo; avoid introducing new stacks unless asked.
- **TypeScript**: Strict mode; types for new code in both frontend and backend.
- **Frontend** (see also `.cursor/rules/frontend.mdc`):
  - **Styling**: Tailwind only. No separate CSS files or inline `style` for layout/theme; use Tailwind classes.
  - **Handlers**: Name event handlers with `handle` (e.g. `handleClick`, `handleKeyDown`).
  - **Functions**: Prefer `const fn = () => {}` style.
  - **Returns**: Use early returns for clarity.
  - **Accessibility**: Add `tabIndex`, `aria-label`, and keyboard handlers where relevant.
  - **Conditionals**: Prefer explicit ternaries (`? :`) over `&&` when the value can be `0` or other falsy-but-renderable values.
- **Backend**: Keep controllers thin; validation and business logic in `application/` (validator, services). Use Prisma for data access; shape data via domain models where they exist.
- **DRY**: Centralize repeated logic; reuse existing services and components.
- **Formatting**: ESLint + Prettier; run `npm run lint:fix` before committing.

## Where to look first

- **Product/context**: `CLAUDE.md` (overview and endpoints).
- **Frontend rules**: `.cursor/rules/frontend.mdc`.
- **React patterns**: `.claude/skills/react-best-practices/AGENTS.md` when changing React/frontend performance or structure.
- **Schema and data**: `backend/prisma/schema.prisma`.

## Tips for agents

1. **Backend changes**: After editing `schema.prisma`, run `npx prisma generate` in `backend/`; run migrations if you changed the schema.
2. **Frontend API**: Ensure the app targets the correct API base (e.g. `http://localhost:3010`); check `frontend/src/services/` for base URL.
3. **Tests**: Backend has Jest tests in `backend/src`; run them after changing services or controllers.
4. **New UI**: Prefer existing components and Tailwind; keep new components in `frontend/src/components/` and hook them from `App` or the relevant parent.

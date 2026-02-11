# Linting Setup

This project uses ESLint and Prettier for code quality and formatting across both frontend and backend.

## Configuration

### Backend
- **ESLint**: Configured with TypeScript support
- **Config file**: `backend/.eslintrc.js`
- **Prettier**: Code formatting
- **Config file**: `backend/.prettierrc`

### Frontend
- **ESLint**: Configured with React, TypeScript, and accessibility support
- **Config file**: `frontend/.eslintrc.js`
- **Prettier**: Code formatting
- **Config file**: `frontend/.prettierrc`

## Available Commands

### Root Level (runs on both projects)
```bash
npm run lint          # Run linter on frontend and backend
npm run lint:fix      # Auto-fix linting issues
```

### Backend
```bash
cd backend
npm run lint          # Check for linting issues
npm run lint:fix      # Auto-fix linting issues
```

### Frontend
```bash
cd frontend
npm run lint          # Check for linting issues
npm run lint:fix      # Auto-fix linting issues
```

## Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) to automatically lint and fix code before commits.

### Pre-commit Hook
The pre-commit hook automatically:
1. Runs ESLint on staged TypeScript files
2. Auto-fixes formatting issues when possible
3. Prevents commits if there are unfixable errors

### How it Works
When you run `git commit`:
1. Husky intercepts the commit
2. lint-staged runs on staged files only
3. ESLint automatically fixes issues
4. If all fixes succeed, the commit proceeds
5. If there are errors that can't be fixed, the commit is blocked

### Configuration
- **Husky config**: `.husky/pre-commit`
- **lint-staged config**: `package.json` (root level)

## Claude Code Hook

When using [Claude Code](https://claude.ai/code), the project includes an automated linting hook that runs after file edits.

### How it Works
After Claude writes or edits a TypeScript/JavaScript file:
1. The `PostToolUse` hook automatically triggers
2. ESLint runs on the modified file
3. If linting errors are found, Claude receives immediate feedback
4. Claude can then fix the issues automatically

### Configuration
- **Hook config**: `.claude/settings.json`
- **Hook script**: `.claude/hooks/lint-check.sh`

This ensures code quality is maintained throughout the development session without manual intervention.

**Note**: The hook only checks TypeScript and JavaScript files in the `frontend/` and `backend/` directories.

## Setup for New Developers

After cloning the repository:
```bash
# Install root dependencies (husky and lint-staged)
npm install

# Install backend dependencies
cd backend && npm install && cd ..

# Install frontend dependencies
cd frontend && npm install --legacy-peer-deps && cd ..
```

The git hooks will be automatically set up during `npm install` via the `prepare` script.

## Rules

### TypeScript
- Unused variables are errors (except those prefixed with `_`)
- `any` types generate warnings
- Console statements generate warnings (except `console.warn` and `console.error`)

### React (Frontend only)
- React Hooks rules are enforced
- Accessibility (a11y) rules are checked
- React imports not required (React 17+)

### Prettier
- 2-space indentation
- Single quotes
- Semicolons required
- Trailing commas
- Line width: 100 characters

## Troubleshooting

### Hook not running
If the pre-commit hook isn't running:
```bash
# Reinstall husky
npm run prepare
chmod +x .husky/pre-commit
```

### ESLint errors
To see all linting errors:
```bash
npm run lint
```

To auto-fix most errors:
```bash
npm run lint:fix
```

### Bypassing hooks (not recommended)
If you absolutely need to commit without running the hook:
```bash
git commit --no-verify -m "your message"
```
**Note**: This should be avoided as it defeats the purpose of having the hook.

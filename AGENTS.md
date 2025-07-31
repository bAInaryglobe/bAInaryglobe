# AGENTS.md

## Build, Lint, and Test Commands
- **Build:** `pnpm build` or `npm run build`
- **Dev server:** `pnpm dev` or `npm run dev`
- **Lint:** `pnpm lint` or `npm run lint`
- **Test:** No test runner is currently set up. Add Jest, Vitest, or similar if tests are needed.

## Code Style Guidelines
- **Imports:** Use ES6 import syntax. Group external, then internal modules. No relative imports across module boundaries.
- **Formatting:** Use Prettier (with Tailwind plugin). Run `prettier --write .` to auto-format.
- **Linting:** Follows `next/core-web-vitals` ESLint config. Fix lint errors before committing.
- **Types:** Use TypeScript for all code. Prefer explicit types for function signatures and exported values.
- **Naming:** Use camelCase for variables/functions, PascalCase for components/types, UPPER_CASE for constants.
- **Error Handling:** Use try/catch for async code. Log errors with context. Avoid silent failures.
- **Components:** Use functional components. Prefer arrow functions. Co-locate styles and components.
- **Tailwind:** Use utility classes for styling. Do not use inline styles unless necessary.
- **File Structure:** Organize by feature/module. Place types in `src/types/`, components in `src/components/`.
- **Auth:** Use NextAuth for authentication (see `src/app/api/auth/[...nextauth]/route.ts`).

> For new tests, add a test runner and document usage here.

## Git Commit and Push Instructions
- After every change, run `git add .` to stage all changes.
- Commit with a single, concise sentence describing the change. The commit message must be one line, with no new lines or author info.
- Push to the remote repository after every commit.

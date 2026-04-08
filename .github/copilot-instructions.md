# Project Guidelines

## Architecture

This workspace is a React 19 and TypeScript component library built with Vite.

- Main library entry: `src/index.ts`
- Component exports: `src/components/index.ts`
- Presentational components: `src/components/Button`, `src/components/Avatar`, `src/components/Badge`
- Behavior-heavy components under migration: `src/components/Menu`, `src/components/Toggle`
- Shared styling tokens: `src/styles/variables.scss`
- Development playground: `src/App.tsx`

Prefer keeping behavior primitives headless-first and layering SCSS styling on top.

## Build And Test

- Install: `npm install`
- Dev server: `npm run dev`
- Build app: `npm run build`
- Build library bundle: `npm run build:lib`
- Lint: `npm run lint`

There is currently no committed test setup. If a task changes behavior for `Menu`, `Toggle`, or other stateful primitives, prefer adding or updating tests as part of the same change.

## Conventions

- Keep the library more like Radix UI in behavior, not by copying Radix source or visual design.
- Favor compound component APIs for stateful primitives and use deliberate part names such as `Root`, `Trigger`, `Content`, and `Item` when introducing or revising public APIs.
- Support controlled and uncontrolled state for behavior-heavy primitives. Prefer contracts such as `open` or `defaultOpen` with `onOpenChange`, and `pressed` or `defaultPressed` with `onPressedChange`.
- Use semantic interactive elements. Do not introduce clickable `div` or `span` patterns for buttons, toggles, or menu triggers.
- Forward refs for interactive primitives and preserve native prop passthrough.
- Expose styling state via DOM attributes such as `data-state`, `data-disabled`, and position attributes where relevant.
- Keep SCSS and CSS variables as the styling layer unless the task explicitly requests a styling-system change.
- Preserve or intentionally deprecate public exports. Do not silently break component names or compound part access.

## Migration Priorities

- Highest priority: migrate `Menu` toward a Radix-style dropdown primitive with strong accessibility and keyboard behavior.
- Next priority: redesign `Toggle` as a semantic, accessible primitive with controlled and uncontrolled support.
- Lower priority: leave `Button`, `Avatar`, and `Badge` custom unless a task specifically requires new primitive behavior.

See `docs/radix-migration-backlog.md` for the concrete implementation backlog and acceptance criteria.

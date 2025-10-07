# Component Library

A clean, modern React component library built with TypeScript and Vite.

## Project Structure

```
src/
├── components/          # React components
│   └── index.ts        # Component exports
├── lib/                # Utility functions and helpers
│   └── index.ts        # Library exports
├── App.tsx             # Development playground
├── main.tsx            # Development entry point
├── index.css           # Global styles and CSS reset
└── index.ts            # Main library entry point
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Usage

The main library entry point is `src/index.ts`, which exports all components and utilities.

### Adding Components

1. Create your component in `src/components/[ComponentName]/`
2. Export it from `src/components/index.ts`
3. Test it in `src/App.tsx` during development

### Adding Utilities

1. Create utility functions in `src/lib/`
2. Export them from `src/lib/index.ts`

## Built With

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## Clean Structure

This project has been cleaned of all boilerplate content:

- ✅ Removed template imagery and logos
- ✅ Simplified CSS to essential global styles and reset
- ✅ Clean development playground in App.tsx
- ✅ Proper component library structure
- ✅ TypeScript configuration optimized
- ✅ Ready for component development

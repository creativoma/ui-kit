# UI Kit Playground

Interactive playground for testing and showcasing @creativoma/ui-kit components.

## 🌐 Live Demo

**[ui-kit-playground.vercel.app](https://ui-kit-playground.vercel.app/)**

## 🎯 Purpose

This playground allows you to:

- ✅ Test all UI Kit components interactively
- ✅ Preview different variants, sizes, and states
- ✅ Validate component behavior before releases
- ✅ Showcase the component library to users

## 🛠️ Development

```bash
# From monorepo root
pnpm dev --filter=playground

# Or from this directory
cd apps/playground
pnpm dev
```

## 📦 Dependencies

This playground depends on:
- `@creativoma/ui-kit` (workspace dependency)
- React 19
- Vite 6

## 🚀 Deployment

Automatically deployed to Vercel on every push to main branch.

**Build Command**: `cd ../.. && pnpm install && pnpm build --filter=@creativoma/ui-kit && cd apps/playground && pnpm build`

## 🏗️ Built With

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
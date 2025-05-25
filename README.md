# UI Kit Monorepo

![Screenshot](public/screenshot.png)

A modern React component library built with TypeScript, Vite, and Tailwind CSS v4, organized as a monorepo for better development experience and scalability.

[![npm version](https://badge.fury.io/js/@creativoma%2Fui-kit.svg)](https://www.npmjs.com/package/@creativoma/ui-kit)
[![CI](https://github.com/creativoma/ui-kit/workflows/PR%20Check/badge.svg)](https://github.com/creativoma/ui-kit/actions)

## 🚀 Quick Links

- 📦 **NPM Package**: [@creativoma/ui-kit](https://www.npmjs.com/package/@creativoma/ui-kit)
- 🎮 **Live Playground**: [ui-kit-playground.vercel.app](https://ui-kit-playground.vercel.app/)
- 📚 **Documentation**: [ui-kit-docs-mu.vercel.app](https://ui-kit-docs-mu.vercel.app/)

## 📁 Project Structure

```
ui-kit/
├── apps/
│   ├── docs/         # Documentation site (Starlight)
│   └── playground/   # Component testing playground
├── packages/
│   └── ui/          # Main UI Kit library
└── ...
```

## 🛠️ Development

### Prerequisites

- Node.js 22+
- pnpm 10.6.2+

### Getting Started

```bash
# Clone the repository
git clone https://github.com/creativoma/ui-kit.git
cd ui-kit

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Available Commands

```bash
# Development
pnpm dev          # Start all apps in development mode
pnpm build        # Build all packages and apps
pnpm lint         # Lint all packages
pnpm type-check   # Type check all packages

# Package-specific
pnpm dev --filter=playground    # Start only playground
pnpm build --filter=@creativoma/ui-kit  # Build only UI Kit
```

## 📦 Packages

### [@creativoma/ui-kit](./packages/ui)
The main UI component library with Button, Card, and more components.

## 🚀 Apps

### [Playground](./apps/playground)
Interactive playground for testing and showcasing components.

### [Documentation](./apps/docs)
Comprehensive documentation built with Starlight.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
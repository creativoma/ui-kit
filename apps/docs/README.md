# UI Kit Documentation

Comprehensive documentation for @creativoma/ui-kit built with Starlight.

## 🌐 Live Documentation

**[ui-kit-docs-mu.vercel.app](https://ui-kit-docs-mu.vercel.app/)**

## 📚 Content

The documentation includes:

- 🚀 **Getting Started** - Installation and setup guides
- 📖 **Component API** - Detailed component documentation
- 🎨 **Design System** - Colors, typography, and spacing
- 💡 **Examples** - Real-world usage examples
- 🔧 **Migration Guides** - Upgrade instructions

## 🛠️ Development

```bash
# From monorepo root
pnpm dev --filter=docs

# Or from this directory
cd apps/docs
pnpm dev
```

Visit [localhost:4321](http://localhost:4321) to view the documentation.

## ✍️ Contributing to Docs

1. Documentation files are in `src/content/docs/`
2. Use Markdown or MDX format
3. Follow the existing structure and style
4. Test your changes locally before submitting

### Adding New Pages

```bash
# Create a new guide
touch src/content/docs/guides/your-guide.md

# Create a new reference
touch src/content/docs/reference/your-reference.md
```

## 🚀 Deployment

Automatically deployed to Vercel on every push to main branch.

## 🏗️ Built With

- [Starlight](https://starlight.astro.build/) - Documentation framework
- [Astro](https://astro.build/) - Static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type safety

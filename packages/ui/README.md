# @creativoma/ui-kit

A modern React component library with **40+ components** built with TypeScript, Vite, and Tailwind CSS v4.

## 🚀 Quick Links

- 📦 **NPM**: [@creativoma/ui-kit](https://www.npmjs.com/package/@creativoma/ui-kit)
- 🌐 **Website**: [ui-kit-website.vercel.app](https://ui-kit-website.vercel.app/)
- 🔗 **Repository**: [github.com/creativoma/ui-kit](https://github.com/creativoma/ui-kit)
- 📋 **Changelog**: [CHANGELOG.md](../../CHANGELOG.md)

## 📦 Installation

```bash
pnpm install @creativoma/ui-kit
```

## 🛠️ Prerequisites

This library requires Tailwind CSS v4:

```bash
pnpm install -D tailwindcss@4 postcss autoprefixer @tailwindcss/postcss
```

## ⚙️ Setup

### 1. Configure Tailwind CSS

Add the ui-kit path to your Tailwind configuration:

```js
// tailwind.config.js or tailwind.config.ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@creativoma/ui-kit/dist/**/*.js',
  ],
  // ... rest of your config
}
```

**Important:** Make sure to include the ui-kit path in your `content` array so Tailwind can properly scan and include the necessary styles for the components.

### 2. Configure PostCSS

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 3. Import Styles

```js
// In your main entry file (e.g., main.jsx or App.jsx)
import '@creativoma/ui-kit/styles'
```

## 🎯 Usage

```tsx
import { Button, Card } from '@creativoma/ui-kit'

function App() {
  return (
    <Card>
      <h1>Welcome to UI Kit</h1>
      <div className="mt-4 flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </Card>
  )
}
```

## 🧩 Components

### Available Components

**Layout**

- `Accordion`, `AspectRatio`, `Card`, `Collapsible`, `Resizable`, `ScrollArea`, `Separator`, `Sidebar`

**Forms**

- `Button`, `ButtonGroup`, `Checkbox`, `Field`, `Form`, `Input`, `InputGroup`, `InputOTP`, `Label`, `RadioGroup`, `Select`, `Slider`, `Switch`, `Textarea`, `Toggle`, `ToggleGroup`

**Feedback**

- `Alert`, `AlertDialog`, `Dialog`, `Drawer`, `Empty`, `Progress`, `Sheet`, `Skeleton`, `Sonner`, `Spinner`, `Tooltip`

**Navigation**

- `Breadcrumb`, `Command`, `ContextMenu`, `DropdownMenu`, `HoverCard`, `Menubar`, `NavigationMenu`, `Pagination`, `Popover`, `Tabs`

**Data Display**

- `Avatar`, `Badge`, `Calendar`, `Carousel`, `Chart`, `Kbd`, `Table`

### Button Example

```tsx
import { Button } from '@creativoma/ui-kit'

;<Button variant="default" size="default">
  Click me
</Button>
```

### Card Example

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@creativoma/ui-kit'

;<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

## 🔧 Troubleshooting

### Styles not applying?

1. Ensure you've added the ui-kit path to your `tailwind.config.js` content array
2. Make sure you're importing the styles: `import '@creativoma/ui-kit/styles'`
3. Verify you're using Tailwind CSS v4 with the correct PostCSS plugin

### TypeScript errors?

Make sure your project includes React types:

```bash
pnpm install -D @types/react @types/react-dom
```

## 🔄 Tailwind CSS v4 Compatibility

Built with Tailwind CSS v4. Key differences from v3:

- PostCSS plugin is separate: `@tailwindcss/postcss`
- Border color defaults to `currentColor`
- [Migration guide](https://tailwindcss.com/blog/tailwindcss-v4-alpha)

## 🛠️ Development

This package is part of a monorepo. See the [main repository](https://github.com/creativoma/ui-kit) for development instructions.

## 📋 Changelog

See [CHANGELOG.md](../../CHANGELOG.md) for a list of changes.

## 📄 License

MIT License

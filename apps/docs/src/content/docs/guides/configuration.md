---
title: Configuration
description: Learn how to customize and configure @creativoma/ui-kit in your project.
---

## Tailwind CSS Configuration

The UI Kit is built with Tailwind CSS v4. Here's how to configure it properly:

### Basic Configuration

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@creativoma/ui-kit/dist/**/*.js',
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
}
```

### Custom Theme

You can extend the default theme to match your design system:

```js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@creativoma/ui-kit/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        ui: '0.5rem',
      },
    },
  },
  plugins: [],
}
```

## PostCSS Configuration

### Standard Setup

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### With Additional Plugins

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
  },
}
```

## TypeScript Configuration

### Basic tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Path Mapping (Optional)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@ui/*": ["./node_modules/@creativoma/ui-kit/dist/*"]
    }
  }
}
```

## Component Customization

### Using CSS Variables

You can customize component styles using CSS custom properties:

```css
/* In your global CSS */
:root {
  --ui-primary: #3b82f6;
  --ui-primary-hover: #2563eb;
  --ui-radius: 0.5rem;
  --ui-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

### Tailwind Class Overrides

Override default styles using Tailwind classes:

```tsx
import { Button } from '@creativoma/ui-kit'

// Custom styling with Tailwind classes
;<Button className="rounded-full bg-purple-600 hover:bg-purple-700">
  Custom Button
</Button>
```

## Framework Integration

### Next.js App Router

```js
// app/layout.tsx
import '@creativoma/ui-kit/styles'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Next.js Pages Router

```js
// pages/_app.tsx
import '@creativoma/ui-kit/styles'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

### Vite + React

```js
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@creativoma/ui-kit/styles'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## Environment Variables

You can configure certain aspects using environment variables:

```bash
# .env.local
NEXT_PUBLIC_UI_THEME=dark
NEXT_PUBLIC_UI_RADIUS=medium
```

## Tree Shaking

The UI Kit supports tree shaking out of the box. Import only what you need:

```tsx
// ✅ Good - Only imports Button
import { Button } from '@creativoma/ui-kit'

// ❌ Avoid - Imports everything
import * as UIKit from '@creativoma/ui-kit'
```

## Performance Optimization

### Bundle Size Optimization

1. **Use tree shaking**: Import only needed components
2. **Configure Tailwind purging**: Ensure unused styles are removed
3. **Use production builds**: Always build with `NODE_ENV=production`

### Runtime Optimization

```tsx
// Use React.memo for expensive components
import { memo } from 'react'
import { Button } from '@creativoma/ui-kit'

const OptimizedButton = memo(Button)
```

## Troubleshooting

### Common Issues

**Styles not loading:**

- Check that `@creativoma/ui-kit/styles` is imported
- Verify Tailwind config includes UI Kit path
- Ensure PostCSS is configured correctly

**TypeScript errors:**

- Update to TypeScript 5.0+
- Check that all peer dependencies are installed
- Restart your TypeScript language server

**Build errors:**

- Verify all peer dependencies match required versions
- Check your bundler configuration
- Ensure Tailwind CSS v4 compatibility

### Getting Help

If you encounter issues:

1. Check the [troubleshooting guide](/guides/troubleshooting/)
2. Search existing [GitHub issues](https://github.com/creativoma/ui-kit/issues)
3. Create a new issue with a minimal reproduction

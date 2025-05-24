---
title: Installation
description: How to install and set up @creativoma/ui-kit in your React project.
---

## Quick Installation

Install the UI Kit package and its peer dependencies:

```bash
# Install the UI Kit
pnpm install @creativoma/ui-kit

# Install required dependencies
pnpm install -D tailwindcss@4 postcss autoprefixer @tailwindcss/postcss
```

## Step-by-Step Setup

### 1. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install @creativoma/ui-kit
pnpm install -D tailwindcss@4 postcss autoprefixer @tailwindcss/postcss

# Using npm
npm install @creativoma/ui-kit
npm install -D tailwindcss@4 postcss autoprefixer @tailwindcss/postcss

# Using yarn
yarn add @creativoma/ui-kit
yarn add -D tailwindcss@4 postcss autoprefixer @tailwindcss/postcss
```

### 2. Configure Tailwind CSS

Create or update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@creativoma/ui-kit/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Configure PostCSS

Create or update your `postcss.config.js`:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 4. Import Styles

Import the UI Kit styles in your main entry file:

```js
// In your main.jsx, main.tsx, or App.jsx
import '@creativoma/ui-kit/styles'
```

### 5. Start Using Components

```tsx
import { Button, Card } from '@creativoma/ui-kit'

function App() {
  return (
    <div className="p-8">
      <Card>
        <h1 className="mb-4 text-xl font-bold">Welcome!</h1>
        <div className="flex gap-2">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Card>
    </div>
  )
}

export default App
```

## Framework-Specific Setup

### Next.js

If you're using Next.js, make sure to import styles in your `_app.js` or `layout.js`:

```js
// pages/_app.js (Pages Router)
import '@creativoma/ui-kit/styles'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

```js
// app/layout.js (App Router)
import '@creativoma/ui-kit/styles'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Vite

For Vite projects, import styles in your `main.jsx` or `main.tsx`:

```js
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@creativoma/ui-kit/styles'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## Troubleshooting

### Styles Not Loading

If components appear unstyled:

1. Make sure you've imported `@creativoma/ui-kit/styles`
2. Verify your Tailwind config includes the UI Kit path
3. Check that PostCSS is configured correctly

### TypeScript Issues

If you encounter TypeScript errors:

1. Make sure you're using TypeScript 5.0+
2. Restart your TypeScript language server
3. Check that all peer dependencies are installed

### Build Issues

If you encounter build errors:

1. Ensure all peer dependencies are installed
2. Check your bundler configuration
3. Verify Tailwind CSS v4 compatibility

## Next Steps

- [Configuration Guide](/guides/configuration/) - Learn about customization options
- [Button Component](/components/button/) - Explore the Button component
- [Card Component](/components/card/) - Explore the Card component

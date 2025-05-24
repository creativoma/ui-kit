# UI Kit

A minimal and elegant React component library built with TypeScript, Vite, and Tailwind CSS v4.

## Installation

```bash
pnpm install @creativoma/ui-kit
```

## Prerequisites

This library requires Tailwind CSS v4 to be installed in your project:

```bash
pnpm install -D tailwindcss@4 postcss autoprefixer
```

If you're using Tailwind CSS v4, make sure to also install the separate PostCSS plugin:

```bash
pnpm install -D @tailwindcss/postcss
```

## Setup

1. Add the library to your Tailwind CSS content configuration:

```js
// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@creativoma/ui-kit/dist/**/*.js',
  ],
  // ... rest of your config
}
```

2. Make sure your PostCSS configuration includes the correct plugin for Tailwind CSS v4:

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

## Import Styles

Import the component styles in your app's entry file:

```js
// In your main entry file (e.g., main.jsx or App.jsx)
import '@creativoma/ui-kit/styles'
```

## Usage

```tsx
import { Button, Card } from '@creativoma/ui-kit'

function App() {
  return (
    <>
      <Card>
        <h1>Welcome</h1>
        <div className="mt-4 flex gap-2">
          <Button>Success</Button>
          <Button variant="danger" onClick={() => alert('Error!')}>
            Error
          </Button>
        </div>
      </Card>
    </>
  )
}
```

## Components

### Button

```tsx
<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

**Props:**

- `variant`: `primary` | `secondary` | `danger` | `ghost`
- `size`: `sm` | `md` | `lg`
- `loading`: boolean

### Card

```tsx
<Card padding="md" shadow="sm" border={true}>
  Content here
</Card>
```

**Props:**

- `padding`: `none` | `sm` | `md` | `lg`
- `shadow`: `none` | `sm` | `md` | `lg`
- `border`: boolean

## Tailwind CSS v4 Compatibility

This library is built with Tailwind CSS v4. If you're upgrading from v3, please note some important changes:

1. The PostCSS plugin is now a separate package: `@tailwindcss/postcss`
2. The default border color has changed to `currentColor` in v4 (we include a compatibility layer)
3. For more information, check the [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/blog/tailwindcss-v4-alpha)

## Development

```bash
# Install dependencies
pnpm install

# Start playground
pnpm dev

# Build library
pnpm build
```

## License

MIT License

## Commands for Publishing

### For Git:

```bash
# Initialize git (if you haven't done it)
git init

# Add files
git add .

# First commit
git commit -m "Initial commit: Button, Card"

# Create repo on GitHub and connect
git branch -M main
git remote add origin https://github.com/creativoma/creativoma-ui.git
git push -u origin main
```

### For npm:

```bash
# Login to npm (only the first time)
npm login

# Build the library
pnpm build

# Publish
pnpm publish --access public

# For future versions
pnpm version patch  # 0.1.0 -> 0.1.1
pnpm version minor  # 0.1.1 -> 0.2.0
pnpm version major  # 0.2.0 -> 1.0.0
pnpm publish
```

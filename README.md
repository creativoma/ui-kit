# UI Kit

A minimal and elegant React component library built with TypeScript, Vite, and Tailwind CSS.

## Installation

```bash
pnpm install @creativoma/ui-kit
```

## Prerequisites

This library requires Tailwind CSS to be installed in your project:

```bash
pnpm install -D tailwindcss postcss autoprefixer
```

## Setup

Add the library to your Tailwind CSS content configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@creativoma/ui-kit/dist/**/*.js',
  ],
  // ... rest of your config
}
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
          <Button variant="danger" onClick={() => error('Error!')}>
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

## Development

```bash
# Install dependencies
npm install

# Start playground
npm run dev

# Build library
npm run build
```

## License

MIT License

## 7. Commands for Publishing

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
npm run build

# Publish
npm publish --access public

# For future versions
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.1 -> 0.2.0
npm version major  # 0.2.0 -> 1.0.0
npm publish
```

---
title: Card
description: A flexible container component with customizable padding, shadows, and borders.
---

The Card component is a versatile container that groups related content. It provides a clean, elevated surface with customizable padding, shadows, and borders.

## Import

```tsx
import { Card } from '@creativoma/ui-kit'
```

## Basic Usage

```tsx
import { Card } from '@creativoma/ui-kit'

function Example() {
  return (
    <Card>
      <h3>Card Title</h3>
      <p>This is some content inside the card.</p>
    </Card>
  )
}
```

## Padding Variants

Control the internal spacing of your card:

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
  <Card padding="none">
    <div className="bg-gray-100 p-2">No padding</div>
  </Card>

  <Card padding="sm">
    <p>Small padding</p>
  </Card>

  <Card padding="md">
    <p>Medium padding (default)</p>
  </Card>

  <Card padding="lg">
    <p>Large padding</p>
  </Card>
</div>
```

## Shadow Variants

Adjust the elevation and depth of your card:

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
  <Card shadow="none">
    <p>No shadow</p>
  </Card>

  <Card shadow="sm">
    <p>Small shadow (default)</p>
  </Card>

  <Card shadow="md">
    <p>Medium shadow</p>
  </Card>

  <Card shadow="lg">
    <p>Large shadow</p>
  </Card>
</div>
```

## Border Control

Toggle the card border:

```tsx
<div className="flex gap-4">
  <Card border={true}>
    <p>With border (default)</p>
  </Card>

  <Card border={false}>
    <p>Without border</p>
  </Card>
</div>
```

## Complex Content

Cards can contain any type of content:

```tsx
import { Card, Button } from '@creativoma/ui-kit'

function ProfileCard() {
  return (
    <Card padding="lg" shadow="md">
      <div className="flex items-center space-x-4">
        <img
          src="/avatar.jpg"
          alt="Profile"
          className="h-16 w-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-gray-600">Software Engineer</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-700">
          Passionate developer with 5+ years of experience in React and
          TypeScript.
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <Button size="sm" variant="primary">
          Connect
        </Button>
        <Button size="sm" variant="secondary">
          Message
        </Button>
      </div>
    </Card>
  )
}
```

## Nested Cards

Cards can be nested for complex layouts:

```tsx
<Card padding="lg" shadow="lg">
  <h2 className="mb-4 text-xl font-bold">Dashboard</h2>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <Card padding="md" shadow="sm">
      <h3 className="font-semibold">Statistics</h3>
      <p className="text-2xl font-bold text-blue-600">1,234</p>
    </Card>

    <Card padding="md" shadow="sm">
      <h3 className="font-semibold">Revenue</h3>
      <p className="text-2xl font-bold text-green-600">$12,345</p>
    </Card>
  </div>
</Card>
```

## Custom Styling

Customize the card appearance with additional CSS classes:

```tsx
<Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
  <h3 className="text-xl font-bold">Gradient Card</h3>
  <p>This card has a custom gradient background.</p>
</Card>
```

## Interactive Cards

Make cards interactive with hover effects and click handlers:

```tsx
<Card
  className="cursor-pointer transition-shadow duration-200 hover:shadow-lg"
  onClick={() => console.log('Card clicked!')}
>
  <h3 className="text-lg font-semibold">Clickable Card</h3>
  <p>Click this card to trigger an action.</p>
</Card>
```

## Examples

### Article Card

```tsx
function ArticleCard({ article }) {
  return (
    <Card padding="lg" shadow="md" className="max-w-md">
      <img
        src={article.image}
        alt={article.title}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />

      <div className="mb-2">
        <span className="text-sm font-medium text-blue-600">
          {article.category}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
      <p className="mb-4 text-gray-600">{article.excerpt}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{article.date}</span>
        <Button size="sm" variant="primary">
          Read More
        </Button>
      </div>
    </Card>
  )
}
```

### Settings Panel

```tsx
function SettingsPanel() {
  return (
    <Card padding="lg" shadow="sm">
      <div className="mb-4 border-b pb-4">
        <h2 className="text-xl font-semibold">Account Settings</h2>
        <p className="text-gray-600">Manage your account preferences</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input type="checkbox" className="toggle" />
        </div>

        <div className="flex items-center justify-between">
          <span>Two-Factor Authentication</span>
          <Button size="sm" variant="secondary">
            Setup
          </Button>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <Button variant="primary" className="w-full">
          Save Changes
        </Button>
      </div>
    </Card>
  )
}
```

## API Reference

### Props

| Prop        | Type                             | Default | Description            |
| ----------- | -------------------------------- | ------- | ---------------------- |
| `padding`   | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'`  | Internal padding size  |
| `shadow`    | `'none' \| 'sm' \| 'md' \| 'lg'` | `'sm'`  | Drop shadow intensity  |
| `border`    | `boolean`                        | `true`  | Whether to show border |
| `children`  | `ReactNode`                      | -       | The card content       |
| `className` | `string`                         | -       | Additional CSS classes |

### HTML Attributes

The Card component also accepts all standard HTML div attributes such as:

- `onClick`
- `onMouseEnter`
- `onMouseLeave`
- `aria-*` attributes
- `data-*` attributes

## Styling Details

### Padding Sizes

- `none`: No internal padding
- `sm`: 1rem (16px) padding
- `md`: 1.5rem (24px) padding (default)
- `lg`: 2rem (32px) padding

### Shadow Intensities

- `none`: No shadow
- `sm`: Subtle shadow (default)
- `md`: Medium shadow for more elevation
- `lg`: Strong shadow for high elevation

### Default Styles

- Background: White
- Border: Light gray (when enabled)
- Border radius: 0.5rem (8px)

## Accessibility

The Card component supports accessibility features:

- **Semantic HTML**: Uses proper HTML structure
- **Keyboard Navigation**: Supports focus when interactive
- **Screen Readers**: Content is properly announced
- **ARIA Support**: Accepts all ARIA attributes

### Best Practices

1. **Use semantic headings**: Structure content with proper heading hierarchy
2. **Provide context**: Include descriptive content for screen readers
3. **Interactive feedback**: Use hover states for clickable cards

```tsx
// Good: Semantic structure
<Card>
  <h3>Card Title</h3>
  <p>Card description</p>
</Card>

// Good: Interactive card with proper attributes
<Card
  role="button"
  tabIndex={0}
  aria-label="View article details"
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  <h3>Article Title</h3>
</Card>
```

---
title: Button
description: A versatile button component with multiple variants, sizes, and states.
---

The Button component is a fundamental UI element that triggers actions when clicked. It supports multiple variants, sizes, and states including loading.

## Import

```tsx
import { Button } from '@creativoma/ui-kit'
```

## Basic Usage

```tsx
import { Button } from '@creativoma/ui-kit'

function Example() {
  return <Button>Click me</Button>
}
```

## Variants

The Button component supports four different variants:

```tsx
<div className="flex gap-2">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="ghost">Ghost</Button>
</div>
```

### Primary

The default variant with a solid background. Use for the main action on a page.

### Secondary

A subtle variant with a border. Use for secondary actions.

### Danger

A red variant for destructive actions like delete or remove.

### Ghost

A minimal variant with no background. Use for subtle actions.

## Sizes

Three size options are available:

```tsx
<div className="flex items-center gap-2">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>
```

## States

### Loading State

Show a loading spinner to indicate processing:

```tsx
import { useState } from 'react'
import { Button } from '@creativoma/ui-kit'

function LoadingExample() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Button loading={loading} onClick={handleClick}>
      {loading ? 'Loading...' : 'Click me'}
    </Button>
  )
}
```

### Disabled State

Disable the button to prevent interaction:

```tsx
<Button disabled>Disabled Button</Button>
```

## Custom Styling

You can customize the button appearance using additional CSS classes:

```tsx
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Purple Button
</Button>
```

## Event Handling

The Button component accepts all standard HTML button props:

```tsx
<Button
  onClick={() => console.log('Clicked!')}
  onMouseEnter={() => console.log('Mouse entered')}
  onFocus={() => console.log('Focused')}
>
  Interactive Button
</Button>
```

## Examples

### Form Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary" size="lg">
    Submit Form
  </Button>
</form>
```

### Action Buttons

```tsx
<div className="flex gap-2">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
  <Button variant="danger">Delete</Button>
</div>
```

### Loading with Different States

```tsx
function AsyncActions() {
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  return (
    <div className="flex gap-2">
      <Button loading={saving} onClick={() => handleSave()} variant="primary">
        {saving ? 'Saving...' : 'Save'}
      </Button>

      <Button
        loading={deleting}
        onClick={() => handleDelete()}
        variant="danger"
      >
        {deleting ? 'Deleting...' : 'Delete'}
      </Button>
    </div>
  )
}
```

## API Reference

### Props

| Prop        | Type                                              | Default     | Description                     |
| ----------- | ------------------------------------------------- | ----------- | ------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | The visual style variant        |
| `size`      | `'sm' \| 'md' \| 'lg'`                            | `'md'`      | The size of the button          |
| `loading`   | `boolean`                                         | `false`     | Shows loading spinner when true |
| `disabled`  | `boolean`                                         | `false`     | Disables the button             |
| `children`  | `ReactNode`                                       | -           | The button content              |
| `className` | `string`                                          | -           | Additional CSS classes          |
| `onClick`   | `(event: MouseEvent) => void`                     | -           | Click event handler             |

### HTML Attributes

The Button component also accepts all standard HTML button attributes such as:

- `type` ('button', 'submit', 'reset')
- `form`
- `name`
- `value`
- `aria-*` attributes
- `data-*` attributes

## Accessibility

The Button component is built with accessibility in mind:

- **Keyboard Navigation**: Fully accessible via keyboard (Tab, Enter, Space)
- **Screen Readers**: Properly announced by screen readers
- **Focus Management**: Clear focus indicators
- **ARIA Support**: Supports all ARIA attributes

### Best Practices

1. **Use descriptive text**: Avoid generic terms like "Click here"
2. **Loading states**: Always provide feedback during async operations
3. **Disabled states**: Clearly indicate when actions are unavailable
4. **Icon buttons**: Include `aria-label` for icon-only buttons

```tsx
// Good: Descriptive text
<Button>Save Document</Button>

// Good: Loading feedback
<Button loading={saving}>
  {saving ? 'Saving Document...' : 'Save Document'}
</Button>

// Good: Icon button with label
<Button aria-label="Close dialog">
  <CloseIcon />
</Button>
```

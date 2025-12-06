export const componentCategories = [
  {
    name: 'Landing Examples',
    components: ['Medieval Game Landing', 'SaaS Product Landing', 'Fitness App Landing'],
  },
  {
    name: 'Form',
    components: [
      'Button',
      'Button Group',
      'Input',
      'Input Group',
      'Input OTP',
      'Textarea',
      'Select',
      'Checkbox',
      'Radio Group',
      'Switch',
      'Slider',
      'Label',
      'Form',
      'Field',
    ],
  },
  {
    name: 'Data Display',
    components: [
      'Card',
      'Table',
      'Badge',
      'Avatar',
      'Skeleton',
      'Empty',
      'Progress',
      'Chart',
      'Kbd',
      'Item',
    ],
  },
  {
    name: 'Feedback',
    components: ['Alert', 'Alert Dialog', 'Spinner', 'Toast'],
  },
  {
    name: 'Overlay',
    components: [
      'Dialog',
      'Drawer',
      'Sheet',
      'Popover',
      'Tooltip',
      'Hover Card',
      'Context Menu',
      'Dropdown Menu',
    ],
  },
  {
    name: 'Navigation',
    components: [
      'Tabs',
      'Breadcrumb',
      'Pagination',
      'Navigation Menu',
      'Menubar',
      'Sidebar',
    ],
  },
  {
    name: 'Layout',
    components: [
      'Accordion',
      'Collapsible',
      'Separator',
      'Scroll Area',
      'Resizable',
      'Aspect Ratio',
    ],
  },
  {
    name: 'Other',
    components: ['Calendar', 'Carousel', 'Command', 'Toggle', 'Toggle Group'],
  },
]

export const allComponents = componentCategories.flatMap((cat) =>
  cat.components.map((comp) => ({ name: comp, category: cat.name }))
)

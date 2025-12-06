# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-12-07

### Added

- **40+ new UI components** based on shadcn/ui patterns:
  - Layout: `Accordion`, `AspectRatio`, `Card`, `Collapsible`, `Resizable`, `ScrollArea`, `Separator`, `Sidebar`
  - Forms: `Button`, `ButtonGroup`, `Checkbox`, `Field`, `Form`, `Input`, `InputGroup`, `InputOTP`, `Label`, `RadioGroup`, `Select`, `Slider`, `Switch`, `Textarea`, `Toggle`, `ToggleGroup`
  - Feedback: `Alert`, `AlertDialog`, `Dialog`, `Drawer`, `Empty`, `Progress`, `Sheet`, `Skeleton`, `Sonner`, `Spinner`, `Tooltip`
  - Navigation: `Breadcrumb`, `Command`, `ContextMenu`, `DropdownMenu`, `HoverCard`, `Menubar`, `NavigationMenu`, `Pagination`, `Popover`, `Tabs`
  - Data Display: `Avatar`, `Badge`, `Calendar`, `Carousel`, `Chart`, `Kbd`, `Table`
- **New `apps/website`**: Component showcase and demo site at [ui-kit-website.vercel.app](https://ui-kit-website.vercel.app/)
  - Interactive component demos
  - Example landing pages (Fitness App, Medieval Game, SaaS Product)
- **Custom hooks**: `use-mobile` for responsive design
- **ESLint configuration** for the UI package with proper `dist/` exclusion
- **Tailwind CSS v4** full integration with custom configuration
- **Tree-shaking support**: Added `sideEffects` field to package.json for optimal bundle size

### Changed

- **Project structure**: Reorganized monorepo with cleaner architecture
- **Build configuration**: Updated Vite and TypeScript configs for better DX
- **Dependencies**: Updated to latest versions (React 19, Tailwind CSS v4)
- **Sidebar component**: Fixed `Math.random` impure function call using `React.useId()` for deterministic skeleton widths

### Removed

- `apps/docs` - Starlight documentation site (consolidated into website)
- `apps/playground` - Old playground app (replaced by `apps/website`)
- Legacy component structure in `packages/ui/components/`

### Fixed

- ESLint errors in generated `.d.ts` files by properly ignoring `dist/` directory
- React purity violation in `SidebarMenuSkeleton` component

## [0.1.11] - Previous

- Initial component library with basic Button and Card components


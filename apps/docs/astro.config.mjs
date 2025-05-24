// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://ui-kit-docs-mu.vercel.app',
  integrations: [
    starlight({
      title: 'UI Kit',
      description:
        'A minimal and elegant React component library built with TypeScript, Vite, and Tailwind CSS v4.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/creativoma/ui-kit',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'guides/installation' },
            { label: 'Configuration', slug: 'guides/configuration' },
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Button', slug: 'components/button' },
            { label: 'Card', slug: 'components/card' },
          ],
        },
      ],
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
})

// packages/ui/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      // Cambia esta línea para apuntar a tu archivo index.ts en lugar de src/index.ts
      entry: resolve(__dirname, 'index.ts'),
      name: 'UIKit',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@radix-ui\/.*/,
        'class-variance-authority',
        'lucide-react',
        'clsx',
        'tailwind-merge',
        'cmdk',
        'date-fns',
        'embla-carousel-react',
        'input-otp',
        'next-themes',
        'react-day-picker',
        'react-hook-form',
        'react-resizable-panels',
        'recharts',
        'sonner',
        'vaul',
        'zod',
        '@hookform/resolvers',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Asegurarse de que los archivos CSS se generen correctamente
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles/index.css'
          }
          return assetInfo.name || ''
        },
      },
    },
    cssCodeSplit: false,
    // No vaciamos el directorio para evitar borrar los tipos generados manualmente
    emptyOutDir: false,
  },
})

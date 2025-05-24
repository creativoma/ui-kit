import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()], // Quité @tailwindcss/vite
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  css: {
    postcss: './postcss.config.ts', // Usa PostCSS config
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'UIKit',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles/index.css'
          }
          return assetInfo.name || ''
        },
      },
    },
    cssCodeSplit: false,
    emptyOutDir: false,
  },
})

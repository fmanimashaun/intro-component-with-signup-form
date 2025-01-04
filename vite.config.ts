import { defineConfig } from 'vite';
import path from 'path';
import htmlPurge from 'vite-plugin-purgecss'

export default defineConfig({
  base: '/intro-component-with-signup-form/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    htmlPurge(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? ''; // Provide a default value
          if (/\.css$/.test(name)) {
            return 'assets/css/[name][extname]';
          } else if (/\.js$/.test(name)) {
            return 'assets/js/[name][extname]';
          } else if (/\.(woff|woff2|ttf|eot|otf)$/.test(name)) {
            return 'assets/fonts/[name][extname]';
          }
          return 'assets/[ext]/[name][extname]'; // Fallback for other asset types
        },
      },
    },
  },
});
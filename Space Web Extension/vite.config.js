import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths in the output
  build: {
    outDir: '../chromeextension/dist', // Output React build to the Chrome extension folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html') // Use the root index.html
      }
    }
  }
});

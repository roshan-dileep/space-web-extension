import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import manifest from './manifest.json';

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
    tsconfigPaths(), // Add this line
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure your main entry point is included
        sidepanel: 'sidepanel.html', // Add the sidepanel.html as an entry point
      },
    },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({  
  plugins: [react()],
  server: {
    port: 3000, // Set the port
    open: true, // Open browser on start
  },
  resolve: {
    alias: {
      '@': '/src', // Set alias for convenient imports
    },
  },
  root: 'public', // Specify public folder as root for Vite
  build: {
    outDir: '../dist', // Output directory for build files
    assetsDir: 'assets', 
    sourcemap: true, 
    rollupOptions: {
      input: 'public/index.html', // Specify index.html path
    },
  },
});

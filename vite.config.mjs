import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: resolve(projectRoot, 'src'),
  base: './',
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: resolve(projectRoot, 'src', 'dist'),
    assetsDir: 'assets/build',
  },
});

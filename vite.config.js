import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Use relative paths for assets so it works in subdirectories or file system
  build: {
    outDir: 'dist',
  }
})

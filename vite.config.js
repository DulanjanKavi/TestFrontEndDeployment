import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, // Fixes refresh issue for routes like /register
  },
  build: {
    outDir: 'dist', // Ensures Vite outputs final files to 'dist' for Render deployment
  },
})

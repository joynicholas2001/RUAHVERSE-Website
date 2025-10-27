import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const config = {
    plugins: [react()],
    css: {
      postcss: './postcss.config.js',
    },
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist'
    }
  }

  // Set base path only for GitHub Pages, not for Vercel
  if (process.env.GITHUB_ACTIONS) {
    config.base = '/RUAHVERSE-Website/'
  }

  return config
})
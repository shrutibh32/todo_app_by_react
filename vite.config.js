import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/todo_app_by_react/',  // important!
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এই লাইনটি যেন অবশ্যই থাকে

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // এখানে প্লাগিনটি কল করা হয়েছে
  ],
})
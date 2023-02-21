// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, './src/menu.html'),
        setdinner: resolve(__dirname, './src/setdinner.html'),
      },
    },
  },
})
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

// const root = resolve(__dirname, 'src')
// const outDir = resolve(__dirname, 'dist')

// export default defineConfig({
//   root,
//   build: {
//     outDir,
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(root, 'index.html'),
//         menu: resolve(root, '.menu.html'),
//         setdinner: resolve(root, '.setdinner.html')
//       }
//     }
//   }
// })


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, './menu'),
        setdinner: resolve(__dirname, './setdinner'),
      },
    },
  },
})
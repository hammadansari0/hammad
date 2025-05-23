import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'public/**/*', dest: '.' },
        { src: 'src/assets/**/*', dest: 'assets' }
      ]
    }),
  ],
  base: "/hammad/",
})

// https://vite.dev/config/

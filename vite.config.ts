import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    vue(),
    AutoImport({
      // global imports to register
      imports: ['vue', 'vue-router', '@vueuse/core', { '@unhead/vue': ['useHead'] }],
      dirs: ['@src/composables']
    }),
    Components({
      dirs: ['src/components', 'src/layouts']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['vue-slick-carousel']
  },
  server: {
    open: true,
    port: 8080
  },

})
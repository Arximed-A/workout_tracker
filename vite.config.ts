import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import {fileURLToPath} from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {VitePWA} from 'vite-plugin-pwa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({registerType: 'autoUpdate'}),
    AutoImport({
      resolvers: [
        ElementPlusResolver()
      ],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  base: process.env.NODE_ENV === 'production'
    ? '/workout_tracker/'
    : '/',
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

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
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            "src": "/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
      }
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver()
      ],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  server: {
    port: 5173
  },
  base: process.env.NODE_ENV === 'production'
    ? '/workout_tracker/'
    : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  }
})

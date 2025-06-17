import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), ElementPlus({})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

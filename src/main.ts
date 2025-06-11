import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './app/style/style.css'
import App from './App.vue'
import router from '@/app/router/router'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')

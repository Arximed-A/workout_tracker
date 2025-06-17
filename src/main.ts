import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './app/style/style.css'
import App from './App.vue'
import router from '@/app/router/router'
import {createI18n} from 'vue-i18n'

const i18n = createI18n({})

const pinia = createPinia()

createApp(App).use(pinia).use(router).use(i18n).mount('#app')

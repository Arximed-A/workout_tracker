import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './app/style/style.css'
import App from './App.vue'
import router from '@/app/router/router'
import {createI18n} from 'vue-i18n'
import i18config from '@/app/i18n/i18n.ts'


const i18n = createI18n(i18config)

const pinia = createPinia()

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(import.meta.env.PROD ? '/sw.js' : "/workout_tracker/sw.js")
    .then(function (registration) {
      console.log("Service worker зарегистрирован:", registration);
    })
    .catch(function (error) {
      console.log("Ошибка при регистрации service worker-а:", error);
    });
} else {
  console.log("Текущий браузер не поддерживает service worker-ы");
}

createApp(App).use(pinia).use(router).use(i18n).mount('#app')


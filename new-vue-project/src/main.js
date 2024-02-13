import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
    en: {
      hi: 'hello!'
    },
    ko: {
      hi: '안녕하세요'
    },
    jp: {
      hi: 'こんにちは.'
    },
    ch: {
      hi: '你好。'
    }
  }

createApp(App).use(i18nPlugin, i18nStrings).use(store).use(router).mount('#app')




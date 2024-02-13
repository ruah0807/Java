// eslint-disable-next-line
/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App).use(store).mixin(mixins).use(VueSweetalert2).use(router).mount('#app')

window.Kakao.init('019e654dd1679d24e494f15c5aa27425')

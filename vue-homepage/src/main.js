// eslint-disable-next-line
/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
// import VueSweetaler2 from 'vue-sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css'


createApp(App).use(store).mixin(mixins).use(router).mount('#app')
// .use(VueSweetalert2)
// window.Kakao.init("카카오 앱 키")

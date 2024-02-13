import { createRouter, createWebHistory } from 'vue-router'
import list from '../views/ProductList.vue'
import about from '../views/AboutView.vue'
import detail from '../views/ProductDetail.vue'
import create from '../views/productCreate.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: list
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/create',
    name: 'create',
    component: create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

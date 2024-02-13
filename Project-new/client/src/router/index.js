import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/productList.vue'
import about from '../views/AboutView.vue'
import detail from '../views/productDetail.vue'
import create from '../views/productCreate.vue'
import sales from '../views/SalesList.vue'
import productImageInsert from '../views/productImageInsert.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  },
  {
    path: '/sales',
    name: 'sales',
    component: sales
  },
  {
    path: '/image_insert',
    name: 'productImageInsert',
    component: productImageInsert
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

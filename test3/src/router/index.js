import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import jan from '../views/January_.vue'
import feb from '../views/February_.vue'
import mar from '../views/March_.vue'
import apr from '../views/April_.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jan',
    name: 'jan',
    component: jan
  },
  {
    path: '/feb',
    name: 'feb',
    component: feb
  },
  {
    path: '/mar',
    name: 'mar',
    component: mar
  },
  {
    path: '/apr',
    name: 'apr',
    component: apr
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

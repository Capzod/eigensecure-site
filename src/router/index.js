import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'
import About from '@/pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

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

// Force scroll to top BEFORE navigation
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

// Force scroll to top AFTER navigation
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
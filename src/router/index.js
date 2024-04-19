import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/VueComponents.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () => import('../views/StateView.vue')
    }
  ]

})

export default router

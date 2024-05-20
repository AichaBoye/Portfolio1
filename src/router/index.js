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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (A propos.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AproposView.vue')
    },
    {
      path: '/project',
      name: 'project',
      // route level code-splitting
      // this generates a separate chunk (Réalisation.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RealisationView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (Contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router

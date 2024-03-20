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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/actief',
      name: 'actief',
      component: () => import('../views/ActiefView.vue')
    },
    {
      path: '/zoek',
      name: 'zoek',
      component: () => import('../views/ZoekView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue')
    },
    {
      path: '/toegewezen',
      name: 'toegewezen',
      component: () => import('../views/ToegewezenView.vue')
    },
    {
      path: '/uitgevoerd',
      name: 'uitgevoerd',
      component: () => import('../views/UitgevoerdView.vue')
    },
    {
      path: '/documentatie',
      name: 'documentatie',
      component: () => import('../views/DocumentatieView.vue')
    }
  ]
})

export default router

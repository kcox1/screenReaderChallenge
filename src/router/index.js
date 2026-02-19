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
      path: '/launch-control-dashboard',
      name: 'launch control dashboard',
      component: () => import('../views/LaunchControlView.vue')
    },
    {
      path: '/manual-control',
      name: 'manual control',
      component: () => import('../views/ManualControlView.vue')
    },
    {
      path: '/code-book',
      name: 'code book',
      component: () => import('../views/CodeBookView.vue')
    },
    {
      path: '/rocket-models',
      name: 'rocket models',
      component: () => import('../views/RocketModelsView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/win',
      name: 'win',
      component: () => import('../views/WinView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
  ]
})

export default router

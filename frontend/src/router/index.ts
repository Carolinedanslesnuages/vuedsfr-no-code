import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/AppHome.vue'
import AboutUs from '../views/AboutUs.vue'
import EditorView from '../views/EditorView.vue'

const MAIN_TITLE = 'Gabarit de démarrage VueDsfr'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/a-propos',
    name: 'About',
    component: AboutUs,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: EditorView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL || ''),
  routes,
})

router.beforeEach((to) => {
  const specificTitle = to.meta.title ? `${to.meta.title} - ` : ''
  document.title = `${specificTitle}${MAIN_TITLE}`
})

export default router
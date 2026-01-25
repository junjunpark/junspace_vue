// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/layout/Layout.vue'
import Work from '@/components/pages/Work.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  }
]

const router = createRouter({
  history: createWebHashHistory('/junspace_vue/'),
  routes
})

export default router

// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory('/junspace_vue/'), // 베이스 경로 추가
  routes
})

export default router

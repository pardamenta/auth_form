import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import { Login, Register } from '@/views'

const route = [
  {
    path: '/', component: Home
  },
  { path: '/login', component: Login},
  { path: '/register', component: Register}
]
const router = createRouter({
  history: createWebHistory(),
  routes: route
})

export default router

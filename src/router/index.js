import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvoicesView from '../views/InvoicesView.vue'
import PdfsView from "@/views/PdfsView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: InvoicesView
    },
    {
      path: '/pdfs',
      name: 'pdfs',
      component: PdfsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router

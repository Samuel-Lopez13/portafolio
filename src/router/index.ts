import { createRouter, createWebHistory } from 'vue-router'
import LayoutPrincipal from "@/views/Layout/LayoutPrincipal.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutPrincipal,
      redirect: { name: 'inicio' },
      children: [
        {
          path: '/inicio',
          name: 'inicio',
          component: Home,
        }
      ]
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import LayoutPrincipal from "@/views/Layout/LayoutPrincipal.vue";
import Home from "@/views/Home.vue";
import Studies from "@/views/Studies.vue";
import Project from "@/views/Project.vue";
import ContactMe from "@/views/ContactMe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutPrincipal,
      redirect: { name: 'home' },
      children: [
        {
          path: '/inicio',
          name: 'home',
          component: Home,
        },
        {
          path: '/estudios',
          name: 'studies',
          component: Studies,
        },
        {
          path: '/Proyectos',
          name: 'projects',
          component: Project,
        },
        {
          path: '/Contactame',
          name: 'contactme',
          component: ContactMe,
        }
      ]
    },
  ]
})

export default router

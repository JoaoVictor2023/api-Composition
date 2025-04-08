import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue' // déclaration tout en haut pour éviter des répétition dans le code plus tard

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // indique l'itinéraire réel
      name: 'home', // nous permet de donner un nom à cette route
      component: EventListView, // nous permet de spécifier le composant à rendre sur cette route
    },
    {
      path: '/about', // le composant "About" est affiché
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

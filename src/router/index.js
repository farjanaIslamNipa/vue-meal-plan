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
      path: '/search-by-name/:name?',
      name: 'byName',
      component: () => import('../views/MealsByName.vue')
    },
    {
      path: '/search-by-letter/:letter?',
      name: 'byLetter',
      component: () => import('../views/MealsByLetter.vue')
    },
    {
      path: '/search-by-ingredients/:ingredients?',
      name: 'byIngredients',
      component: () => import('../views/MealsByIngredients.vue')
    },
    {
      path: '/all-cars',
      name: 'allCars',
      component: () => import('../views/AllCars.vue')
    },
    {
      path: '/car/:id',
      name: 'carDetails',
      component: () => import('../views/CarDetails.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue'),
      meta: {
        hideNavbar: true
      }
    }
  ]
})

export default router

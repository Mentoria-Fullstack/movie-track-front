import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SigninView from '../views/SigninView.vue'
import TvShowsView from '../views/TvShowsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/tvshows',
      name: 'tvshows',
      component: TvShowsView
    }
  ]
})

export default router

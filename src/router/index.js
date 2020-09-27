import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../components/Search.vue'
import Favorites from '../components/Favorites.vue'
import E404 from  '../components/E404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'Search'
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path:'*',
    name: 'E404',
    component: E404
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

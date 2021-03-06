import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pageunderconstruction from '../components/Pageunderconstruction.vue'
import Starterpage from '../components/Starterpage.vue'
import Notfoundpage from '../components/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'Notfoundpage',
    component: Notfoundpage
  },
  {
    path: '/',
    name: 'Starterpage',
    component: Starterpage
  },
  {
    path: '/Pageunderconstruction',
    name: 'Pageunderconstruction',
    component: Pageunderconstruction
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

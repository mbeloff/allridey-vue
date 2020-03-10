import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quote from '../views/Quote.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/agents', component: Home, alias: '/' },
  {
    path: '/quote',
    name: 'Quote',
    component: Quote
  },
  {
    path: '/:country',
    name: 'Country',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Country.vue')
  }
]

// router.afterEach(() => {
//   window.scrollTo(0, 0)
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

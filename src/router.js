import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./components/StartTheGame.vue'),
  },
  {
    path: '/home',
    component: () => import('./components/Home.vue'),
    children: [ 
          { path: '/', component: () => import('./components/Choices.vue') },
          { path: '/investigation', component: () => import('./components/Investigation.vue') },
          { path: '/messages', component: () => import('./components/Messages.vue') },
          { path: '/message/:adId', name: 'message', component: () => import('./components/Message.vue') },
          { path: '/shop', component: () => import('./components/Shop.vue') },
          { path: '/item/:id', name: 'item', component: () => import('./components/Item.vue') },
         ]

  },
]

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
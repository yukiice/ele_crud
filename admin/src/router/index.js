import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: "Main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        path:'/home',
        component:()=>{'../views/Home.vue'}
      },
      {
      path: '/category/create',
      component: () => import('../views/CategoryEdit.vue')
    },
  {
    path:'/category/list',
    component:()=>import ('../views/CategoryList.vue')
  }
  ]
  },

]

const router = new VueRouter({
  routes
})

export default router
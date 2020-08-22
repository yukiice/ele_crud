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
      path: '/categories/create',
      component: () => import('../views/CategoryEdit.vue')
    },
    {
      path: '/categories/edit/:id',
      component: () => import('../views/CategoryEdit.vue'),
      // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
      props:true
    },
  {
    path:'/categories/list',
    component:()=>import ('../views/CategoryList.vue')
  }
  ]
  },

]

const router = new VueRouter({
  routes
})

export default router
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
        redirect: '/home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Main.vue'),
        children: [{
                path: '/home',
                component: () =>
                    import ('../views/Home.vue')

            },
            {
                path: '/categories/create',
                component: () =>
                    import ('../views/CategoryEdit.vue')
            },
            {
                path: '/categories/edit/:id',
                component: () =>
                    import ('../views/CategoryEdit.vue'),
                // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
                props: true
            },
            {
                path: '/categories/list',
                component: () =>
                    import ('../views/CategoryList.vue')
            },


            // Item ------------------------------
            {
                path: '/items/create',
                component: () =>
                    import ('../views/ItemEdit.vue')
            },
            {
                path: '/items/edit/:id',
                component: () =>
                    import ('../views/ItemEdit.vue'),
                // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
                props: true
            },
            {
                path: '/items/list',
                component: () =>
                    import ('../views/ItemList.vue')
            },

            // heros ------------------------------
            {
                path: '/heros/create',
                component: () =>
                    import ('../views/HeroEdit.vue')
            },
            {
                path: '/heros/edit/:id',
                component: () =>
                    import ('../views/HeroEdit.vue'),
                // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
                props: true
            },
            {
                path: '/heros/list',
                component: () =>
                    import ('../views/HeroList.vue')
            },

            // article  ----------------------------------------------
            {
                path: '/articles/create',
                component: () =>
                    import ('../views/ArticleEdit.vue')
            },
            {
                path: '/articles/edit/:id',
                component: () =>
                    import ('../views/ArticleEdit.vue'),
                // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
                props: true
            },
            {
                path: '/articles/list',
                component: () =>
                    import ('../views/ArticleList.vue')
            },

            // ad ---------------------------------------------------------
            {
                path: '/ads/create',
                component: () =>
                    import ('../views/AdEdit.vue')
            },
            {
                path: '/ads/edit/:id',
                component: () =>
                    import ('../views/AdEdit.vue'),
                // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
                props: true
            },
            {
                path: '/ads/list',
                component: () =>
                    import ('../views/AdList.vue')
            },

        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
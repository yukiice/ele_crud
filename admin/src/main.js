import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import './plugins/element.js'
import http from './utils/axios'
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
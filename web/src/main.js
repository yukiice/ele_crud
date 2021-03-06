import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import store from './store'
import vuetify from './plugins/vuetify';
import Vant from 'vant';
import 'vant/lib/index.css';

import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
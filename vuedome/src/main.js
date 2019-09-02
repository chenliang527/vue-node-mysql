// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
import axios from '../node_modules/axios'

Vue.prototype.$http = axios

// Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

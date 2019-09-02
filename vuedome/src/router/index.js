import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home'
import about from '../view/about'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:
    [
      {path: '/home', name: 'home',component: home },
      {path: '/about', name: 'about', component: about},
  ]
})

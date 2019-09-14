// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import global from './global'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible'

Vue.config.productionTip = false
Vue.prototype.Global = global
Vue.prototype.$http = axios
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

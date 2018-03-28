// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
import store from './store'
import VueLazyload from 'vue-lazyload'
import YDUI from 'vue-ydui'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.base.css'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 1000000
fastclick.attach(document.body)
Vue.prototype.axios = axios
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading
}

Vue.use(VueLazyload, {
  loading: require('@/assets/logo.png')
})

Vue.use(YDUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

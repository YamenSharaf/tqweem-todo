// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueTyperPlugin from 'vue-typer'
import Toast from 'vue-easy-toast'
var VueResource = require('vue-resource')
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueTyperPlugin)
Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Core Vue.js
import Vue from 'vue'
// For material components
import KeenUI from 'keen-ui'
// For typing effect
import VueTyperPlugin from 'vue-typer'
// For toast messages
import Toast from 'vue-easy-toast'
// Main app code
import App from './App'
// Vue routing
import router from './router'

Vue.config.productionTip = false

// Used plugins
Vue.use(KeenUI)
Vue.use(VueTyperPlugin)
Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import KeenUI from 'keen-ui'
import VueTyperPlugin from 'vue-typer'
import Toast from 'vue-easy-toast'
import App from './App'
import router from './router'

Vue.config.productionTip = false

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


import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(VueLazyload, {
    loading: require('./common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

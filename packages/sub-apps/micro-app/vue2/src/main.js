import './public-path'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'micro-app',
]

new Vue({
  render: h => h(App),
}).$mount('#app')

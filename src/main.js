import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import axios from 'axios'
import echarts from 'echarts'
import './plugins/element.js'

Vue.config.productionTip = false

// Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://192.168.3.33:8088'

Vue.use(BaiduMap, {
  ak: 'N7YmCegdP5yeKl1IWukifknWQGvQOpv2'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

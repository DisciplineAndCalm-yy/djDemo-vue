// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from './utils'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/swipe/style.css'
import 'mint-ui/lib/button/style.css'
import 'mint-ui/lib/toast/style.css'

import store from './store'

Vue.prototype.$axios = $axios

Vue.use(Mint);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

// Axios.defaults.headers.common['Authentication-Token'] = store.state.token

// Axios.interceptors.request.use(config => {
//   if(store.state.token) {
//     config.headers.common['Authentication-Token'] = store.state.token
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// Axios.interceptors.response.use(
//   response => {
//     return response
//   }, error => {
//     if(error.response) {
//       switch(error.response.status) {
//         case 401: 
//             this.$store.commit('del_token')
//             router.replace({
//               path: '/login',
//               query: {redirect: router.currentRoute.fullPath}
//             })
//       }
//     }
//     return Promise.reject(error.response.data)
//   }
// )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

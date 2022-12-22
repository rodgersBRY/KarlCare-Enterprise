import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'

Vue.config.productionTip = false

Vue.component('navbar', Navbar)
Vue.component('main-footer', Footer)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

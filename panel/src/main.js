import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.config.productionTip = false

//Para usar la url servidor
Vue.prototype.$url = 'http://localhost:4200/api';

//Para obtener el token de acceso
Vue.prototype.$token = localStorage.getItem('token');

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

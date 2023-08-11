import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
//Para usar la url servidor
Vue.prototype.$url = 'http://localhost:4200/api';

//Para obtener el token de acceso
Vue.prototype.$token = localStorage.getItem('token');
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

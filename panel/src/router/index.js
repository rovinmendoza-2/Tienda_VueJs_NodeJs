import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';
import jwt_decode from 'jwt-decode';

import DashboardPage from '../views/DashboardPage.vue'
import LoginApp from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterCollaborator/RegisterPage.vue';
import IndexCollaboratorPage from '../views/RegisterCollaborator/IndexCollaboratorPage.vue';
import EditUserPage from '../views/RegisterCollaborator/EditUserPage.vue';
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginApp, meta: { requiresAuth: false }},
  { path: '/collaborator_index', name: 'index', component: IndexCollaboratorPage, meta: { requiresAuth: true }},
  { path: '/register_admin', name: 'register', component: RegisterPage, meta: { requiresAuth: true }},
  { path: '/user/edit/:id', name: 'edit', component: EditUserPage, meta: { requiresAuth: true }},
  { path: '/dashboard', name: 'dashboard', component: DashboardPage, meta: { requiresAuth: true }},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  //Validacion de rutas privadas
  if(to.matched.some(item => item.meta.requiresAuth)){
    if(!store.state.token){
      next({
        name: 'login'
      });
    }
    try {
      jwt_decode(store.state.token)
    } catch (error) {
      next({
        name: 'login'
      });
    }
    //Validacion si expira el token
    if(jwt_decode(store.state.token).exp*1000 <= new Date().getTime()){
      next({
        name: 'login'
      });
    }
    next();
    console.log(jwt_decode(store.state.token));
    console.log('privada');
  }else{
    console.log('publica');
    next();
  }
  console.log(to);
  console.log(from);
  
})

export default router

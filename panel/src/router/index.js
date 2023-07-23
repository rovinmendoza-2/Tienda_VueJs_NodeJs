import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterCollaborator/RegisterPage.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginApp},
  { path: '/collaborator/register', name: 'register', component: RegisterPage},
  { path: '/', name: 'home', component: HomeView},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

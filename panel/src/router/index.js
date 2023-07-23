import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterCollaborator/RegisterPage.vue';
import IndexCollaboratorPage from '../views/RegisterCollaborator/IndexCollaboratorPage.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginApp},
  { path: '/collaborator_index', name: 'index', component: IndexCollaboratorPage},
  { path: '/register_admin', name: 'register', component: RegisterPage},
  { path: '/', name: 'home', component: HomeView},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

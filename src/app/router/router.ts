import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import HomePage from "../../pages/homePage/HomePage.vue";
import LoginPage from "../../pages/loginPage/LoginPage.vue";
import SignUpPage from "../../pages/signUpPage/SignUpPage.vue";
import VerificationPage from "../../pages/verificationPage/VerificationPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage
  }, {
    path: '/login',
    component: LoginPage
  }, {
    path: '/signup',
    component: SignUpPage
  }, {
    path: '/verify',
    component: VerificationPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

});

export default router;
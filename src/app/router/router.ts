import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import HomePage from "../../pages/homePage/HomePage.vue";
import LoginPage from "../../pages/loginPage/ui/LoginPage.vue";
import SignUpPage from "../../pages/signUpPage/ui/SignUpPage.vue";
import VerificationPage from "../../pages/verificationPage/ui/VerificationPage.vue";
import RegistrationPage from "../../pages/registrationPage/ui/RegistrationPage.vue";
import {RoutePath} from "@/shared/model/router/routerPaths.ts";
import {account} from "@/shared/appWrite/appwrite.ts";


const routes: RouteRecordRaw[] = [
  {
    path: RoutePath.home,
    component: HomePage
  }, {
    path: RoutePath.login,
    component: LoginPage
  }, {
    path: RoutePath.signUp,
    component: SignUpPage
  },
  {
    path: RoutePath.verification,
    component: VerificationPage
  },
  {
    path: RoutePath.registration,
    component: RegistrationPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let isAuth: boolean = false;

router.beforeEach(async (to) => {
  try {


    if (to.path === RoutePath.login) {
      return true
    }
    if (to.path === RoutePath.signUp) {
      return true
    }
    if (to.path === RoutePath.verification) {
      return true
    }
    if (to.path === RoutePath.registration) {
      return true
    }
    if (isAuth) {
      return true
    }
    const res = await account.get()

    // if (res.code === 401) {
    //   return router.push(RoutePath.signUp)
    // }
    if (res.emailVerification) {
      isAuth = true
      return true
    }

    if (!isAuth) {
      return await router.push(RoutePath.signUp)
    }
  } catch (e: unknown) {
    // if (e?.code === 401) {
    //   await router.push(RoutePath.login)
    // }
  }
})
export default router;
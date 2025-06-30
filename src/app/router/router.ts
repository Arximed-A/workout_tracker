import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import HomePage from "../../pages/homePage/HomePage.vue";
import LoginPage from "../../pages/loginPage/ui/LoginPage.vue";
import SignUpPage from "../../pages/signUpPage/ui/SignUpPage.vue";
import VerificationPage from "../../pages/verificationPage/ui/VerificationPage.vue";
import RegistrationPage from "../../pages/registrationPage/ui/RegistrationPage.vue";
import {RoutePath} from "@/shared/model/router/routerPaths.ts";
import {account, databases} from "@/shared/appWrite/appwrite.ts";
import {type Models} from 'appwrite';
import RecoveryPasswordPage from "../../pages/recoveryPasswordPage/ui/RecoveryPasswordPage.vue";
import {AppwriteException} from 'appwrite';
import {collectionsId, DBID} from "@/shared/appWrite/settings.ts";
import {useUserStore} from "@/shared/store/userStore.ts";

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
  },
  {
    path: RoutePath.recoveryPassword,
    component: RecoveryPasswordPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.PROD ? 'workout_tracker' : ''),
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
    if (to.path === RoutePath.recoveryPassword) {
      return true
    }
    if (isAuth) {
      return true
    }
    const {$id, emailVerification}: Models.User<Models.Preferences> = await account.get()

    if (emailVerification) {
      const userStore = useUserStore()
      //TODO продумать
      const {
        email,
        weight,
        avatar,
        birthday,
        first_name,
        height,
        second_name
      } = await databases.getDocument(DBID, collectionsId.users, $id)
      userStore.user = {
        $id,
        email,
        weight,
        avatar,
        birthday,
        first_name,
        height,
        second_name
      }
      isAuth = true
      return true
    }

    if (!isAuth) {
      return await router.push(RoutePath.login)
    }
  } catch (e: unknown) {
    if (e instanceof AppwriteException && e.code === 401) {
      await router.push(RoutePath.login)
    }
  }
})
export default router;
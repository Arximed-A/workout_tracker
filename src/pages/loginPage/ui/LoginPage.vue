<script setup lang="ts">
import {reactive} from "vue";
import type {ILoginForm} from "@/pages/loginPage/model/types/typesLoginPage.ts";
import {account} from '@/shared/appWrite/appwrite.ts'
import ButtonBase from "@/shared/ui/buttonBase/ButtonBase.vue";
import InputBase from "@/shared/ui/inputBase/InputBase.vue";
import LabelBase from "@/shared/ui/labelBase/LabelBase.vue";
import WrapperBase from "@/shared/ui/wrapperBase/WrapperBase.vue";
import FullScreenWrapper from "@/shared/ui/fullScreenWrapper/FullScreenWrapper.vue";
import {RoutePath} from "@/shared/model/router/routerPaths.ts";
import LinkBase from "@/shared/ui/LinkBase/LinkBase.vue";
import TextBase from "@/shared/ui/textBase/TextBase.vue";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const router = useRouter()
const form = reactive<ILoginForm>({
  email: '',
  password: ''
})
// const isLoading = ref<boolean>(false)

const login = async () => {
  try {
    await account.createEmailPasswordSession(form.email, form.password)
    await router.push(RoutePath.home)
  } catch (e) {
    console.log(e)
  }
}


</script>

<template>
  <FullScreenWrapper>
    <WrapperBase>
      <TextBase :text="t('вход')" size="large"/>
      <LabelBase text="Логин">
        <InputBase v-model="form.email"/>
      </LabelBase>
      <LabelBase text="Пароль">
        <InputBase v-model="form.password"/>
      </LabelBase>
      <ButtonBase text="Отправить" @click.prevent="login" class="mb-6"/>
      <div class="flex justify-between">
        <LinkBase :text="t('нет аккаута') + '?'" :to="RoutePath.signUp"/>
        <LinkBase :text="t('забыли пароль') + '?'" :to="RoutePath.recoveryPassword"/>
      </div>
    </WrapperBase>
  </FullScreenWrapper>
</template>

<style scoped>

</style>
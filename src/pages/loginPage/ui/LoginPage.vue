<script setup lang="ts">
import {reactive} from "vue";
import type {ILoginForm} from "@/pages/loginPage/model/types/typesLoginPage.ts";
import {databases} from '@/shared/appWrite/appwrite.ts'
import ButtonBase from "@/shared/ui/base/buttonBase/ButtonBase.vue";
import InputBase from "@/shared/ui/base/inputBase/InputBase.vue";
import LabelBase from "@/shared/ui/base/labelBase/LabelBase.vue";
import WrapperBase from "@/shared/ui/base/wrapperBase/WrapperBase.vue";
import FullScreenWrapper from "@/shared/ui/base/fullScreenWrapper/FullScreenWrapper.vue";
import {RoutePath} from "@/shared/model/router/routerPaths.ts";
import LinkBase from "@/shared/ui/base/LinkBase/LinkBase.vue";

// const router = useRouter()
const form = reactive<ILoginForm>({
  login: 'Drunka-3@yandex.ru',
  password: '12345678'
})
// const isLoading = ref<boolean>(false)

const getData = async () => {
  const result = await databases.listDocuments(
    '6847eb1a003d58309fb8',
    '6847eb6b0015329de093',
  );
  console.log(result);
}


</script>

<template>
  <FullScreenWrapper>
    <WrapperBase>
      <LabelBase text="Логин">
        <InputBase v-model="form.login"/>
      </LabelBase>
      <LabelBase text="Пароль">
        <InputBase v-model="form.password"/>
      </LabelBase>
      <ButtonBase text="Отправить" @click.prevent="getData" class="mb-6"/>
      <div class="flex justify-between">
        <LinkBase text="Нет аккаута?" :to="RoutePath.signUp"/>
        <LinkBase text="Забыли пароль?" :to="RoutePath.signUp"/>
      </div>
    </WrapperBase>
  </FullScreenWrapper>
</template>

<style scoped>

</style>
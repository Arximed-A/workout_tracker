<script setup lang="ts">
import {reactive, ref} from "vue";
import type {ISignUp} from "@/pages/signUpPage/model/types/typesSignUp.ts";
import FullScreenWrapper from "@/shared/ui/fullScreenWrapper/FullScreenWrapper.vue";
import WrapperBase from "@/shared/ui/wrapperBase/WrapperBase.vue";
import LabelBase from "@/shared/ui/labelBase/LabelBase.vue";
import InputBase from "@/shared/ui/inputBase/InputBase.vue";
import ButtonBase from "@/shared/ui/buttonBase/ButtonBase.vue";
import {ID} from "appwrite";
import {ElMessage} from "element-plus";
import {fetchSignUp, fetchVerifyEmail} from "@/pages/signUpPage/api/apiSignUp.ts";
import TextBase from "@/shared/ui/textBase/TextBase.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const form = reactive<ISignUp>({
  email: '',
  password: ''
})

const isLoading = ref<boolean>(false)
const isWaitingConfirm = ref<boolean>(true);

async function sendForm(): Promise<void> {

  isLoading.value = true
  try {
    await fetchSignUp(ID.unique(), form.email, form.password)
    await fetchVerifyEmail()
    isWaitingConfirm.value = true
    ElMessage({
      type: "success",
      message: t('проверь почту, письмо может идти долго')
    })
  } catch (e: Error | unknown) {
    if (e instanceof Error) {
      console.log(e.message)
    }
    ElMessage({
      type: "error",
      message: t('ошибка')
    })
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
  <FullScreenWrapper>
    <WrapperBase>
      <TextBase text="Регистрация" size="large"/>
      <LabelBase text="Логин">
        <InputBase
          v-model="form.email"
          :disabled="isLoading"
        />
      </LabelBase>
      <LabelBase text="Пароль">
        <InputBase
          v-model="form.password"
          :disabled="isLoading"
        />
      </LabelBase>
      <ButtonBase
        :loading="isLoading"
        text="Зарегистрироваться"
        @click.prevent="sendForm"
      />
      <div>
        <ButtonBase
          v-if="isWaitingConfirm"
          class="w-full"
          :loading="isLoading"
          text="Отправить ещё раз"
          @click.prevent="fetchVerifyEmail"
        />
      </div>

    </WrapperBase>
  </FullScreenWrapper>

</template>

<style scoped>

</style>
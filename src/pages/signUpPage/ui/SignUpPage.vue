<script setup lang="ts">
import {reactive, ref} from "vue";
import type {ISignUp} from "@/pages/signUpPage/model/types/typesSignUp.ts";
import FullScreenWrapper from "@/shared/ui/base/fullScreenWrapper/FullScreenWrapper.vue";
import WrapperBase from "@/shared/ui/base/wrapperBase/WrapperBase.vue";
import LabelBase from "@/shared/ui/base/labelBase/LabelBase.vue";
import InputBase from "@/shared/ui/base/inputBase/InputBase.vue";
import ButtonBase from "@/shared/ui/base/buttonBase/ButtonBase.vue";
import {ID} from "appwrite";
import {ElMessage} from "element-plus";
import {fetchSignUp, fetchVerifyEmail} from "@/pages/signUpPage/api/apiSignUp.ts";
import TextBase from "@/shared/ui/base/textBase/TextBase.vue";


const form = reactive<ISignUp>({
  email: 'Drunka-3@yandex.ru',
  password: '12345678'
})
// const amountKey: string = "enterAmount";
// const dateKey: string = "enterDate";

const isLoading = ref<boolean>(false)
const isWaitingCode = ref<boolean>(false);
// const timerCounter = ref<number>(10);
// const timerId = ref<ReturnType<typeof setInterval>>();
// const timerExpired = ref<boolean>(true);

async function sendForm(): Promise<void> {

  isLoading.value = true
  try {
    await fetchSignUp(ID.unique(), form.email, form.password)
    await fetchVerifyEmail()
    ElMessage({
      type: "success",
      message: 'Проверь почту'
    })
  } catch (e: Error | unknown) {
    if (e instanceof Error) {
      console.log(e.message)
    }
    ElMessage({
      type: "error",
      message: 'Ошибка'
    })
  } finally {
    isLoading.value = false
    isWaitingCode.value = true
  }
}

// function getEnterAmount(): number {
//   return Number(localStorage.getItem(amountKey) || 0);
// }
//
// function calcTimer(amount: number): number {
//   return 60 * Math.pow(2, amount - 1);
// }
//
// function checkTimerExpired(): void {
//   // Получаем время начала таймера из localStorage
//   const pastDateString: string | null = localStorage.getItem(dateKey);
//   if (!pastDateString) return; // Если время не сохранено, выходим
//
//   // Преобразуем строку в объект Date
//   const pastDate: Date = new Date(pastDateString);
//   const nowDate: Date = new Date();
//
//   // Вычисляем разницу между текущим временем и временем начала таймера (в миллисекундах)
//   const diffDate: number = Math.round(
//     (nowDate.getTime() - pastDate.getTime()) / 1000,
//   );
//   // Получаем длительность таймера (в миллисекундах)
//   const amount: number = getEnterAmount();
//   const timerDuration: number = calcTimer(amount);
//
//   // Проверяем, истек ли таймер
//   if (diffDate >= timerDuration) {
//     // Таймер истек
//
//     timerExpired.value = true;
//     isWaitingCode.value = false; // Пользователь дождался завершения таймера
//   } else {
//     timerExpired.value = false;
//     isWaitingCode.value = true; // Пользователь все еще ждет
//     // timerCounter.value = timerDuration - diffDate; // Обновляем оставшееся время
//     createTimer(timerDuration - diffDate);
//   }
// }
//
// function createTimer(time?: number) {
//   clearInterval(timerId.value);
//   const amount: number = getEnterAmount() || 1;
//   timerCounter.value = time || calcTimer(amount);
//   timerExpired.value = false;
//   timerId.value = setInterval(() => {
//     if (timerCounter.value > 0) {
//       timerCounter.value -= 1;
//     } else {
//       clearTimer();
//     }
//   }, 1000);
// }
//
// function clearTimer() {
//   clearInterval(timerId.value);
//   timerExpired.value = true;
// }
//
// const timerLeft = computed<string>(() => {
//   if (!form.code) {
//     if (timerCounter.value > 0) {
//       // Преобразуем секунды в минуты и секунды
//       const minutes = Math.floor(timerCounter.value / 60); // Получаем минуты
//       const seconds = timerCounter.value % 60; // Получаем оставшиеся секунды
//
//       // Форматируем минуты и секунды, чтобы всегда было два символа
//       const formattedMinutes = String(minutes).padStart(2, "0");
//       const formattedSeconds = String(seconds).padStart(2, "0");
//
//       return `${formattedMinutes}:${formattedSeconds}`;
//     } else {
//       return "";
//     }
//   } else {
//     return "Ok";
//   }
// });
// onMounted(() => {
//   checkTimerExpired();
// })
// onUnmounted(() => {
//   clearTimer();
// });
</script>

<template>
  <FullScreenWrapper>
    <WrapperBase>
      <TextBase text="Регистрация"/>
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
      <!--      <div>-->
      <!--        <ButtonBase-->
      <!--          v-if="isWaitingCode"-->
      <!--          class="w-full"-->
      <!--          :loading="isLoading"-->
      <!--          :text=" timerLeft  || 'Отправить ещё раз'"-->
      <!--          @click.prevent="fetchVerifyEmail"-->
      <!--        />-->
      <!--      </div>-->

    </WrapperBase>
  </FullScreenWrapper>

</template>

<style scoped>

</style>
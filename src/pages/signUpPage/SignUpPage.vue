<script setup lang="ts">
import {reactive, ref} from "vue";
import {ID} from "appwrite";
import {account} from '@/shared/appWrite/appwrite'
import type {ISignUp} from "@/pages/signUpPage/model/types/typesSignUp.ts";


const form = reactive<ISignUp>({
  email: 'Drunka-3@yandex.ru',
  password: '12345678'
})

const isLoading = ref<boolean>(false)

async function sendForm() {
  isLoading.value = true
  try {
    const response = await account.create(ID.unique(), form.email, form.password);
    await account.createEmailPasswordSession(form.email, form.password);
    await account.createVerification('http://localhost:5173/verify');
    console.log(response)
  } catch (e: Error | unknown) {
    if (e instanceof Error) {
      console.log(e.message)
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <h1 class="text-2xl">Регистрация</h1>
  <form @submit.prevent="sendForm" class="mt-2 ml-2 text-center  w-50 bg-gray-200">
    <label>
      email
      <input type="email" class="border-2 w-full" v-model="form.email">
    </label>
    <label>
      password
      <input type="password" class="border-2 w-full mb-2" v-model="form.password">
    </label>
    <button class="bg-teal-800 p-2 text-white radial-3 rounded-xs">Зарегистрироваться</button>
  </form>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {reactive} from "vue";
import type {ILoginForm} from "@/pages/loginPage/model/types/typesLoginPage.ts";

import {databases} from '@/shared/appWrite/appwrite'  
import ButtonBase from "@/shared/ui/base/buttonBase/ButtonBase.vue";
import InputBase from "@/shared/ui/base/inputBase/InputBase.vue";

const form = reactive<ILoginForm>({
  login: 'Drunka-3@yandex.ru',
  password: '12345678'
})


const getData = async () => {
  const result = await databases.listDocuments(
    '6847eb1a003d58309fb8', // databaseId
    '6847eb6b0015329de093', // collectionId
  );

  console.log(result);
}


</script>

<template>
  <form @submit.prevent="() =>{}"
        class="mt-2 ml-2 text-center flex flex-col gap-2  w-50 bg-gray-200">
    <label>
      login
      <InputBase v-model="form.login"/>
    </label>
    <label>
      password
      <InputBase v-model="form.password"/>
    </label>

    <ButtonBase @click.prevent="getData">log in</ButtonBase>
  </form>
</template>

<style scoped>

</style>
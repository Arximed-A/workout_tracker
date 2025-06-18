<script setup lang="ts">
import {useUserStore} from "@/shared/store/userStore.ts";
import {useI18n} from "vue-i18n";

const userStore = useUserStore()
const {locale} = useI18n()

function changeLanguage() {
  userStore.language = userStore.language === 'ru' ? 'en' : 'ru'
  locale.value = userStore.language
}
</script>

<template>
  <el-button @click="changeLanguage">
    {{ userStore.language }}
  </el-button>
</template>

<style scoped>

</style>
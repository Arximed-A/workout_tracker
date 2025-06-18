<script setup lang="ts">
import {useI18n} from "vue-i18n";


const {t} = useI18n()
defineProps<{
  text: string,
  to: string
}>()
</script>

<template>
  <router-link :to="to">
    <el-link>{{ t(text) }}</el-link>
  </router-link>
</template>

<style scoped>

</style>
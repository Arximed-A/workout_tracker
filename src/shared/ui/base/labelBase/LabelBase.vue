<script setup lang="ts">
import {useI18n} from 'vue-i18n'

const {t} = useI18n()

defineProps<{
  text: string
}>()


</script>

<template>
  <el-text tag="h4">
    {{ t(text) }}
  </el-text>
  <slot/>

</template>

<style scoped>

</style>
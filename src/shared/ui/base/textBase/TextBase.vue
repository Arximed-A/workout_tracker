<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
withDefaults(defineProps<{ text: string, tag?: string }>(), {
  tag: 'span'
})
</script>

<template>
  <el-text :tag="tag">{{ t(text) }}</el-text>
</template>

<style scoped>

</style>
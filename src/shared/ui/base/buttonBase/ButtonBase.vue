<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
withDefaults(defineProps<{
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | '',
  disabled?: boolean
  loading?: boolean
  text: string
}>(), {
  type: 'primary',
  disabled: false,
  loading: false
})
</script>

<template>
  <el-button
    :type="type"
    :disabled="disabled"
    :loading="loading"
  >
    {{ t(text) }}
  </el-button>
</template>

<style scoped>

</style>
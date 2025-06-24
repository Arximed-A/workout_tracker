<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const {t} = useI18n()
const props = withDefaults(defineProps<{
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | '',
  disabled?: boolean
  loading?: boolean
  text?: string
}>(), {
  type: 'primary',
  disabled: false,
  loading: false
})

const text = computed(() => {
  return props.text ? props.text : t("отправить")
})
</script>

<template>
  <el-button
    :type="type"
    :disabled="disabled"
    :loading="loading"
  >
    {{ (text) }}
  </el-button>
</template>

<style scoped>

</style>
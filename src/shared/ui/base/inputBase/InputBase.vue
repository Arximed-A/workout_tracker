<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()

withDefaults(defineProps<{
  disabled?: boolean
  placeholder?: string
}>(), {
  disabled: false,
  placeholder: 'Введите текст'
})

const value = defineModel<string>({required: true})


</script>
<template>
  <el-input
    v-model="value"
    :disabled="disabled"
    :placeholder="t(placeholder)"
  />
</template>
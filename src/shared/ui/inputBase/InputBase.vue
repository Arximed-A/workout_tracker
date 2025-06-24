<script setup lang="ts">
import {computed} from "vue"
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const props = withDefaults(defineProps<{
  disabled?: boolean
  placeholder?: string
  type?: 'text' | 'number'
}>(), {
  disabled: false,
  type: 'text'
})

const value = defineModel<string | number>({required: true})
const placeholder = computed(() => {
  return props.placeholder ? props.placeholder : t("введите текст")
})

</script>
<template>
  <el-input
    v-model="value"
    :disabled="disabled"
    :placeholder="placeholder"
    :type="type"
  />
</template>
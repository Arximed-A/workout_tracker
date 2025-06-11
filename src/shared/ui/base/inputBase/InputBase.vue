<script setup lang="ts">
import {ElInput} from 'element-plus';

withDefaults(defineProps<{
  disabled?: boolean
  placeholder?: string
}>(), {
  disabled: false,
  placeholder: 'текст'
})

const value = defineModel<string>({required: true})
</script>
<template>
  <el-input 
    v-model="value"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>
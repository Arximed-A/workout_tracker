<script setup lang="ts">
import {ElButton} from 'element-plus'


withDefaults(defineProps<{
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | '' ,
  disabled?: boolean
  loading?: boolean
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
    <slot />
  </el-button>
</template>

<style scoped>

</style>
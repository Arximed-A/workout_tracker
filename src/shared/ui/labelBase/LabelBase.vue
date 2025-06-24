<script setup lang="ts">

withDefaults(defineProps<{
    text: string
    required?: boolean
  }>(), {
    required: false
  }
)

</script>

<template>
  <el-text tag="h4" style="align-self: flex-start">
    {{ text }}
    <el-text type="danger" v-if="required">*</el-text>
  </el-text>
  <slot/>

</template>

<style scoped>

</style>
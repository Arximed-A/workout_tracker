<script setup lang="ts">

withDefaults(defineProps<{
  text: string,
  tag?: string
  size?: 'small' | 'default' | 'large'
}>(), {
  tag: 'span',
  size: 'small'
})
</script>

<template>
  <el-text :size="size" :tag="tag">{{ text }}</el-text>
</template>

<style scoped>

</style>
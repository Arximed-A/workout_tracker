<script setup lang="ts">

defineProps<{
  text: string,
  to: string
}>()
</script>

<template>
  <router-link :to="to">
    <el-link>{{ text }}</el-link>
  </router-link>
</template>

<style scoped>

</style>
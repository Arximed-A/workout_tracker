<script setup lang="ts">

</script>

<template>
  <div class="wrapper p-5 flex flex-col gap-2 rounded-2xl min-w-2xs">
    <slot/>
  </div>
</template>

<style scoped>
.wrapper {
  border: 1px solid var(--el-border-color);
}
</style>
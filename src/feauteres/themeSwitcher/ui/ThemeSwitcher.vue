<script setup lang="ts">
import {useDark, useToggle} from '@vueuse/core'
import {Moon, Sunny} from "@element-plus/icons-vue";

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <el-switch
    v-model="isDark"
    @change="toggleDark"
    :active-action-icon="Sunny"
    :inactive-action-icon="Moon"
  />
</template>

<style scoped>

</style>
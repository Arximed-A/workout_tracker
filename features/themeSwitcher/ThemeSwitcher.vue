<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue"
import { useDark, useToggle } from "@vueuse/core"
import { ref } from "vue"

const isDark = useDark()
const toggleDark = useToggle(isDark)

const value = ref<boolean>(true)
</script>

<template>
	<el-switch
		v-model="value"
		:active-action-icon="Sunny"
		:inactive-action-icon="Moon"
		@change="toggleDark()"
	/>
</template>

<style scoped>

</style>

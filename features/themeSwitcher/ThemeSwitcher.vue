<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
	<el-button type="primary" @click="toggleDark()">
		сменить тему
	</el-button>
</template>

<style scoped>

</style>

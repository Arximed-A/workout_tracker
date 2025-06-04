<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
useToggle(isDark)
</script>

<template>
	<button @click="isDark = !isDark">
		переключить тему
	</button>
</template>

<style scoped>

</style>

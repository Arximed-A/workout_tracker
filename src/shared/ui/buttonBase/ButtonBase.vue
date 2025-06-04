<script setup lang="ts">
import type { colorType } from "@/shared/variables/variables"

const props = withDefaults(defineProps<{ type?: keyof typeof colorType }>(), { type: "primary" })

function setType(): string {
	if (props.type === "primary")
		return "bg-primary"
}
</script>

<template>
	<button :class="setType()" class="rounded p-2 text-sm cursor-pointer">
		<slot />
	</button>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { useI18n } from "#imports"

type Input = "text" | "number" | "password"

const props = withDefaults(defineProps<{
	type?: Input
	error?: boolean
	placeholder?: string
}>(), {
	type: "text",
	error: false,
	placeholder: "Введите текст",
})

const { t } = useI18n()
const placeholder: string = t(props.placeholder)

const value = defineModel<string>()
</script>

<template>
	<input
		v-model="value"
		:placeholder="placeholder" :type
		class="block w-full rounded-md border px-3 py-2 placeholder-info shadow-sm focus:border-primary focus:outline focus:outline-primary sm:text-sm"
		:class="{ 'border-danger': error, 'border-info': !error }"
	>
</template>

<style scoped>

</style>

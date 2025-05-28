<script setup lang="ts">
import { useI18n } from "#imports"

const { locales, setLocale } = useI18n()
const { t } = useI18n()
</script>

<template>
	language
	<button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
		{{ locale.name }}
	</button>
	<h1>{{ t('welcome') }}</h1>
</template>

<style scoped>

</style>

import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	imports: {
		autoImport: false, // полностью отключает автоимпорт
	},
	i18n: {
		defaultLocale: "ru",
		locales: [
			{ code: "en", name: "English", file: "en.json" },
			{ code: "ru", name: "Русский", file: "ru.json" },
		],
	},
	modules: [
		"@nuxt/test-utils",
		"@nuxt/scripts",
		"@nuxt/eslint",
		"@element-plus/nuxt",
		"@nuxtjs/i18n",
	],
})

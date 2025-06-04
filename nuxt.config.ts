import tailwindcss from "@tailwindcss/vite"
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	imports: {
		autoImport: false, // полностью отключает автоимпорт
	},
	alias: {
		"@": "/src",
	},
	dir: {
		pages: "src/pages",
	},
	i18n: {
		defaultLocale: "ru",
		locales: [
			{ code: "en", name: "English", file: "en.json" },
			{ code: "ru", name: "Русский", file: "ru.json" },
		],
	},
	// css: ["@/assets/css/tailwind.css"],
	css: ["@/app/css/tailwind.css"],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	modules: [
		"@nuxt/test-utils",
		"@nuxt/scripts",
		"@nuxt/eslint",
		// "@element-plus/nuxt",
		"@nuxtjs/i18n",
		"@pinia/nuxt",
	],
})

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	// Your custom configs here
	{
		rules: {
			'vue/no-multiple-template-root': 'off' // отключает проверку
		},
		"object-curly-spacing": ["error", "always"],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				args: "all",
				argsIgnorePattern: "^_",
				caughtErrors: "all",
				caughtErrorsIgnorePattern: "^_",
				destructuredArrayIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-explicit-any": "error", //никаких any
		"@typescript-eslint/no-empty-object-type": "error", //везде типы обязательны
		"@typescript-eslint/no-unused-expressions": "error",
		"no-unused-expressions": "off",
		"@typescript-eslint/no-unsafe-function-type": "error",
		"i18next/no-literal-string": ["off", {mode: "jsx-text-only",}],//потом включить, сейчас что то опять глючит
		//vue
		"vue/require-v-for-key": ["off"],
		"vue/no-useless-template-attributes": ["off"],
		"vue/multi-word-component-names": ["off"],
		"vue/no-v-text-v-html-on-component": [
			"off",
			{allow: ["router-link", "nuxt-link"]},
		],
		"vue/no-unused-vars": [
			"off",
			{
				ignorePattern: "^_",
			},
		],
		"vue/no-mutating-props": [
			"off",
			{
				shallowOnly: false,
			},
		],
		//синтаксис
		quotes: ["error", "double", {"avoidEscape": true}],//кавычки
		"max-len": [
			"error",
			{
				code: 100,
				ignoreComments: true,
				ignoreTemplateLiterals: true,
				ignoreStrings: true,
			},
		],//длина строк
		indent: ["error", "tab"],//отступы
	}
)

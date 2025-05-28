import antfu from "@antfu/eslint-config"

export default antfu(
	{
		stylistic: {
			indent: "tab",
			quotes: "double",
		},
		typescript: true,
		vue: true,
	},
	// i18next.configs["flat/recommended"],
	{
		rules: {
			// "i18next/no-literal-string": ["error", {
			// 	framework: "vue",
			// 	mode: "jsx-only",
			// 	ignore: ["class"],
			// 	ignoreAttribute: ["class", "className"],
			// }],
		},
	},
)

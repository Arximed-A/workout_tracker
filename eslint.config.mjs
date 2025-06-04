import eslint from "@eslint/js"
import i18next from "eslint-plugin-i18next"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
	eslint.configs.recommended,
	i18next.configs["flat/recommended"],
	{
		rules: {},
	},
)

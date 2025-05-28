import eslint from "@eslint/js"

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
	eslint.configs.recommended,

	{
		rules: {},
	},
)

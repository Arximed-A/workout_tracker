import antfu from "@antfu/eslint-config"

export default antfu({
	stylistic: {
		indent: "tab",
		quotes: "double",
	},
	typescript: true,
	vue: true,
})

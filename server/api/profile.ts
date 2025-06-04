import type { ILogin } from "~/src/pages/login/index.vue"
import { createError, defineEventHandler, readBody } from "h3"

export default defineEventHandler(async (event) => {
	const body: ILogin = await readBody(event)
	if (body.login === "123") {
		return {
			name: "Andrew",
		}
	}
	return createError({
		status: 400,
		statusMessage: "Bad Request",
		message: "Invalid user input",
		data: { field: "email" },
	})
})

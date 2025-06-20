// update-version.js
import {readFileSync, writeFileSync} from "node:fs"

try {
	// Читаем package.json
	const packageJson = JSON.parse(readFileSync("./package.json", "utf8"))

	console.log("🔄 Текущая версия:", packageJson.version)

	const [major, minor, patch] = packageJson.version.split(".").map(part =>
		part.startsWith("0") ? Number.parseInt(part, 10) : part,
	)

	const newPatch = Number.parseInt(patch, 10) + 1
	const newVersion = `${major}.${minor}.${String(newPatch).padStart(3, "0")}`

	packageJson.version = newVersion
	writeFileSync("./package.json", `${JSON.stringify(packageJson, null, 2)}\n`)

	console.log(`✅ Версия обновлена: ${newVersion}`)
} catch (error) {
	console.error("❌ Ошибка:", error.message)
	// const process = require("node:process")
	// process.exit(1)
}

<script setup lang="ts">
import { useI18n } from "#imports"
import { reactive } from "vue"
import ButtonBase from "@/shared/ui/buttonBase/ButtonBase.vue"
import InputBase from "@/shared/ui/inputBase/InputBase.vue"
import LabelBase from "@/shared/ui/labelBase/LabelBase.vue"
import { API } from "@/shared/variables/variables"
import HeaderBar from "@/widgets/headerBar/HeaderBar.vue"

export interface ILogin {
	login: string
	password: string
}

const { t } = useI18n()
const form = reactive<ILogin>({
	login: "",
	password: "",
})

async function sendForm() {
	const data = await $fetch(`${API}/profile`, {
		method: "POST",
		body: form,
	})
	console.warn(data)
}
</script>

<template>
	<HeaderBar />
	<div
		class="flex items-center justify-center h-full w-full "
	>
		<div class="max-w-100 border-info border rounded-md p-3 text-xl ">
			<h1 class="text-center">
				{{ t('Войти') }}
			</h1>
			<LabelBase>
				<template #title>
					{{ t('Логин') }}
				</template>
				<template #default>
					<InputBase v-model="form.login" />
				</template>
			</LabelBase>
			<LabelBase>
				<template #title>
					{{ t('Пароль') }}
				</template>
				<template #default>
					<InputBase v-model="form.password" />
				</template>
			</LabelBase>
			<ButtonBase @click="sendForm">
				{{ t('Отправить') }}
			</ButtonBase>
		</div>
	</div>
</template>

<style scoped>

</style>

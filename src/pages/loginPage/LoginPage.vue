<script setup lang="ts">
import ButtonBase from "@/shared/ui/buttonBase/ButtonBase.vue"
import InputBase from "@/shared/ui/inputBase/InputBase.vue"
import LabelBase from "@/shared/ui/labelBase/LabelBase.vue"
import { API } from "@/shared/variables/variables"
import HeaderBar from "@/widgets/headerBar/HeaderBar.vue"

export interface ILogin {
	login: string
	password: string
}

const toast = useToast()
const { t } = useI18n()
const form = reactive<ILogin>({
	login: "test_all",
	password: "test_all",
})

async function sendForm() {
	if (form.login === "" || form.password === "") {
		toast.info({ message: t("Заполните обязательные поля") })
		return
	}
	try {
		const data = await $fetch(`${API}/profile`, {
			method: "POST",
			body: form,
		})

		await navigateTo("/", { redirectCode: 301 })
	}
	catch (e: unknown) {
		if (e.statusCode === 401) {
			return toast.error({ message: "Пользователь не найден" })
		}
		return toast.error({ message: t("Произошла неизвестная ошибка") })
	}
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
			<LabelBase required>
				<template #title>
					{{ t('Логин') }}
				</template>
				<template #default>
					<InputBase v-model="form.login" placeholder="Введите логин" />
				</template>
			</LabelBase>
			<LabelBase required>
				<template #title>
					{{ t('Пароль') }}
				</template>
				<template #default>
					<InputBase v-model="form.password" type="password" placeholder="Введите пароль" />
				</template>
			</LabelBase>
			<ButtonBase class="w-full" @click="sendForm">
				{{ t('Отправить') }}
			</ButtonBase>
		</div>
	</div>
</template>

<style scoped>

</style>

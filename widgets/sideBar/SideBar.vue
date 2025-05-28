<script setup lang="ts">
import { ref } from "vue"

const isCollapse = ref<boolean>(false)
</script>

<template>
	<el-aside>
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			:collapse="isCollapse"
		>
			<el-menu-item index="1">
				<template #title>
					Программы
				</template>
			</el-menu-item>
			<el-menu-item index="2">
				<template #title>
					Статистика
				</template>
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>

<style scoped>

</style>

<script setup lang="ts">
import HeaderBar from "@/widgets/headerBar/HeaderBar.vue"
import SideBar from "@/widgets/sideBar/SideBar.vue"
</script>

<template>
	<el-container>
		<el-header>
			<HeaderBar />
		</el-header>
		<el-container>
			<SideBar />
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<style scoped>

</style>

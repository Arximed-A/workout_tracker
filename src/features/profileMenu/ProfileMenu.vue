<script setup lang="ts">
import { useUserStore } from "../../shared/states/userStore/userStore.ts"

const userStore = useUserStore()
</script>

<template>
	<el-avatar :src="userStore.avatar" />
</template>

<style scoped>

</style>

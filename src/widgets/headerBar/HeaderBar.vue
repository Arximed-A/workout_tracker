<script setup lang="ts">
import LanguageSwitcher from "../../features/languageSwitcher/LanguageSwitcher.vue"
import ProfileMenu from "../../features/profileMenu/ProfileMenu.vue"
import ThemeSwitcher from "../../features/themeSwitcher/ThemeSwitcher.vue"
</script>

<template>
	<div class="flex">
		<ThemeSwitcher />
		<LanguageSwitcher />
		<ProfileMenu />
	</div>
</template>

<style scoped>

</style>

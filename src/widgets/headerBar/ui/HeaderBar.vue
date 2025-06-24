<script setup lang="ts">
import LanguageSwitcher from "@/feauteres/languageSwitcher/ui/LanguageSwitcher.vue";
import ThemeSwitcher from "@/feauteres/themeSwitcher/ui/ThemeSwitcher.vue";
import UserProfileBar from "@/feauteres/userProfileBar/ui/UserProfileBar.vue";
import {useUserStore} from "@/shared/store/userStore.ts";

const userStore = useUserStore()
</script>

<template>
  <div class="header flex items-center justify-end h-full gap-7">
    <ThemeSwitcher/>
    <LanguageSwitcher/>
    <UserProfileBar v-if="userStore.user"/>
  </div>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--el-border-color);
}
</style>
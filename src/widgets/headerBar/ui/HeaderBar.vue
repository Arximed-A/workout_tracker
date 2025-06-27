<script setup lang="ts">
import LanguageSwitcher from "@/feauteres/languageSwitcher/ui/LanguageSwitcher.vue";
import ThemeSwitcher from "@/feauteres/themeSwitcher/ui/ThemeSwitcher.vue";
import UserProfileBar from "@/feauteres/userProfileBar/ui/UserProfileBar.vue";
import {useUserStore} from "@/shared/store/userStore.ts";

const userStore = useUserStore()
//eslint disable next line
const versionApp: string = __APP_VERSION__;

</script>

<template>
  <div class="header flex items-center  h-full gap-7">
    <div class="basis-full">
      {{ "v" + versionApp }}

    </div>
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
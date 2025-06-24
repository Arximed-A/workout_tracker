<script setup lang="ts">
import {useUserStore} from "@/shared/store/userStore.ts";
import TextBase from "@/shared/ui/textBase/TextBase.vue";

const userStore = useUserStore()

const avatar = userStore.user?.avatar ? userStore.user.avatar : 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png'
const name = `${userStore.user?.first_name} ${userStore.user?.second_name}`


</script>

<template>
  <TextBase :text="name"/>
  <el-avatar
    :src="avatar"
  />
</template>

<style scoped>

</style>
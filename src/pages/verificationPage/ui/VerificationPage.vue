<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {account, databases} from '@/shared/appWrite/appwrite.ts'
import {collectionsId, DBID} from "@/shared/appWrite/settings.ts";
import {RoutePath} from "@/shared/model/router/routerPaths.ts";
import {fetchUpdateVerification} from "@/pages/verificationPage/api/apiVerification.ts";

const route = useRoute()
const router = useRouter()

const isLoading = ref<boolean>(false)

onMounted(async () => {
  isLoading.value = true
  try {
    const secret: string = route.query.secret as string//TODO проверить типы
    const userId: string = route.query.userId as string//TODO проверить типы
    await fetchUpdateVerification(userId, secret);
    const {$id, email} = await account.get()
    await databases.createDocument(
      DBID,
      collectionsId.users,
      $id,
      {
        email: email,
      })

    await router.push(RoutePath.registration)

  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <el-button :loading="isLoading">Ща мы тебя верифицировать будем</el-button>
</template>

<style scoped>

</style>
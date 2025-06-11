<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {account, databases} from '@/shared/appWrite/appwrite'
import {collectionsId, DBID} from "@/shared/appWrite/settings.ts";
import {useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const secret: string = route.query.secret as string//TODO проверить типы
  const userId: string = route.query.userId as string//TODO проверить типы
  try {
    await account.updateVerification(userId, secret);
    const {$id, email} = await account.get()

    const res = await databases.createDocument(DBID, // databaseId
      collectionsId.users, // collectionId
      $id, // documentId
      {
        email: email,
        language: 'ru',
      })
    if (res.id) {
      await router.push('/')
    }
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  Ща мы тебя верифицировать будем
</template>

<style scoped>

</style>
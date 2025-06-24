<script setup lang="ts">
import FullScreenWrapper from "@/shared/ui/fullScreenWrapper/FullScreenWrapper.vue";
import WrapperBase from "@/shared/ui/wrapperBase/WrapperBase.vue";
import InputBase from "@/shared/ui/inputBase/InputBase.vue";
import {reactive, ref} from "vue";
import LabelBase from "@/shared/ui/labelBase/LabelBase.vue";
import {useI18n} from "vue-i18n";
import ButtonBase from "@/shared/ui/buttonBase/ButtonBase.vue";
import type {IRegistration} from "@/pages/registrationPage/model/types/typesRegistration.ts";
import {account, databases} from "@/shared/appWrite/appwrite.ts";
import {collectionsId, DBID} from "@/shared/appWrite/settings.ts";
import {useUserStore} from "@/shared/store/userStore.ts";
import {useRouter} from "vue-router";
import {RoutePath} from "@/shared/model/router/routerPaths.ts";
import DataPicker from "@/shared/ui/dataPicker/DataPicker.vue";

const {t} = useI18n()
const userStore = useUserStore()
const router = useRouter()
const isLoading = ref<boolean>(false)
const form = reactive<IRegistration>({
  first_name: '',
  second_name: '',
  weight: 0,
  birthday: '',
  height: 0,
  avatar: '',
})

async function sendForm() {
  try {
    isLoading.value = true
    const {$id} = await account.get()
    const {
      avatar, birthday, email, first_name, height, second_name, weight
    } = await databases.updateDocument(
      DBID, // databaseId
      collectionsId.users, // collectionId
      $id, // documentId
      form, // data (optional)
    );
    userStore.user = {
      $id,
      email,
      weight,
      avatar,
      birthday,
      first_name,
      height,
      second_name
    }
    await router.push(RoutePath.home)
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <FullScreenWrapper>
    <WrapperBase>
      <LabelBase :text="t('имя')" required>
        <InputBase :placeholder="t('введите имя')" v-model="form.first_name" :disabled="isLoading"/>
      </LabelBase>
      <LabelBase :text="t('фамилия')" required>
        <InputBase :disabled="isLoading" v-model="form.second_name" :placeholder="t('введите фамилию')"/>
      </LabelBase>
      <LabelBase :text="t('вес')">
        <InputBase :disabled="isLoading" v-model="form.weight" type="number" :placeholder="t('укажите ваш вес')"/>
      </LabelBase>
      <LabelBase :text="t('день рождения')">
        <DataPicker v-model="form.birthday"/>
      </LabelBase>
      <LabelBase :text="t('рост')">
        <InputBase :disabled="isLoading" v-model="form.height" type="number"
                   :placeholder="t('укажите рост в сантиметрах')"/>
      </LabelBase>
      <LabelBase :text="t('аватар')">
        <InputBase :disabled="isLoading" v-model="form.avatar"/>
      </LabelBase>
      <ButtonBase @click="sendForm" :loading="isLoading"/>


    </WrapperBase>
  </FullScreenWrapper>
</template>

<style scoped>

</style>
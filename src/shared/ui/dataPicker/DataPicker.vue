<script setup lang="ts">

import {computed} from "vue";
import {useI18n} from "vue-i18n";
import {useUserStore} from "@/shared/store/userStore.ts";

const {t} = useI18n()
const userStore = useUserStore()
const props = withDefaults(defineProps<{
  initDate?: string
  placeholder?: string
}>(), {
  initDate: "",
  placeholder: 'укажите дату'
})
const date = defineModel<string>({required: true})

if (props.initDate) {
  date.value = props.initDate;
}
const placeholder = computed(() => t(props.placeholder))

const getFormatDate = computed<string>(() => {
  return userStore.language === "ru" ? "DD-MM-YYYY" : "YYYY-MM-DD";
});
</script>

<template>
  <el-date-picker
    :placeholder="placeholder"
    v-model="date"
    type="date"
    :format="getFormatDate"
    value-format="YYYY-MM-DD"
    style="width: 100%"
  />
</template>

<style scoped>

</style>
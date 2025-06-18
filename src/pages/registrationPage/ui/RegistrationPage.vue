<script setup lang="ts">
import FullScreenWrapper from "@/shared/ui/base/fullScreenWrapper/FullScreenWrapper.vue";
import WrapperBase from "@/shared/ui/base/wrapperBase/WrapperBase.vue";
import InputBase from "@/shared/ui/base/inputBase/InputBase.vue";
import {reactive} from "vue";

const form = reactive({
  firstName: '',
})
</script>

<template>
  <FullScreenWrapper>
    <WrapperBase>
      <InputBase v-model="form.firstName"/>
    </WrapperBase>
  </FullScreenWrapper>
</template>

<style scoped>

</style>
<script setup lang="ts">
import HeaderBar from "@/widgets/headerBar/ui/HeaderBar.vue";
import SideBar from "@/widgets/sideBar/ui/SideBar.vue";
import ru from 'element-plus/es/locale/lang/ru'
import en from 'element-plus/es/locale/lang/en'
import 'dayjs/locale/ru'
import {computed} from "vue";
import {useUserStore} from "@/shared/store/userStore.ts";

const userStore = useUserStore()

const currentLanguage = computed(() => userStore.language === 'ru' ? ru : en)
</script>

<template>
  <el-config-provider :locale="currentLanguage">
    <el-container class="min-h-lvh">
      <el-header>
        <HeaderBar/>
      </el-header>
      <el-container>
        <!--        TODO сделать завязку на props от роутов-->
        <el-aside v-if="userStore.user" width="200px">
          <SideBar/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>


  </el-config-provider>
</template>

<style scoped>

</style>

<!--
 * @Author: your name
 * @Date: 2022-01-19 15:35:15
 * @LastEditTime: 2022-02-14 10:14:01
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: /vite-project/src/App.vue
-->
<template>
  <router-view />
</template>
<script setup >
import { getToken } from "@/utils/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const token = getToken();
if (!token) {
  router.replace({ name: "Login" });
}
</script>
<style>
#app {
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f7f8fa;
}
</style>

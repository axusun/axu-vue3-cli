<!--
 * @Author: your name
 * @Date: 2022-01-19 15:38:03
 * @LastEditTime: 2022-01-20 15:01:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-project/src/views/home/home.vue
-->
<script setup>
import { ref } from 'vue'
import {login} from '@/api/home'
const handelLogin = ()=>{
  login()
}
</script>

<template>
  <van-button type="primary" @click="handelLogin">登录</van-button>
</template>

<style scoped lang="scss">

</style>

<!--
 * @Author: axu
 * @Date: 2022-01-19 15:38:03
 * @LastEditTime: 2022-02-14 18:03:16
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: /vite-project/src/views/home/home.vue
-->
<template>
  <div class="pt-20 px-20 home">
    <router-link to="/">
      <van-button round block type="primary">维护</van-button>
    </router-link>
    <router-link to="/">
      <van-button round block type="success" class="mt-16">计算</van-button>
    </router-link>
  </div>
</template>

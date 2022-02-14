/*
 * @Author: axu
 * @Date: 2022-01-19 15:37:31
 * @LastEditTime: 2022-02-14 18:04:09
 * @LastEditors: Please set LastEditors
 * @Description: 路由
 * @FilePath: /vite-project/src/router/index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
  ],
});

// 抛出路由实例, 在 main.js 中引用
export default router;

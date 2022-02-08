/*
 * @Author: axu
 * @Date: 2022-01-19 15:37:31
 * @LastEditTime: 2022-01-19 16:58:28
 * @LastEditors: Please set LastEditors
 * @Description: 路由
 * @FilePath: /vite-project/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import Index from '@/views/index/index.vue'

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      component: Index
    },
    {
        path: '/home',
        name:'Home',
        component: Home
      }
  ]
})

// 抛出路由实例, 在 main.js 中引用
export default router
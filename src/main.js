/*
 * @Author: axu
 * @Date: 2022-01-19 15:35:15
 * @LastEditTime: 2022-01-20 15:06:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-project/src/main.js
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { Button,ActionSheet } from 'vant';
// import Toast from '';

import '@/style/main.scss'

const app = createApp(App)
app.use(router)
app.use(Button)
app.use(ActionSheet)
// app.use(Toast)
app.mount('#app')

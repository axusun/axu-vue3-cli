/*
 * @Author: your name
 * @Date: 2022-02-10 11:51:39
 * @LastEditTime: 2022-02-10 14:40:43
 * @LastEditors: Please set LastEditors
 * @Description: vuex
 * @FilePath: /vite-project/src/store/index.js
 */
import { createStore } from 'vuex'
import globle from './modules/globle.js'
import getters from './getter'

const store = createStore({
    modules: {
      globle
    },
    getters
  })
 
export default store
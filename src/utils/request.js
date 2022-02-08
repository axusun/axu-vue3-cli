/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2022-02-08 10:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: 
 */
import axios from 'axios'
console.log(import.meta.env.VITE_BASE_URL,123)
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  headers: { 'Cache-Control': 'no-cache' }
})

service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['token'] = `${getToken()}`
    // }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 410) {
        // Message({
        //   message: '登录过期，请重新登录',
        //   type: 'error',
        //   duration: 3000
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
      } else {
        // Message({
        //   message: res.msg || 'Error',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error.response.data.code === 410) {
      // Message({
      //   message: '登录过期，请重新登录',
      //   type: 'error',
      //   duration: 2000
      // })
      // store.dispatch('user/resetToken').then(() => {
      //   location.reload()
      // })
    } else {
      // Message({
      //   message:
      //     error.response.data.msg !== undefined && error.response.data.msg
      //       ? error.response.data.msg
      //       : 'Error',
      //   type: 'error',
      //   duration: 5000
      // })
    }
    return Promise.reject(error)
  }
)

export default service

/*
 * @Author: your name
 * @Date: 2022-01-20 10:30:47
 * @LastEditTime: 2022-02-08 10:34:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-project/src/api/home.js
 */
import request from '@/utils/request'

export function login(data) {
    return request({
      url: 'Mini/V1/Spu/list',
      method: 'post',
      data
    })
  }
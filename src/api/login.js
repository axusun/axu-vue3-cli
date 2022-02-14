/*
 * @Author: axu
 * @Date: 2022-01-20 10:30:47
 * @LastEditTime: 2022-02-10 16:44:08
 * @LastEditors: Please set LastEditors
 * @Description: 登录
 * @FilePath: /vite-project/src/api/home.js
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "api/login",
    method: "post",
    data,
  });
}

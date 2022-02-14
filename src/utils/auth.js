/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2022-02-10 17:11:06
 * @LastEditors: Please set LastEditors
 * @Description: auth.js
 * @FilePath: /vue-admin-template-master/src/utils/auth.js
 */

const TokenKey = "BYToken";

export function getToken() {
  return window.localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return window.localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return window.localStorage.removeItem(TokenKey);
}

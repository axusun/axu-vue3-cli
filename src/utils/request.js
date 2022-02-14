/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2022-02-11 15:41:20
 * @LastEditors: Please set LastEditors
 * @Description: axios
 * @FilePath:
 */
import axios from "axios";
import store from "@/store";
import { getToken } from "@/utils/auth";
import { Toast } from "vant";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  headers: { "Cache-Control": "no-cache" },
});

service.interceptors.request.use(
  (config) => {
    console.log(store.getters.token, "token");
    if (store.getters.token) {
      config.headers["token"] = `${getToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      if (res.code === 410) {
        Toast.fail("登录过期，请重新登录");
        store.dispatch("globle/resetToken").then(() => {
          location.reload();
        });
      } else {
        Toast.fail(res.msg || "Error");
      }
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    if (error.response.data.code === 410) {
      Toast.fail("登录过期，请重新登录");
      store.dispatch("globle/resetToken").then(() => {
        location.reload();
      });
    } else {
      Toast.fail(res.msg || "Error");
    }
    return Promise.reject(error);
  }
);

export default service;

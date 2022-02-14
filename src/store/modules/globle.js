/*
 * @Author: your name
 * @Date: 2022-02-10 14:31:21
 * @LastEditTime: 2022-02-11 15:34:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-project/src/store/modules/globle.js
 */

import { getToken, removeToken } from "@/utils/auth";
const getDefaultState = () => {
  return {
    token: getToken(),
  };
};

const state = getDefaultState();

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
};

const actions = {
  login({ commit }, result) {
    commit("SET_TOKEN", result);
  },
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken();
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

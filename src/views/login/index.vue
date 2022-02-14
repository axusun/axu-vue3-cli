<!--
 * @Author: axu
 * @Date: 2022-01-19 16:42:50
 * @LastEditTime: 2022-02-14 18:03:08
 * @LastEditors: Please set LastEditors
 * @Description: 登录
 * @FilePath: /vite-project/src/views/index/index.vue
-->
<template>
  <div class="pt-20">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="account"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { login } from "@/api/login";
import { setToken } from "@/utils/auth";
import { useRouter } from "vue-router";
import { Toast } from "vant";
import store from "@/store";

const router = useRouter();
const account = ref("");
const password = ref("");

// 登录
const onSubmit = async () => {
  try {
    // const data = await login({
    //   account: account.value,
    //   password: password.value,
    // });
    await setToken(111);
    await store.dispatch("globle/login", 111);
    router.replace({ name: "Home" });
  } catch (msg) {
    Toast.fail(msg);
  }
};
</script>
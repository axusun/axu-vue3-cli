/*
 * @Author: axu
 * @Date: 2022-01-19 15:35:15
 * @LastEditTime: 2022-02-11 15:23:55
 * @LastEditors: Please set LastEditors
 * @Description: main.js
 * @FilePath: /vite-project/src/main.js
 */
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import {
  Button,
  ActionSheet,
  Form,
  Field,
  CellGroup,
  List,
  Cell,
  Uploader,
} from "vant";
import store from "./store";
import "@/style/main.scss";
const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(ActionSheet);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(List);
app.use(Cell);
app.use(Uploader);
app.mount("#app");

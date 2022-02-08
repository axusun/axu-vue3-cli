/*
 * @Author: axu
 * @Date: 2022-01-19 15:35:15
 * @LastEditTime: 2022-02-08 10:34:51
 * @LastEditors: Please set LastEditors
 * @Description: vite配置
 * @FilePath: /vite-project/vite.config.js
 */
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import path from "path";

export default ({mode})=>defineConfig({
  plugins: [vue(),
    styleImport({
    resolves: [VantResolve()],
  }),],
  server: {
    host:'0.0.0.0',
    port: 8081,
    proxy:{
      '/Mini': {
        target: loadEnv(mode, process.cwd()).VITE_PROXY_URL,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }, 
    }
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "~": path.join(__dirname, "node_modules")
    },
    extensions: ['.js', '.json', '.ts'],
  },
  css:{
    preprocessorOptions: {
       scss: {
         additionalData: `@import "@/style/variables.scss";`
       }
     }
  },
 
})

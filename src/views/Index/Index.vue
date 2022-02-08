<!--
 * @Author: axu
 * @Date: 2022-01-19 16:42:50
 * @LastEditTime: 2022-02-08 14:52:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-project/src/views/index/index.vue
-->
<script setup>
    import { Toast } from 'vant';
    import { useRouter, useRoute } from 'vue-router'
    import {ref} from 'vue'
    import {login} from '@/api/home'
    const router = useRouter()
    const show = ref(false);
    // console.log(eval("console.log('111')"))
    const actions = [
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三' },
    ];
    const onSelect = (item) => {
      show.value = false;
      Toast(item.name);
        router.push({
        name: 'Home',
      })
    };
    const showS = ()=>{
        show.value=true
    }
    
</script>
<template>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <div @click="showS">显示</div>
    <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
    <div class="main flex flex-between ">
        <div class="item">flex布局</div>
        <div class="item">flex布局</div>
    </div>
</template>
<style scoped lang="scss">
    .main{
        .item{
            width: 100px;
            height: 200px;
            background: pink;
        }
    }
</style>
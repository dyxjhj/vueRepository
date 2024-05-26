<template>
<div>
    <!-- <h2>根组件App.vue中的h2元素</h2> -->

    <!-- 使用组件 -->
    <!-- <AppHeader></AppHeader>
    <app-header></app-header> -->

    <!-- 顶部导航 -->
    <!-- <div class="appHeader"></div> -->
    <AppHeader></AppHeader>
    <!-- 侧边栏 -->
    <!-- <div class="appAside"></div> -->
    <AppAside></AppAside>
    <!-- 内容 -->
    <!-- <div class="appContent"></div> -->
    <app-content></app-content>
    <!-- 底部 -->
    <!-- <div class="appFooter"></div> -->
    <app-footer></app-footer>
</div>
  
</template>

<script>
// vue引入版本的问题
// 做法一 App.vue SFC
// import {} from "vue"
// 单文件vue style有自己的作用域

// 做法二：自己定义一个对象
// import {createApp} from "vue/dist/vue.bunder.js"

// jsconfig.js VSCode进行读取 可以对代码进行更友好的提示

import AppHeader from "../components/appHeader.vue"
import AppAside from "../components/appAside.vue"
import AppContent from "../components/appContent.vue"
import AppFooter from "../components/appFooter.vue"

export default {
    name: "App",
    components: {
        AppHeader,
        AppAside,
        AppContent,
        AppFooter,
    }

}
</script>


<style scoped>
/* scope的 给元素添加了唯一的6data-v-**属性 */

</style>
<template>
  <div class="app">
    <!-- 占位 指示渲染的位置-->
    <!-- <router-view></router-view> -->
    <!-- <div class="router-view"></div> -->
    <div class="nav">
      <!-- replace属性 替换 每次切换路径后源路径被替换 -->
      <!-- to属性可以配置对象 -->
      <!-- <router-link :to="{ path:'/home', component: Home}" replace>首页</router-link> -->
      <router-link to="/home" replace>首页</router-link>
      <router-link to="/about">关于</router-link>
      <!-- <router-link to="/user">用户</router-link> -->
      <router-link to="/user/111">用户111</router-link>
      <router-link to="/user/222">用户222</router-link>
      <!-- router-link-active类自动添加 -->
      <!-- active-class属性自定义激活状态的类名 -->


      <!-- 其他元素跳转 编程式导航 -->
      <button @click="jumpHome">跳转首页</button>
      <button @click="jumpAbout">跳转详情</button>

    </div>
    <router-view></router-view>
    
  </div>
</template>

<script setup>
// 前端路由如何做到URL和内容的映射 监听URL的改变
// 1.URL的hash
// URL的hash也就是锚点（#），本质上是改变window.location的href属性
// 通过直接赋值location.hash来改变href，但页面不发生刷新
// 比如：
// <a href="#/home">home</a>
// <a href="#/about">about</a>
// 监听hash改变
// window.addEventListener('hashchange', () => {
//   switch(location.hash) {
//     case "#/home":
//       routerView.innerHtml = "home";
//       break;
//     case "#/about":
//       routerView.innerHtml = "about";
//       break;
//      default:
//       routerView.innerHtml = "default";
//   }
// })
// 2.history接口 有6种模式改变URL而不刷新页
// repalceState:替换原来的路径
// pushState:使用新的路径
// popState: 路径的回退
// go: 向前或向后改变路径
// forward: 向前改变路径
// back :向后改变路径
// function historyChange() {
//     switch(location.pathname) {
//     case "/home":
//       routerView.innerHtml = "home";
//       break;
//     case "/about":
//       routerView.innerHtml = "about";
//       break;
//      default:
//       routerView.innerHtml = "default";
//   }
// }
// 3.vue-Router
// 路由用于设定访问路径 将路径和组件映射起来

// 路由懒加载
// 提高首屏加载速度
// 对除了首页外的组件进行分包处理

// 动态路由

// 如何拿到router
import { useRouter }  from 'vue-router';

const router = useRouter()
// 编程式导航
// 监听元素的点击事件 进行页面跳转
function jumpHome() {
  // router.push("/home")
  router.push({
    path: "/home"
  })

}
function jumpAbout() {
  // router.push("/about")
  router.push({
    path: "/about",
    // 使用query传参
    query: {
      name: 'lily',
      age: 18,
    }
  })
}
// 动态添加路由
// 后台管理系统 根据不同的角色 生成不同的菜单 动态注册路由
// 
</script>

<style scoped>
.outer-link-active {
  font-size: 40px;
}

</style>
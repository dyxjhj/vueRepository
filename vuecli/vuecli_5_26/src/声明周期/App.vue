<template>
<div>
    
</div>
  
</template>

<script>
    //异步组件webpack打包时会进行分包处理
    // webpack的代码分包 默认打包过程
    // 默认情况下，在构建整个组件树的过程中，因为组件和组件之间是通过模块化直接依赖的，那么webpack在打包时就会将组件模块打包到一起，比如一个app.js文件中，这个时候随着项目不断庞大，app.js文件的内容过大，会造成首屏渲染的速度变慢
    // 所以，对于一些不需要以及使用的组件，我们可以单独对它们进行拆分。拆分成一些小的代码块chunk.js，这些chunk.js会在需要时从服务器加载下来，并且运行代码，显示对应的内容
    // 对于某些组件希望通过异步的方式来加载，目的是可以对其进行分包处理
    // defineAsyncComponent函数
    // 接受两种类型的参数
    // 1.工厂函数。返回一个promise对象
    // 2.一个对象类型，对异步函数进行配置
    // 异步组件的使用
    import { defineAsyncComponent } from 'vue'
    // () => { import("./catagory.vue")}返回一个promise对象
    const asyncCatagory = defineAsyncComponent(() => { import("./catagory.vue")})

export default {
    // 注册
    Catagory: asyncCatagory,

}
</script>

<style scoped>

</style>
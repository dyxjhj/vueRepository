<template>
<div class="app">
    <HomeVue></HomeVue>
    <h2>App: {{ msg }}</h2>
    <!-- 点击只能改变App中的数据，共享的数据没有改变 -->
    <button @click="msg = 'hahahhaha'">change</button>
</div>
  
</template>

<script>
import HomeVue from './components/Home.vue'
import { computed } from 'vue'
// provide/inject用于非父子组件之间共享数据
// 一些深度嵌套的组件 子组件想要获取父组件的部分内容
// 父组件可以作为其所有子组件的依赖提供者
// 父组件有一个Provide选项来提供数据
// 子组件有一个inject选项来开始使用这些数据

export default {
    data () {
        return {
            msg: "hello world"
        }
    },
    components: {
        HomeVue,
    },
    // provide API
    // provide: {
    //     name: "zhang",
    //     age: 18,
    // }
    // 函数写法 this指向
    provide() {
        return {
            name: "zhang",
            age: 18,
            // msg: this.msg
            // msg响应式
            // computed是一个响应式API 返回一个ref对象
            msg: computed(() => {
                return this.msg
            })
        }
    }

}
</script>

<style scoped>

</style>
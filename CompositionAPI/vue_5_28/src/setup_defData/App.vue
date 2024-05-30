<template>
<div class="app">
    <!-- <h2>message{{ msg }}</h2>
    <button @click="changeMsg">change</button> -->
    <h2>name:{{ msg.name }}</h2>
    <h2>age:{{ msg.age }}</h2>
    <h2>height:{{ msg.height }}</h2>
    <button @click="changeMsg">change</button>
    <p>{{ count }}</p>


</div>
  
</template>

<script>
import { reactive, ref } from 'vue'
export default {
    setup() {
        // 默认定义的数据不是响应式的
        // let msg = "hello world"

        // 定义响应式数据
        // 1.reactive函数 定义复杂数据 对象
        let msg = reactive({
            name: "zhang",
            age: 18,
            height: 1.88,
        })
        // 2.ref函数 简单数据类型
        // 返回一个ref对象 访问时ref.value
        let count = ref(0)

        function changeMsg() {
            // msg = "hahahhaahha"
            msg.name = "hahah"

        }

        // ref和reactive使用场景
        // ref也可以定义复杂数据
        // 1.定义本地的简单数据
        // 2.网络请求来的数据 local.value = postArr
        // reactive使用场景：
        // 1.一般情况下用于本地数据，不是服务器传来的数据
        // 2.多个数据之间有关系（聚合的数据，组织在一起有特定的作用）如用户名和密码

        // readonly函数 只读
        

        // 返回
        return {
            msg,
            changeMsg,
            count,
        }

    }

}
</script>

<style scoped>

</style>
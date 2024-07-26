<template>
<div>
    <h2>APP中的info: {{ info }}</h2>
    <showInfoVue :info="info" :readonlyInfo="readonlyinfo" @changeInfo="changeInfo"></showInfoVue>
</div>
<!-- 其它函数 -->
<!-- isProxy -->
<!-- isReactive -->
<!-- isReadonly -->
<!-- toRaw 返回reactive/readonly代理的原始对象 -->
<!-- shallowReactive 创建一个响应式代理 不执行嵌套对象的深层响应式转换 深层还是原生对象 -->
<!-- shallowReadonly -->
  
</template>

<script>
import { reactive, readonly } from 'vue'
import showInfoVue from './showInfo.vue'
export default {
    components: {
        showInfoVue,
    },
    setup() {
        // 本地定义多个数据都需要传递给子组件
        const info = reactive({
            name: 'lili',
            age: 18,
            result: 100
        })
        function changeInfo(payload) {
            info.name = payload
        }
        // 子组件中不能修改readonlyinfo  原始对象的只读代理
        const readonlyinfo = readonly(info)
        return  {
            info,
            changeInfo,
            readonlyinfo
        }
    }
}
</script>

<style scoped>

</style>
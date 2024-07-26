<template>
<div>
    <h2>showInfo中的info: {{ info }}</h2>
    <!-- 在子组件中修改 -->
    <!-- <button @click="info.name = 'dadda'">修改info</button> -->
    <!-- 单向数据流 子组件不能修改父组件传过来的值 -->
    <!-- 正确做法 -->
    <button @click="changeInfo">修改info</button>
    <!-- readonly数据 -->
    <h2>showInfo中的readonlyinfo: {{ readonlyInfo }}</h2>
</div>
  
</template>

<script>
// import { readonly } from 'vue'
export default {
    props: {
        // reactive数据
        info: {
            type: Object,
            default: () => ({})
        },
        // readonly数据
        readonlyInfo: {
            type: Object,
            default: () => ({})
        }
    },
    // 注册
    emits: ['changeInfo'],
    setup(props, context) {
        function changeInfo() {
            // this.$emits('changeInfo','kkoooe')
            context.emit('changeInfo','kkoooe')
        }
        return {
            changeInfo
        }
    }

}
</script>

<style scoped>

</style>
<template>
<div>
    <div class="add">
        <!-- <button @click="btnAdd(value)">点击+{{ value }}</button> -->
        <button @click="btnAdd(1)">点击+1</button>
        <button @click="btnAdd(5)">点击+5</button>
        <button @click="btnAdd(10)">点击+10</button>

    </div>
</div>
  
</template>

<script>
export default {
    // 发送事件时 在emit中注册
    // 数组语法
    // emits: ["add"],
    // 对象语法 类型验证
    emits: {
        add: function(count) {
            if(count <= 10) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        btnAdd(value) {
            console.log("btnClickAdd",value)
            // 子组件向父组件发送一个自定义事件
            // this.$emit(自定义事件名称, 参数)
            this.$emit("add", value)
        },
    }

}
</script>

<style scoped>

</style>
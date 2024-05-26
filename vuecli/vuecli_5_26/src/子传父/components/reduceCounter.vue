<template>
<div>
    <div class="reduce">
        <!-- <button @click="btnReduce(value)">点击-{{ value }}</button> -->
        <button @click="btnReduce(1)">点击-1</button>
        <button @click="btnReduce(5)">点击-5</button>
        <button @click="btnReduce(10)">点击-10</button>
    </div>
</div>
  
</template>

<script>
export default {
    methods: {
        btnReduce(value) {
            console.log("btnClickReduce",value)
            // 子组件向父组件发送一个自定义事件
            // this.$emit(自定义事件名称, 参数)
            this.$emit("reduce", value)
        },
    }
}
</script>

<style scoped>

</style>
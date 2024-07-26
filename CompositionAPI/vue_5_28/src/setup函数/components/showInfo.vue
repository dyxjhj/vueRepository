<template>
<div>
    <h2>showInfo:{{ info }}</h2>
    <button @click="info.name = 'li'">按钮</button>
    <!-- 在子组件中修改父组件中的值 不符合规范 违反单向数据流 -->
    <!-- 修改 传递事件 让父组件修改 -->
    
</div>
  
</template>

<script>
export default {
    // 接收父组件传值
    props: {
        info: {
            type: Object,
            default: () => {}
        }
    }

}
</script>

<style scoped>

</style>
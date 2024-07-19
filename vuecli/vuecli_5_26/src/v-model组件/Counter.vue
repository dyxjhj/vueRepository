<template>
<div>
    <h2>Counter: {{ modelValue }} </h2>
    <button @click="changeCounter">修改Counter</button>
    
</div>
  
</template>

<script>
export default {
    // 接收传过来的值
    props: {
        modelValue: {
            type: Number,
            default: 0
        }
    },
    // 外部监听的事件update:modelValue
    emits: ["update:modelValue"],
    methods: {
        changeCounter() {
            // 发送事件
            this.$emit("update:modelValue", 999)
        }
    }
}
</script>

<style scoped>

</style>
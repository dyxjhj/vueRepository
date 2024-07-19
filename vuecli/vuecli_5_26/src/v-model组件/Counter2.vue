<template>
<div>
    <h2>Counter: {{ Counter }} </h2>
    <button @click="changeCounter">修改Counter</button>
    <h2>Why: {{ Why }}</h2>
    <button @click="changeWhy">修改Why</button>

    
</div>
  
</template>

<script>
export default {
    // 接收传过来的值
    props: {
        // 修改属性名
        Counter: {
            type: Number,
            default: 110
        },
        Why: {
            type: String,
            default: ''
        }
    },
    emits: ["update:counter", "update:why"],
    methods: {
        changeCounter() {
            this.$emit("update:counter", event.target.value)
        },
        changeWhy() {
            this.$emit("update:why", event.target.value)
        }

    }
}
</script>

<style scoped>

</style>
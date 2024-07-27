<template>
<div>
    <h2>showInfo</h2>
    <h3>{{ msg }}</h3>
    <button @click="clickBtn">发送事件</button>

</div>
  
</template>

<script setup>
import { defineProps, defineEmits, defineExpose } from 'vue'
const props = defineProps({
    msg: {
        type: String,
        default: 'llllixj'
    }
})
console.log(props.msg)

// 绑定函数 发送事件
const emit = defineEmits('clickBtn')
function clickBtn() {
    // alert('点击事件发生');
    emit('clickBtn', '点击事件发生')
}

function fun() {
    alert('调用了showInfo中的Fun函数')
}
defineExpose({
    fun,
})

</script>

<style scoped>

</style>
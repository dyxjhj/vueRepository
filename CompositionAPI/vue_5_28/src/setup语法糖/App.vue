<template>
<div>
    <show-info :msg='hehehe' @clickBtn='retClickBtn' ref="showInfoCom"></show-info>
</div>
  
</template>

<script setup>
// import 组件 不需要注册 可以直接使用
// 所有编写在顶层中的代码默认暴露给template
import { ref, onMounted } from 'vue';
import showInfo from './showInfo.vue';

const msg = 'hhhhhhhhhhh';

function retClickBtn(payload) {
    alert(payload)
}

// 获取组件实例
const showInfoCom = ref()
onMounted(() => {
    // 不能通过实例直接调用其中的函数,组件中要使用defineExpose暴露方法才可以调用
    showInfoCom.value.fun()
})




</script>

<style scoped>

</style>
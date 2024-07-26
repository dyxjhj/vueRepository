<template>
<div>
    <h2 ref="titleRef">标题</h2>
    <button @click="getElements">获取元素</button>
</div>
  
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    setup() {
        const titleRef = ref()
        // mounted生命周期函数
        onMounted(() => {
            console.log(titleRef.value)
        })
        function getElements() {
            console.log(titleRef.value)
        }
        // 生命周期函数
        // 使用直接导入的onX生命周期钩子
        // beforeCreate 和 created不在需要 组件实例创建之前 
        // 其中的操作直接在setup函数中编写
        // beforeMount mounted beforeUpdate updated ...
        return {
            titleRef,
            getElements
        }
    }

}
</script>

<style scoped>

</style>
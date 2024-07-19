<template>
<div>
    <h1>About组件</h1>
    <!-- 模板接受传参 -->
    <h2>{{ $route.query }}</h2>

    <button @click="backClick">返回</button>

</div>
  
</template>

<script setup>

// 返回上一层界面
import { useRouter }  from 'vue-router';

const router = useRouter()
function backClick() {
    // 回退
    router.back();
    // 前进
    // router.forward();
    // 前进任意步 
    // router.go(2); 
}

</script>

<style scoped>

</style>
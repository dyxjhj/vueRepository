<template>
<div>
    <div class="title">订单页面</div>
    <div class="content">
        <ul>
            <li>订单1</li>
            <li>订单2</li>
            <li>订单3</li>
            <li>订单4</li>
            <li>订单5</li>
        </ul>
    </div>
    <button @click="loginOut">退出登录</button>

</div>
  
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function loginOut() {
    localStorage.removeItem('token')
    router.push('/login')
}

</script>

<style scoped>

</style>
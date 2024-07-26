<template>
<div>
    <h2>登录页面</h2>
    <button @click="loginClick">登录按钮</button>
    
</div>
  
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function loginClick()  {
    // console.log('点击了登录')
    // 向服务器发送请求 服务器返回一个token
    localStorage.setItem('token', 'llxxjj')

    // 跳转到order页面
    router.push("/order")
}
    

</script>

<style scoped>

</style>
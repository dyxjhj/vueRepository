<template>
<div>
    <h1>User组件</h1>
    <!-- 在模板中获取id -->
    <h2>User: {{ $route.params }}</h2>
    <h2>User: {{ $route.params.id }}</h2>

</div>
  
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate} from 'vue-router'
import { onActivated } from 'vue'
// 在js中获取
// vue2
// this.$route.params
// vue3
// const route = userRoute()
// console.log(route.params)
// onActivated(() => {
//     const route = userRoute()
//     console.log(route.params)
// })
const route = useRoute()
console.log(route.params)
onBeforeRouteUpdate((to, from) => {
    console.log(to.params.id)
    console.log(from.params.id)
})

</script>

<style scoped>

</style>
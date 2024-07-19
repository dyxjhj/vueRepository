<template>
<div>
    <Home></Home>
    <About></About>    
</div>
  
</template>

<script>
// Mixin提供了一种灵活的方式，分发Vue组件中的可复用功能
// 一个Mixin对象可以包含任何组件选项
// 当组件使用Mixin对象时，所有的Mixin对象的选项将被混入该组件本身的选项中
import Home from './view/Home.vue'
import About from './view/About.vue'

export default {
    components: {
        Home,
        About,
    }

}
</script>

<style scoped>

</style>
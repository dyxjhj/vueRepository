<template>
<div>
    <!-- <showMsg title="标题行" content="内容区域"></showMsg> -->
    <!-- <showMsg title="标题行">
        <button>按钮</button>
    </showMsg>

    <showMsg title="标题行">
        <a href="#">超链接跳转</a>
    </showMsg>

    <showMsg title="标题行">
        <img src="../assets/logo.png" alt="">
    </showMsg> -->
    <!-- 插槽的默认内容 -->
    <!-- <showMsg title="标题行">
        
    </showMsg> -->

    <navBar>
        <template v-slot:left>
            <button>返回</button>
        </template>
        <template v-slot:center>
            <span>内容</span>
        </template>
        <template v-slot:right>
            <a href="#">登录</a>
        </template>
        
    </navBar>

    <navBar>
        <!-- 语法糖 v-slot: == # -->
        <template #left>
            <button>返回</button>
        </template>
     
    </navBar>
    
</div>
  
</template>

<script>
import showMsg from './components/showMsg.vue'
import navBar from './components/navBar.vue'
export default {
    components: {
        showMsg,
        navBar
    }

}
</script>

<style scoped>

</style>
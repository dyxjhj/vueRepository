<template>
<div class="app">
    <div class="tabs">
        <template v-for="(item, index) in tabs" :key="index">
            <button :class="{active: currentIndex === index}" @click="itemClick(index)">{{ item }}</button>
        </template>
    </div>
    <div class="view">
        <!-- v-if进行逻辑判断 -->
        <!-- <template v-if="currentIndex === 0">
            <Home></Home>
        </template>
        <template v-else-if="currentIndex === 1">
            <About></About>
        </template>
        <template v-else-if="currentIndex === 2">
            <Catagory></Catagory>
        </template> -->
        <!-- 动态组件 component is属性 -->
        <!-- <component is="about"></component> -->
        <!-- 动态绑定 -->
        <!-- <component name="zhang" :age="10" :is="tabs[currentIndex]" ></component> -->

        <!-- 动态组件传值 -->
        <component name="zhang" :age="10" @homeClick="homeClick" :is="tabs[currentIndex]" ></component>

        <!-- keep-alive  避免组件反复创建与销毁 组件原来的状态也会被销毁-->
        <!-- include属性 确定要缓存哪些组件 -->
        <!-- 组件的名称来自于组件定义时的name选项 -->
        <keep-alive include="home,about">
            <component name="zhang" :age="10" @homeClick="homeClick" :is="tabs[currentIndex]" ></component>
        </keep-alive>
        <!-- keep-alive的属性 -->
        <!-- 1.include -->
        <!-- include string   include="a,b" -->
        <!-- include RegExp   include="/a|b/" -->
        <!-- include Array   include="['a','b']" -->
        <!-- 2.exclude -->
        <!-- 与include相反 任何名称匹配的组件都不会被缓存 -->
        <!-- 3.max number|string -->
        <!-- 最多可以缓存多少组件实例 达到这个最大值之后 缓存组件中最近没有被访问的实例会被销毁 -->

        <!-- include 和 exclude prop允许组件有条件的缓存 -->

        <!-- 保持keep-alive的组件 不能使用created和unmouted监听什么时候切换 -->
        <!-- 使用activated  和 deactivated监听-->




    </div>
    
</div>
  
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Catagory from './views/Catagory.vue'

export default {
    data () {
        return {
            tabs: ['home', 'about', 'catagory'],
            currentIndex : 0,
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
        },

        homeClick(payload) {
            console.log("homeClick",payload)
        }
    },
    components: {
        Home,
        About,
        Catagory,
    }

}
</script>

<style scoped>

.active {
    color: red;
}

</style>
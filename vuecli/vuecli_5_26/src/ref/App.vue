<template>
<div>
    <!-- ref属性 -->
    <!-- 给元素或者组件绑定一个ref的attribute属性 -->
    <h2 ref="title"></h2>
    <button ref="btn" @click="changeTitle">change</button>

    <banner-page ref="banner"></banner-page>
    <banner-page ref="banner"></banner-page>

</div>
  
</template>

<script>
// $refs 
// 不推荐操作原生的DOM对象
import bannerPage from './components/banner.vue'
export default {
    data () {
        return {
            
        }
    },
    methods: {
        // 组件实例有一个$refs属性
        // 它有一个对象，持有注册过ref attribute的所有DOM元素的组件实例
        changeTitle() {
            console.log(this.$refs.title)  //<h2></h2>
            console.log(this.$refs.btn)
            console.log(this.$refs.banner)  //拿到组件实例 proxy(object) 用object实现class的功能
            // 直接调用组件实例中的方法
            this.$refs.banner.bannerClick()
            // 获取banner中的元素
            //拿到组件的根 一般情况下一个组件只建议有一个根
            console.log(this.$refs.banner.$el) 

            // 组件实例的两个属性
            // this.$parent 获取父组件
            // this.$root 获取根组件

        }
    },
    components: {
        bannerPage
    },

}
</script>

<style scoped>

</style>
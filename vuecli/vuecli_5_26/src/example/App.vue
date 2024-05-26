<template>
<div class="app">
    <!-- tab-control -->
    <tabControl :titles="['衣服','鞋包','家居']" 
    @tabItemClick="tabItemClick"></tabControl>
    <h2>{{ products[currentIndex] }}</h2>
    
    <tabControl :titles="['衣服','鞋包','家居']" 
    @tabItemClick="tabItemClick">
        <a href="#">超链接跳转</a>
    </tabControl>

    <tabControl :titles="['衣服','鞋包','家居']" 
    @tabItemClick="tabItemClick">
        <button>哈哈哈</button>       
    </tabControl>
    
    <tabControl :titles="['衣服','鞋包','家居']" 
    @tabItemClick="tabItemClick">
        <!-- 作用域插槽 -->
        <template v-slot:default="props">
            <button>{{ props.item }}</button>
        </template>

        <!-- 独占默认插槽的简写 -->
        <!-- <template v-slot="props"> -->
        
    </tabControl>

    <!-- content -->
    
</div>
  
</template>

<script>
import pageContent from './components/pageContent.vue'
import tabControl from './components/tabControl.vue'
export default {
    components: {
        tabControl,
        pageContent,
    },
    data () {
        return {
            products: [
                [1111111],
                [22222222],
                [333333],
            ],
            currentIndex: 0      
        }
    },
    methods: {
        tabItemClick(index) {
            console.log("app", index)
            this.currentIndex = index
        }
    }

}
</script>

<style scoped>

</style>
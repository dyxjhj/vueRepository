<template>
<div class="app">
    <h2>当前计数 {{ counter }}</h2>
    <!-- 自定义btnClickAdd事件 监听子组件内部的add事件 -->
    <addCounter  @add="btnClickAdd"></addCounter>
    <!-- emits注册后 会有相应的代码提示 -->
    <!-- <addCounter @add="btnClickAdd"></addCounter> -->
    <reduceCounter @reduce="btnClickReduce"></reduceCounter>
    
</div>
  
</template>

<script>
import addCounter from './components/addCounter.vue'
import reduceCounter from './components/reduceCounter.vue'
export default {
    data () {
        return {
            counter: 0
        }
    },
    methods: {
        btnClickAdd(value) {
            this.counter += value
        },
        btnClickReduce(value) {
            this.counter -= value
        }
        
    },
    components: {
        addCounter,
        reduceCounter,

    }

}
</script>

<style scoped>

</style>
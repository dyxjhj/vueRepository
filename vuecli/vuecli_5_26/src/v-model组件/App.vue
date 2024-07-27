<template>
<div>
    <!-- input上的v-model  数据的双向绑定-->
    <!-- <input v-model="msg"> -->
    <!-- v-model相当于v-bind绑定value 再监听input事件 -->
    <!-- <input :value="msg" @input="msg = $event.target.value"> -->
    
    <!-- 组件的v-model -->
    <!-- <counter v-model="appCounter"></counter> -->
    <!-- v-model相当于v-bind绑定modelValue 再监听update事件 -->
    <!-- <counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></counter> -->

    <!-- 绑定多个属性 自定义名称 -->
    <Counter2 v-model:counter="appCounter"  v-model:why="appWhy"></Counter2>

</div>
  
</template>

<script>
    // 引入组件
    import Counter from './Counter.vue'
    import Counter2 from './Counter2.vue'

    export default {
        data () {
            return {
                msg: "hello world",
                appCounter: 10,
                appWhy: "haha",
            }
        },
        components: {
            Counter,
            Counter2,
        }

    }
</script>

<style scoped>

</style>
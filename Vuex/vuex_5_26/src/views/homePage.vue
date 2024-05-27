<template>
<div>
    <!-- 1.模板中的使用 -->
    <h2>Home当前计数{{ $store.state.counter }}</h2>
    <button @click="addClick">+1</button>
    <!-- <h2>name: {{ $store.state.name }}</h2>
    <h2>age: {{ $store.state.name }}</h2>
    <h2>avaturURL: {{ $store.state.avaturURL }}</h2> -->
    <!--  -->
    <h2>name: {{ name }}</h2>

</div>
  
</template>


 <script>
    import { useStore } from 'vuex'
    import { mapState } from 'vuex'
    export default{
        // 2.computed中的使用
        computed: {
            storeCounter() {
                return this.$store.state.counter
            },
            // 将store中的数据映射到computed中
            ...mapState(["name","age","avaturURL"]),
            // 防止命名冲突 对象写法
            ...mapState({
                sName: state => state.name,
                sAge: state => state.age,
            })
            
        }
    }
</script>

<script setup>
    import { toRefs } from 'vue'
    import { useStore } from 'vuex'
    import { mapState } from 'vuex'
    // composition API中的使用

    const store = useStore()
    const { counter } = toRefs(store.state)
    
    // mapState使用
    const { name, age } = mapState(["name","age",])

    function addClick() {
        // console.log(store.state.counter)
        // store.state.counter++
        store.commit("addClick")
    }
</script>

<style scoped>

</style>
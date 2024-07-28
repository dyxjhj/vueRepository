<template>
<div class="app">
    <!-- 1.模板中的使用 -->
    <!-- <h2>Home当前计数{{ $store.state.counter }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.state }}</h2>
    <button @click="change">{{ test }}</button>

    <button @click="addClick">+1</button> -->
    <!-- 在模板中使用多个状态  -->
    <!-- <h2>name: {{ $store.state.name }}</h2>
    <h2>age: {{ $store.state.name }}</h2>
    <h2>avaturURL: {{ $store.state.avaturURL }}</h2> -->
    <!-- setup中解构之后并不能访问 -->
    <!-- <h2>name: {{ name() }}</h2>
    <h2>age: {{ age() }}</h2> -->
    <!-- 如何访问 -->
    <!-- <h2>name: {{ cName }}</h2>
    <h2>age: {{ cAge }}</h2> -->

    <!-- <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>

    <h3>doubleCount{{ $store.getters.doubleCount }}</h3>
    <h3>totalAge{{ $store.getters.totalAge }}</h3> -->

    <!-- mapMutations -->
    <!-- <h2>{{ $store.state.name }}</h2>
    <button @click="changeName">修改名字</button>

    <h2>counter:{{ $store.state.counter }}</h2>
    <button @click="addCounter">counter++</button>

    <h2>info: {{ $store.state.info }}</h2>
    <button @click="changeInfoName('小红')">changeInfoName</button> -->

    <!-- action -->
    <h2>counter:{{ $store.state.name }}</h2>
    <button @click="changeNameAction">发起action</button>


</div>
  
</template>



 <script>
    // options API
    // import { useStore } from 'vuex'
    // import { mapState } from 'vuex'
    // export default{
    //     // 2.computed中的使用
    //     computed: {
    //         storeCounter() {
    //             return this.$store.state.counter
    //         },
    //         // 将store中的数据映射到computed中
    //         // mapState 辅助函数
    //         // mapState返回的是一个个的函数
    //         ...mapState(["name","age","avaturURL"]),
    //         // 防止命名冲突 对象写法
    //         // ...mapState({
    //         //     sName: state => state.name,
    //         //     sAge: state => state.age,
    //         // })
            
    //     }
    // }
</script>

<script setup>
    // composition API 
    import { computed, toRefs } from 'vue'
    import { mapActions, mapMutations, useStore } from 'vuex'
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'
     
    // composition API中的使用

    // const store = useStore()
    // const { counter } = toRefs(store.state)
    
    // mapState使用
    // 1.解构赋值
    // const { name, age } = mapState(["name","age",])
    // // 绑定this对象
    // const cName = computed(name.bind({$store: store}))
    // const cAge = computed(age.bind({$store: store}))

    // 2.直接对store.state进行解构
    // const { name, age } = store.state 非响应式的
    // const { name, age } = toRefs(store.state) 响应式的
    const store = useStore()
    const { name: sName, age } = toRefs(store.state)


    function addClick() {
        console.log("counter的值为:",store.state.counter)
        // 可以直接修改 但不推荐这种做法
        // store.state.counter++
        store.commit("addClick")
    }
    const test = 1
    function change() {
        test++
    }

    // getters的映射 mapGetters
    // options API中的使用和mapState相同
    // setup中使用
    // 1.拿到的是函数
    // const { message: msgFn } = mapGetters(['message'])
    // const msg = computed(msgFn.bind({$store: store }))
    // 2.直接解构 toRefs转换成响应式的
    // const msg = toRefs(store.getters)
    // 3.针对某一个getters属性使用computed
    const msg = computed(() => store.getters.message)


    // mutation的使用
    // function changeName() {
    //     store.commit('changeName')
    // }

    // function addCounter() {
    //     store.commit('addCounter')
    // }
    // function changeInfoName() {
    //     store.commit('changeInfoName', '李三财')
    // }
    // mapMutation 映射 需要手动绑定store
    const mutations = mapMutations(['changeName','addCounter','changeInfoName'])
    const newMutations = {}
    Object.keys(mutations).forEach(key => {
        newMutations[key] = mutations[key].bind({ $store: store})
    });
    const { changeName, addCounter, changeInfoName } = newMutations

    // action
    // function actionTrigger() {
    //     // 派发action
    //     store.dispatch('changeNameAction')
    // }
    // mapAction 在setup中使用辅助函数
    const actions = mapActions(['changeNameAction'])
    const newActions = {}
    Object.keys(actions).forEach(key => {
        newActions[key] = actions[key].bind({ $store: store})
    });
    const { changeNameAction } = newActions


    // 告诉vuex发起网络请求
    store.dispatch('fetchGetdataAction')
    // 监听网络请求操作是否结束
    // 异步函数自动返回promise (async)
    store.dispatch('fetchGetdataAction').then(res => {
        console.log(res)
    })




</script>

<style scoped>

</style>
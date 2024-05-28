<template>
<div class="app">
    <HomeVue></HomeVue>
    
</div>
  
</template>

<script>
import HomeVue from './components/Home.vue'
import eventBus from './utils/eventBus'

export default {
    data () {
        return {
            msg: "hello world"
        }
    },
    // 事件监听 
    methods: {
        // 监听函数
        eventDoingHandler() {
            console.log("App Event")
        }
        
    },
    components: {
        HomeVue,
    },
    created () {
        // fetch() 网络请求

        eventBus.on("eventDoing", (name, age) => {
            // console.log("App Event",name, age)
            this.msg = `${name} + ${age}`
        }),
    },

    // 组件销毁 移除事件监听
    // 生命周期钩子函数
    // 检测组件被销毁
    unmounted() {
        console.log('销毁')
        eventBus.off('eventDoing',this.eventDoingHandler)
    },

}
</script>

<style scoped>

</style>
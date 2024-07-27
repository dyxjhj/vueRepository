<template>
<div>
    <h2>msg的值为{{ msg }}</h2>
    <button @click="msg = 'wanghhah'">改变msg的值</button>
    <h2>info的值为{{ info }}</h2>
    <!-- <button @click="info.name = '李四'">改变info的值</button> -->
    <button @click="info.friend.name = 'yyz'">改变info的值</button>

    
</div>
  
</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue'
export default {
    setup() {
        const msg = ref('lilixj');
        const info = reactive({
            name:'张三',
            age: 18,
            result: 100,
            friend: {
                name: 'lxj'
            }
        })

        // 侦听数据的变化
        watch(msg,(newValue,oldValue) => {
            console.log('newValue',newValue)
            console.log('oldValue',oldValue)

        })
        // newValue和oldValue指向同一个对象info 浅拷贝
        watch(info,(newValue,oldValue) => {
            console.log('newValue',newValue)
            console.log('oldValue',oldValue)
            console.log(newValue === oldValue) //true reacrive对象默认进行深度侦听
        },{
            // watch的参数 立即侦听
            // immediate: true,

        })
        // 侦听到reactive对象变化后 proxy对象 获取到普通对象
        // () => info 内部搜集依赖 
        // watch(() => ({ ...info} ),(newValue,oldValue) => {
        //     console.log('newValue',newValue)
        //     console.log('oldValue',oldValue)
        // },{
        //     immediate: true,
        //     deep: true
        // })

        // watch侦听特定的数据源 
        // watchEffect 侦听到响应式数据变化时，执行某些操作
        // watchEffect中的函数会默认执行一次
        // watchEffect中的自动监听内部依赖的响应式数据
        const stopWatch =  watchEffect(() => {
            console.log('watchEffect',msg.value, info)
            if(msg.value = 'wanghhah') {
                stopWatch(); //停止监听
            }
        }) 

        return  {
            msg,
            info,
        }
    }
}
</script>

<style scoped>

</style>
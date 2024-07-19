<template>
<div>
    <showInfo :info="info"></showInfo>
    <h2>App:{{ info }}</h2>

    
</div>
  
</template>

<script>
import { reactive } from 'vue'
import showInfo from './components/showInfo.vue'
export default {
    components: {
        showInfo,
    },
    setup() {
        // 本地定义多个数据 传递给子组件
        const info = reactive({
            name: 'zhang',
            age: 18,
            height: 1.99
        })

        return {
            info,
        }
    }

}
</script>

<style scoped>

</style>
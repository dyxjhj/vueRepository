<template>
<div>
    <h2>{{ showInfo }}</h2>
    <h2>{{ level }}</h2>
</div>
  
</template>

<script>
import { computed, reactive } from 'vue'
export default {
    setup() {
        const info = reactive({
            name: 'lili',
            age: 18,
            result: 100
        })
        // computed方法
        const showInfo = computed(() => {
            return info.name + ' ' + info.age 
        })
        const level = computed(() => {
            return info.result > 80 ? '优秀' : '良好'
        })
        const total = computed({
            set: function(newValue) {

            },
            get: function() {

            }
        })
        // computed返回的也是一个ref
        // 修改时 需要.value
        return {
            info,
            showInfo,
            level,
            total
        }

    }
}
</script>

<style scoped>

</style>
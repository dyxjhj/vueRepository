<template>
<div>
    <h2>APP中的info: {{ info.name }} + {{ info.age }}</h2>
    <h2>APP中的info: {{ name }} + {{ age }}</h2>
</div> 
<!-- unref val = isRef(val) ? val.value : val -->
<!-- isRef -->
<!-- shallowRef -->
<!-- triggerRef -->
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
    setup() {
        const info = reactive({
            name: 'lili',
            age: 18,
            result: 100
        })
        // 解构 数据不是响应式的
        // const {name,age} = info 
        const {name,age} = toRefs(info)
        const result = toRef(info, 'result')
        return {
            info,
            name,
            age,
            result
        }


    }
}
</script>

<style scoped>

</style>
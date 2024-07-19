<template>
<div>
    <h2>Home</h2>
    
</div>
  
</template>

<script>
// 导入封装的Mixin对象
import msgMixin from '../mixins/msg-mixin'
export default {
    mixins: [msgMixin],
    // 自己仍然可以定义data 冲突时保留组件自身的数据
    data () {
        return {
            
        }
    },
    // 生命周期函数也会执行 合并到数组中，都会被调用
    created () {
        
    }
    // 值为对象的选项，例如methods，components，directives，将被合并为同一个对象
    // 如果对象的key相同，取组件对象的键值对

}
</script>

<style scoped>

</style>
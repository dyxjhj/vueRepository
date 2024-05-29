<template>
<div class="app">
  <!-- template中的ref对象自动解包 -->
  <h2>当前计数 {{ counter }}</h2>
  <button @click="add">++</button>
  <button @click="reduce">--</button>

</div>
  
</template>

<script>
  // setup函数的参数 props context
  // props就是父组件传递过来的属性会被放到props对象中 setup中使用中直接通过props参数获取
  // 定义props的类型，在props选项中定义
  // template中可以使用props中的属性
  // setup函数中想要获取props，不可以通过this获取
  // props有直接作为参数传递到setup函数中 可以直接通过参数来获取
  // context 包含三个属性： attrs slots emit(组件内部发出事件)
  
  import { ref } from 'vue'
  export default {
    setup() {
      // 定义counter
      // 默认定义的数据不是响应式的数据
      // ref 可响应的值
      let counter = ref(0)
      const add = () => {
        counter.value++
      }
      const reduce = () => {
        counter.value--
      }

      // 返回
      return {
        counter,
        add,
        reduce,
      }
    }

  }
</script>

<style scoped>

</style>
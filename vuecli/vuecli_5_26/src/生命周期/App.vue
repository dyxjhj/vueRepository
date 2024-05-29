<template>
<div>
    <h2>{{ msg }}</h2>
    <button @click="msgChange">修改</button>
</div>
  
</template>

<script>
export default {
    data () {
        return {
            msg: "hello world"
        }
    },
    methods: {
      msgChange() {
        this.msg = "hahahhahha"
      }  
    },
    // 组件创建之前
    beforeCreate () {
        console.log("beforeCreate")
    },
    // 组件创建完成
    created () {
        console.log("created")
    },
    // 组件template准备挂载
    beforeMount () {
        console.log("beforeMount")
    },
    // 组件挂载到虚拟DOM\
    mounted () {
        console.log("mounted")
    },
    // 数据发生改变 准备更新DOM
    beforeUpdate () {
        console.log("beforeUpdate")
    },
    // 更新DOM
    updated () {
        console.log("updated")
    },
    // 卸载VNode => DOM元素
    beforeDestroy () {
        console.log("beforeDestroy")
    },
    // DOM元素卸载完成
    destroyed () {
        console.log("destroyed")
    },

}
</script>

<style scoped>

</style>
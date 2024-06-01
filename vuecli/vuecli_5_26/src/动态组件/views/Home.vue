<template>
<div>
    <h2>Home组件</h2>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="homeBtnClick">btn</button>
</div>
  
</template>

<script>
export default {
    // keep-alive的include属性中的名字
    name: 'home',
    emits: ['homeClick'],
    methods: {
        homeBtnClick() {
            this.$emit("homeClick","home")
        }
    },
    created () {
        console.log("home created")
    },
    // 销毁前
    unmouted() {
        console.log("home unmounted")
    },
    activated () {
        console.log("activated")
    },
    deactivated () {
        console.log("deactivated")
    }
}
</script>

<style scoped>

</style>
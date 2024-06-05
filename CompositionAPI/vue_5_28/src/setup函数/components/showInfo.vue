<template>
<div>
    <h2>{{ info }}</h2>
    
</div>
  
</template>

<script>
export default {
    // 接收父组件传值
    props: {
        info: {
            type: Object,
            default: () => {}
        }
    }

}
</script>

<style scoped>

</style>
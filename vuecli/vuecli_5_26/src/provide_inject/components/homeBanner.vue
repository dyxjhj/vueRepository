<template>
<div class="banner">
    <h2>homeBanner:{{ name }} + {{ age }} + {{ msg }}</h2>
</div>
  
</template>

<script>
export default {
    // inject API
    // 数组写法
    inject: ["name", "age", "msg"]

}
</script>

<style scoped>

</style>

<template>
<div class="app">
  <!-- 访问store中的counter -->
  <h2>App当前计数{{ $store.state.counter }}</h2>

  <homePage></homePage>
    
</div>
  
</template>

<script>
import homePage from './views/homePage.vue'
export default {
  components: {
    homePage,
  },
}
</script>

<style scoped>

</style>
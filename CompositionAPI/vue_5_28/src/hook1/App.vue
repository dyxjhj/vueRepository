<template>
<div>
    <button @click="currentPage = 'home'">切换home页面</button>
    <button @click="currentPage = 'about'">切换About页面</button>
    <component :is="currentPage"></component>

</div>
  
</template>

<script>
import useTitle from './useTitle'
import Home from './Home.vue'
import About from './About.vue'
import { ref } from 'vue'
export default {
    components: {
      Home,
      About  
    },
    setup() {
        let currentPage = ref('home')
        
        return {
            currentPage,    
        }
    }

}
</script>

<style scoped>

</style>
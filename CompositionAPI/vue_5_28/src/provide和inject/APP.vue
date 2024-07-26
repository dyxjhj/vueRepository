<template>
<div>
    <h2>APPVue {{ name + age}}</h2>
    <showInfoVue></showInfoVue>
    
</div>
  
</template>

<script>
import { provide } from 'vue'
import showInfoVue from './showInfo.vue'
export default {
    components: {
        showInfoVue,
    },
    setup() {
        provide('name', 'lili')
        provide('age', 18)
    }
    
}
</script>

<style scoped>

</style>
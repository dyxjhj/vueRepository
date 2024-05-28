<template>
<div class="banner">
    <button @click="bannerClick">bannner</button>
    
</div>
  
</template>

<script>
// 安装第三方库
// npm install hy-event-store
import eventBus from '../utils/eventBus'
export default {
    methods: {
        bannerClick() {
            console.log("bannerClick")
            eventBus.emit('eventDoing', "zhang", 18)
        }
    }

}
</script>

<style scoped>

</style>
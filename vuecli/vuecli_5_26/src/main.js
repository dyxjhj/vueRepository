import { createApp } from 'vue'
// import App from './example/App.vue'
// import App from './slot/App.vue' 
// import App from './provide_inject/App.vue'
// import App from './eventBus/App.vue'
// import App from './生命周期/App.vue'
// import App from './ref/App.vue'
// import App from './动态组件/App.vue'
// import App from './keep-alive/App.vue'
// import App from './v-model组件/App.vue'
import App from './Mixin/App.vue'

const app = createApp(App)
// 全局混入 会影响每一个组件
app.mixin({
    created() {

    }
})
createApp(App).mount('#app')

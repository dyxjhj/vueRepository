import { createApp } from 'vue'
import App from './App.vue'
// 导入store
import store from './store'

// 使用store
createApp(App).use(store).mount('#app')

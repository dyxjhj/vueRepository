import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import App from './App.vue'
// import App from './setup_defData/App.vue'
// import App from './setup函数/App.vue'
// import App from './setup其它函数/APP.vue'
// import App from './toRefs/APP.vue'
// import App from './computed属性/APP.vue'
// import App from './ref/APP.vue'
import App from './provide和inject/APP.vue'



createApp(App).use(ElementPlus).mount('#app')

// 引入 createApp 用于创建应用
import { createApp } from 'vue'
// 引入 App 根组件
import App from './App.vue'

import {createPinia} from 'pinia'


// 创建应用
const app = createApp(App)
const pinia = createPinia()
// 使用路由器
app.use(pinia)
// 挂载整个应用到app容器中
app.mount('#app')

// 创建一个路由器 并暴露出去
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// 引入一个个可能呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 创建路由器
const router = createRouter({
    // 路由器的工作模式
    history: createWebHistory(),
    // 一个一个的路由规则
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        }, {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiang',
                    path: 'detail/:id/:title/:content',
                    // :content? 可选参数
                    component: Detail,

                    // - 将路由收到的所有params参数作为props传给路由组件
                    // props: true

                    // - 函数写法 可以自己决定讲什么作为props给路由参数
                    props(route) {
                        return route.query
                    }

                    // 对象写法

                }
            ]
        }, {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})

// 暴露 路由
export default router
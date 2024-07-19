import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
// 直接导入不会进行分包处理
// import Home from '../views/home.vue'
// import About from '../views/about.vue'
// 使用函数导入
// /*webpackChunkName: 'home' */ 魔法注释
const Home = () => import(/*webpackChunkName: 'home' */"../views/home.vue")
const About = () => import(/*webpackChunkName: 'about' */"../views/about.vue")
const User = () => import("../views/user.vue")



// 创建路由
const router = createRouter({
    history: createWebHashHistory(), //指定采用的模式为hash模式
    // history: createWebHistory(), //指定采用的模式为history模式

    // 映射关系
    routes: [
        {
            name: "home", //路由的唯一标识
            path: '/',
            redirect: '/home', //默认路径重定向
            // 自定义属性
            meta: {
                name: 'li',
                age: 10,
            },
            // 二级路由
            // children: [
            //     {
            //         path: '/home',
            //         redirect: '/home/homeChildren1'
            //     },
            //     {
            //         path: '/homeChildren1',
            //         component: () => import('../views/homeChildren1.vue')
            //     }
            // ]
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/about',
            component: About,
        },
        {
            // http://localhost:8080/#/user和http://localhost:8080/#/user/123都匹配到User组件
            // 多个不同的用户可以使用同一个组件
            path: '/user/:id', //动态路由 
            component: User,
        },
        // 匹配到不存在的路径
        {
            path: "/:pathMatch(.*)", //path: "/:pathMatch(.*)*" 可以解析成以/分割的数组
            component: () => import("../views/404page.vue")

        }
    ]
})
let isAdmin = true;
if(isAdmin) {
    // 添加一级路由
    router.addRoute({
        path: '/admin',
        component: () => import('../views/admin.vue')
    })
    // 第一个参数，父组件的名字
    router.addRoute('home', {
        path: '/homeChildren1',
        component: () => import('../views/homeChildren1.vue')
    })
}
// 获取所有的动态路由对象
console.log(router.getRoutes())

export default router
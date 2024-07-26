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

        },
        // 路由导航守卫 订单路由注册
        {
            path: "/order", 
            component: () => import("../views/order.vue")

        },
        {
            path: "/login", 
            component: () => import("../views/login.vue")

        },
    ]
})
// 动态路由
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
// 获取所有的映射路由对象
console.log(router.getRoutes())

// 路由导航守卫
// beforeEach（全局的前置守卫） 在进行任何路由跳转之前 传入beforeEach中的函数都会被回调
// to:即将进入的路由 from:即将离开的路由
// 返回值
// false:取消当前导航
// 不返回或者undefined:进行默认导航
// 返回一个路由地址：1.可以是一个string类型的路径 2.可以是一个对象，对象中包含path,query,params等信息
// 需求：进入订单页面（order）时，判断用户是否登录(isLogin --> localStorage中保存token)
// 情况1：已经登录，直接跳转
// 情况2：没有登录，跳转到登录界面，进行登录
router.beforeEach((to, from) => {
    // 进入任何非login时进行拦截 跳转到login
    // if(to.path !== '/login') {
    //     return '/login'
    // }
    // 进入订单页面时判断
    // 获取token
    const token = localStorage.getItem('token')
    if(!token && to.path === '/order') {
        return '/login'
    }

})

export default router


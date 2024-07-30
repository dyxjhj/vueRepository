// import { createStore } from "../../node_modules/vuex";
import { createStore } from "vuex";
import homeModule from './modules/home'
import counterModule from './modules/counter'

// 对于数据的管理称为状态管理
// vuex中的状态和自己创建的普通的全局对象区别
// 1.vuex的状态存储是响应式的
// 2.store中的状态不能直接被改变
// 改变store中状态的唯一路径是显式提交（commit）mutation
const store = createStore({
    state() {
        return {
            counter: 1,
            rootCounter: 99,
            name: "zhang",
            age: 18,
            avaturURL: "http://xxxxxxx",
            users: [
                { id: 1, name: 'hang', age: 18 },
                { id: 2, name: 'wang', age: 20 },
                { id: 3, name: 'lang', age: 22 }
            ],
            info: {
                name: '张三',
                age: 19,
            }
        }
    },
    // 更改状态的唯一路径 提交Mutation
    mutations: {
        addClick(state) {
            console.log("mutations addClick")
            state.counter++
        },
        // payload传参
        changeName(state, payload) {
            state.name = 'yyz'
        },
        addCounter(state) {
            state.counter++
        },
        changeInfoName(state, payload) {
            state.info.name = payload;
        }
        // mutation常量类型 
        // 函数名在单独的js文件中定义成常量 
        // 使用 [CHANGE_INFO](state) {...}

        // mutation方法中的重要原则
        // mutation中不要执行异步操作 devTools无法跟踪到数据的变化
        // 网络请求来的数据也应该放在vuex中 方案：actions
    },
    // getters 类似于组件中的computed
    getters: {
        doubleCount(state) {
            return state.counter * 2
        },
        totalAge(state) {
            // reduce进行累加
            return state.users.reduce((preValue, item) => {
                return preValue + item.age
            }, 0)
        },
        // 第二个参数是getters,可以直接使用 
        message(state, getters) {
            return `name: ${state.name} usersTotalAge: ${getters.totalAge}`
        },
        // getters可以返回一个函数
        getUsersById(state) {
            // 函数写法 动态
            return function (id) {
                // 固定写法
                const users = state.users.find(item => item.id === 1)
                return users
            }

        }

    },
    // action 类似于mutation
    // action提交的是mutation 而不是直接修改状态
    // action中可以执行异步操作
    // action中的参数context 和store实例有相同方法和属性的context对象
    // 可以从其中获取到commit方法来提交一个mutation
    // 或者通过context.state和context.getters获取state和getters
    actions: {
        changeNameAction(context) {
            // 提交mutation
            context.commit('changeName')
        },
        // actions中的异步操作
        // 项目架构 
        // 1.将服务器请求来的数据在对应的页面组件中管理
        // 2.页面中的组件数据抽取到vuex中使用
        async fetchGetdataAction() {
            // 1.返回promise promise设置then
            // fetch("").then(res => {
            //     return res.json()
            // }).then
            // 2.prommise的链式调用
            // fetch("").then(res => {
            //     return res.json()
            // }).then(data => {
            //     console.log(data)
            // })
            // 3.await和async
            const res = await fetch('')
            const data = await res.json()
            console.log(data)

            // 异步函数自动返回promise
            // 手动返回promise
            // return new Promise((resolve,reject) => {
            //     context.commit('changName',payload)
            //     resolve()
            // })
        }

    },

    // 分模块
    modules: {
        home: homeModule,
        // 获取数据时 store.state.home.name
        counter: counterModule
        // getters，mutation，actions，派发事件都不需要根组件
        // module的命名空间
        // 默认情况下，模块内部的action和mutation仍然注册在全局的命名空间
        // 设置namespace:true
        // 加了命名空间后
        // $store.getters["counter/doubleCount"]

    }
})
// 单一状态树
// 用一个对象包含全部的应用层级的状态
// 一个应用程序只能包含一个store实例


export default store
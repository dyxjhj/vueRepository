// import { createStore } from "../../node_modules/vuex";
import { createStore } from "vuex";

// 对于数据的管理称为状态管理
// vuex中的状态和自己创建的普通的全局对象区别
// 1.vuex的状态存储是响应式的
// 2.store中的状态不能直接被改变
// 改变store中状态的唯一路径是显式提交（commit）mutation
const store = createStore({
    state() {
        return {
            counter: 1,
            name: "zhang",
            age: 18,
            avaturURL: "http://xxxxxxx",
            users: [
                {id: 1, name: 'hang', age: 18},
                {id: 2, name: 'wang', age: 20},
                {id: 3, name: 'lang', age: 22}
            ]
        }
    }, 
    // 更改状态的唯一路径 提交Mutation
    mutations: {
        addClick(state) {
            console.log("mutations addClick")
            state.counter++
        }
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
            return function(id) {
                // 固定写法
                const users = state.users.find(item => item.id === 1)
                return users
            }
            
        }

    },
    // 分模块
    modules: {

    }
})
// 单一状态树
// 用一个对象包含全部的应用层级的状态
// 一个应用程序只能包含一个store实例


export default store
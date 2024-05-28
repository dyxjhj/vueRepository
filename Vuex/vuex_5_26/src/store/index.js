// import { createStore } from "../../node_modules/vuex";
import { createStore } from "vuex";


// vuex中的状态和普通的全局对象区别
// 1.vuex的状态存储是响应式的
// 2.store中的状态不能直接被改变
// 改变store中状态的唯一路径是显式提交（commit）mutation
const store = createStore({
    state() {
        return {
            counter: 1,
            name: "zhang",
            age: 18,
            avaturURL: "http://xxxxxxx"
        }
    }, 
    // 更改状态的唯一路径 提交Mutation
    mutations: {
        addClick(state) {
            console.log("mutations addClick")
            state.counter++
        }
    }, 
    // 分模块
    modules: {

    }
})

export default store
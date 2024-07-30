export default {
    namespaced: true,
    state: () => ({
        return {
            counter: 1,
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
    }),
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
    }
    actions: {
        changeNameAction(context) {
            // 提交mutation
            context.commit('changeName')
        }
        async fetchGetdataAction() {
            const res = await fetch('')
            const data = await res.json()
            console.log(data)
        }

    },
}
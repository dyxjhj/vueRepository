import { def } from '@vue/shared'
const counter = {
    state: () => {
        count: 99
    },
    mutations: {
        addCount(state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state, getters, rootState) {
            return state.count + rootState.rootCounter
        }

    }

}
export default counter
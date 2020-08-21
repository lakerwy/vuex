import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    count: 0
}

const mutations={
    addCount(state,n=0) {
        return (state.count+=n)
    },
    reduceCount(state,n=0){
        return (state.count-=n)
    }
}

//更改Vuex的store中的状态的唯一方法就是提交mutations。
//commit推送一个mutation
const actions= {
    actionsAddCount(context, n=0) {
        console.log(context);
        return context.commit('addCount',n);
    },
    actionsReduceCount({commit}, n=0) {
        return commit('reduceCount', n);
    }
}
//计算属性传参
// computed: {
//         text:()=>(n)=>{
//             return require('../assets/img/f1_'+n+'.jpg')
//         }
//     }
//getters传参
const getters={
    getterCount: (state)=>(n)=>{
        return (state.count+=n)
    }
}
// const getters={
//     getterCount(state){
//         return (state.count+=10)
//     }
// }

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

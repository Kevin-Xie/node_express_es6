# Vuex

Vuex 是用来给Vue应用程序状态管理的， 

一个vue 对象只能有一个store，从vue 对象里面注入 store，就可以在所有子组件里面使用store 了

store = new Vuex.store{
     state: {
    
     },
     mutations: {

     }
}
store 里面 state 是全局的，是响应式的， 要修改store.state.xxx 的值，要通过commit 某个 mutation 来修改

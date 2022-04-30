import Vue from 'vue'
import {createStore} from 'vuex'

export default createStore({
    state: {
        books: {}
    },
    getters: {
        show(state){
            return state.count
        }
    },
    mutations: {
        add(state, data){
            state.books.push(data);
        }
    },
    actions: {},
    modules: {}
})

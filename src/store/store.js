import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    count:0,
    index:3,
    countName:'first',
    todos: [
      { id: 1, text: '..1.', done: true },
      { id: 2, text: '..22.', done: false },
      { id: 3, text: '..333.', done: false }
    ],
    
  },
  mutations:{
    increment:(state,parem) => {
      state.count += parem.m
    },
    decrement:state => state.count--,
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(t => t.id == id)
    },
    doneTodosText:(state,getters) => {
      return getters.doneTodos[0].text
    }
  }
})

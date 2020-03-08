import {createStore} from "@mpxjs/core";

const store = createStore({
  state: {
    todos: [
      {
        text: '123',
        done: false
      }, {
        text: '456',
        done: false
      }
    ]
  },
  getters: {},
  actions: {},
  mutations: {

    addTodo(state , payload){
      const  newTodo={
        text:payload,
        done:false
      }
      state.todos.push(newTodo)

    },
    toggleTodo(state , index){
      const item =state.todos[index]
      item.done=!item.done
    },
    deleteTodo(state , index){
      state.todos.splice(index)
    }
    ,
    deleteAllDone (state){

      state.todos=state.todos.filter(item => !item.done)
    },
    toggleAll (state,payload){
      state.todos.forEach(item=>{

        item.done=payload
      })
    }

  }


})

export default store

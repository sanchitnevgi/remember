import { ADD_TODO, CLEAR_TODOS, MARK_TODO, EDIT_TODO, RECEIVE_CACHED_TODOS, ADD_INIT_TODOS } from '../actions'
import { combineReducers } from 'redux'
import { makeTodo } from '../util/todoUtil'
import { initTodos } from '../constants/initTodos'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = makeTodo(action.text)
      return [ ...state, todo ]
    case MARK_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: action.completed }
          : todo
      )
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text }
          : todo
      )
    case ADD_INIT_TODOS:
      return initTodos
    case RECEIVE_CACHED_TODOS:
      return [ ...action.todos ]
    case CLEAR_TODOS:
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos
})

export default rootReducer

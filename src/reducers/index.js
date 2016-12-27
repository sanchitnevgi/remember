import { ADD_TODO, TOGGLE_TODO, CLEAR_TODOS } from '../actions'
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.todo ]
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed }
          : todo
      )
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

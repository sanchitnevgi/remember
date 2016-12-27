export const NEW_TODO = 'NEW_TODO'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODOS = 'CLEAR_TODOS'
export const FETCH_TODOS = 'FETCH_TODOS'

export const newTodo = text => ({type: NEW_TODO, text})
export const addTodo = todo => ({type: ADD_TODO, todo})
export const toggleTodo = id => ({type: TOGGLE_TODO, id})
export const fetchTodos = () => ({type: FETCH_TODOS})
export const clearTodos = () => ({type: CLEAR_TODOS})

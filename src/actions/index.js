export const ADD_TODO = 'ADD_TODO'
export const CLEAR_TODOS = 'CLEAR_TODOS'
export const FETCH_CACHED_TODOS = 'FETCH_CACHED_TODOS'
export const ADD_INIT_TODOS = 'ADD_INIT_TODOS'
export const RECEIVE_CACHED_TODOS = 'RECEIVE_CACHED_TODOS'
export const MARK_TODO = 'MARK_TODO'
export const EDIT_TODO = 'EDIT_TODO'

export const addTodo = text => ({type: ADD_TODO, text})
export const fetchCachedTodos = () => ({type: FETCH_CACHED_TODOS})
export const clearTodos = () => ({type: CLEAR_TODOS})
export const markTodo = (id, completed) => ({type: MARK_TODO, id, completed})
export const editTodo = (id, text) => ({type: EDIT_TODO, id, text})
export const receiveCachedTodos = todos => ({type: RECEIVE_CACHED_TODOS, todos})
export const addInitTodos = () => ({type: ADD_INIT_TODOS})

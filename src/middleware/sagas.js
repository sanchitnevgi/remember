import { takeEvery, select, put } from 'redux-saga/effects'
import { saveTodos, getTodos } from '../util/storageUtil'
import { ADD_TODO, EDIT_TODO, CLEAR_TODOS, MARK_TODO, FETCH_CACHED_TODOS, receiveCachedTodos } from '../actions'

function* cacheTodos() {
  try {
    const todos = yield select(state => state.todos)
    saveTodos(todos)
  } catch(e) {
    yield e
  }
}

function* getCachedTodos() {
  try {
    const todos = yield getTodos()
    yield put(receiveCachedTodos(todos))
  } catch(e) {
    yield e
  }
}

function* todoStorageSaga() {
  yield [
    takeEvery(FETCH_CACHED_TODOS, getCachedTodos),
    takeEvery([ADD_TODO, EDIT_TODO, CLEAR_TODOS, MARK_TODO], cacheTodos)
  ]
}

export default todoStorageSaga

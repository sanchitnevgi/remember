import { call, put, takeEvery } from 'redux-saga/effects'
import { saveTodo, toggleTodo, clearTodos } from '../util/storageUtil'
import { makeTodo } from '../util/todoUtil'
import { ADD_TODO, NEW_TODO, TOGGLE_TODO, CLEAR_TODOS } from '../actions'

function* cacheTodo(action) {
  try {
    switch (action.type) {
      case NEW_TODO:
        const todo = makeTodo(action.text)
        yield call(saveTodo, todo)
        yield put({type: ADD_TODO, todo})
        break
      case TOGGLE_TODO:
        yield call(toggleTodo, action.id)
        break
      case CLEAR_TODOS:
        yield call(clearTodos)
        break
      default:
        break
    }
  } catch(e) {
    yield e
  }
}

function* todoStorageSaga() {
  yield takeEvery([NEW_TODO, TOGGLE_TODO, CLEAR_TODOS], cacheTodo)
}

export default todoStorageSaga

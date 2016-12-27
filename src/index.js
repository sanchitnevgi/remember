import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import todoStorageSaga from './middleware/sagas'
import { addTodo } from './actions'
import { getTodos } from './util/storageUtil'
import App from './containers/App/App';
import './index.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

getTodos().then(todos => todos && todos.forEach(todo => store.dispatch(addTodo(todo))))

sagaMiddleware.run(todoStorageSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

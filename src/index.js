import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import todoStorageSaga from './middleware/sagas'
import { fetchCachedTodos, addInitTodos } from './actions'
import { isFirstRun, setAsRun } from './util/storageUtil'
import App from './containers/App/App';
import './index.css';

console.log(isFirstRun);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(todoStorageSaga)
if(isFirstRun) {
  setAsRun()
  store.dispatch(addInitTodos())
} else {
  store.dispatch(fetchCachedTodos())
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

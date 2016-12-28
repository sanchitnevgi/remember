import localforage from 'localforage'

const TODOS = 'TODOS'

const configStorage = () => {
  localforage.config({
    name        : 'remember-db',
    version     : 1.0,
    storeName   : 'todos',
    description : 'Todos'
  })
}
configStorage()

const getTodos = () => localforage.getItem(TODOS)

const saveTodos = todos => localforage.setItem(TODOS, todos)

export { getTodos, saveTodos }

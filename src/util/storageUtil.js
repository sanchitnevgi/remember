import localforage from 'localforage'

const TODOS = 'TODOS'
const HAS_RUN = 'HAS_RUN'

const configStorage = () => {
  localforage.config({
    name        : 'remember-db',
    version     : 1.0,
    storeName   : 'todos',
    description : 'Todos'
  })
}
configStorage()

const isFirstRun = !localStorage.getItem(HAS_RUN)

const setAsRun = () => localStorage.setItem(HAS_RUN, 1)

const getTodos = () => localforage.getItem(TODOS)

const saveTodos = todos => localforage.setItem(TODOS, todos)

export { getTodos, saveTodos, isFirstRun, setAsRun }

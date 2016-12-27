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

const saveTodo = todo => {
  getTodos().then(todos => {
    todos = todos || []
    localforage.setItem(TODOS, [ ...todos, todo ])
  })
}

const toggleTodo = id => {
  getTodos().then(todos => {
    todos = todos || []
    localforage.setItem(TODOS, todos.map(todo => todo.id === id ?
      { ...todo, completed: !todo.completed }
      : todo
    ))
  })
}

const removeTodo = id => {
  getTodos().then(todos => {
    todos = todos || []
    localforage.setItem(TODOS, todos.filter(todo => todo.id !== id))
  })
}

const clearTodos = () => {
  getTodos().then(todos => {
    todos = todos || []
    localforage.setItem(TODOS, todos.filter(todo => !todo.completed))
  })
}

export { saveTodo, removeTodo, getTodos, toggleTodo, clearTodos }

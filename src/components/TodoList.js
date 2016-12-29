import React from 'react'

const TodoList = ({clearTodos, children}) => (
  <div className='todo-list'>
    {children}
  </div>
)

export default TodoList

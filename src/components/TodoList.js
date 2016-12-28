import React from 'react'
import { connect } from 'react-redux'
import { clearTodos } from '../actions'

const TodoList = ({clearTodos, children}) => (
  <div className='todo-list'>
    <div id='clear-container'>
      <button id='clear-todos' onClick={clearTodos}>Clear</button>
    </div>
    <div>
      {children}
    </div>
  </div>
)

export default connect(null, { clearTodos })(TodoList)

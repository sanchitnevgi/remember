import React from 'react'
import Hammer from 'react-hammerjs'
import classNames from 'classnames'

const TodoItem = ({id, text, completed, toggleTodo}) => (
  <Hammer onTap={() => toggleTodo(id)}>
    <div className={classNames({'todo-item': true, 'completed': completed})}>
        <label>{text}</label>
    </div>
  </Hammer>
)

export default TodoItem

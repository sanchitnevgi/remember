import React, { Component } from 'react'
import { connect } from 'react-redux'
import { markTodo, editTodo } from '../../actions'
import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import TodoItem from '../../components/TodoItem'
import getColor from '../../util/colorUtil'

class TodoContainer extends Component {
  render() {
    const { todos, markTodo, editTodo } = this.props
    const colors = getColor()
    return (
      <div className='todo-container'>
        <TodoInput />
        <TodoList>
          {
            todos.filter(todo => !todo.completed).map(todo =>
              <TodoItem key={todo.id} {...todo} markTodo={markTodo} bgColor={colors.next().value} onEdit={editTodo}/>
            )
          }
        </TodoList>
        <div id='completed-container'>
          <span>Completed</span>
        </div>
        <TodoList>
          {
            todos.filter(todo => todo.completed).map(todo =>
              <TodoItem key={todo.id} {...todo} markTodo={markTodo} bgColor={colors.next().value} onEdit={editTodo}/>
            )
          }
        </TodoList>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, { markTodo, editTodo })(TodoContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import TodoItem from '../../components/TodoItem'

class TodoContainer extends Component {
  render() {
    const { todos, toggleTodo } = this.props
    return (
      <div className='todo-container'>
        <TodoInput />
        <TodoList>
          {
            todos.map(todo =>
              <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
            )
          }
        </TodoList>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, { toggleTodo })(TodoContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { markTodo, editTodo, clearTodos } from '../../actions'
import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import TodoItem from '../../components/TodoItem'
import getColor from '../../util/colorUtil'

class TodoContainer extends Component {
  render() {
    const { todos, markTodo, editTodo, clearTodos } = this.props
    const colors = getColor()
    return (
      <div className='todo-container'>
        <TodoInput />
        <div className='todo-lists-container'>
          <TodoList>
            {
              todos.filter(todo => !todo.completed).map(todo =>
                <TodoItem key={todo.id} {...todo} markTodo={markTodo} bgColor={colors.next().value} onEdit={editTodo}/>
              )
            }
          </TodoList>
          <div className='heading-container'>
            <span>Completed</span>
          </div>
          <TodoList>
            {
              todos.filter(todo => todo.completed).map(todo =>
                <TodoItem key={todo.id} {...todo} markTodo={markTodo} bgColor={colors.next().value} onEdit={editTodo}/>
              )
            }
          </TodoList>
          <div className='heading-container'>
            <button onClick={clearTodos}>Clear completed</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, { markTodo, editTodo, clearTodos })(TodoContainer)

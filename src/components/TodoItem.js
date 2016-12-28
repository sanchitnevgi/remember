import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import { DIRECTION_LEFT, DIRECTION_RIGHT } from 'hammerjs';
import classNames from 'classnames'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, editText: props.text}
    this.handleSwipe = this.handleSwipe.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }
  handleSwipe = ({ direction }) => {
    if(direction === DIRECTION_RIGHT) {
      this.props.markTodo(this.props.id, true)
    }
    else if(direction === DIRECTION_LEFT) {
      this.props.markTodo(this.props.id, false)
    }
  }
  editTodo = () => {
    this.setState({editing: false})
    this.props.onEdit(this.props.id, this.state.editText)
  }
  handleDoubleTap = () => {
    this.setState({editing: true})
  }
  handleBlur = () => {
    this.editTodo()
  }
  handleKeyDown = e => {
    if(e.which === 13) {
      this.editTodo()
    }
  }
  handleChange = e => {
    this.setState({editText: e.target.value})
  }
  render() {
    const { text, completed, bgColor } = this.props
    let { editing } = this.state
    return (
      <div className={classNames({'todo-item-container': true, 'editing': editing})} style={{backgroundColor: bgColor}}>
        <Hammer onSwipe={this.handleSwipe} onDoubleTap={this.handleDoubleTap}>
          <div className={classNames({'todo-item': true, 'completed': completed})}>
            <label>{text}</label>
          </div>
        </Hammer>
        <div className='todo-edit-container'>
          <input type='text' value={this.state.editText} onChange={this.handleChange} onBlur={this.handleBlur} onKeyDown={this.handleKeyDown}/>
        </div>
      </div>
    )
  }
}

export default TodoItem

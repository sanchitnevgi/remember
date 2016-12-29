import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import Hammer from 'react-hammerjs'
import classNames from 'classnames'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, editText: props.text, isPressed: false,
      lastX: null, deltaX: 0, opacity: 1}
    this.editTodo = this.editTodo.bind(this)
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
  handleTouchStart = e => {
    this.setState({lastX: e.touches[0].pageX, isPressed: true})
  }
  handleMouseDown = () => {
  }
  handleTouchMove = e => {
    if(this.state.isPressed)
      e.preventDefault()
    let deltaX = e.touches[0].pageX - this.state.lastX
    this.setState({deltaX, opacity: (240-deltaX)/240})
    if(deltaX > 240) {
      this.props.markTodo(this.props.id, true)
    }
  }
  handleMouseMove = () => {
  }
  handleTouchEnd = () => {
    this.setState({isPressed: false, lastX: null, deltaX: 0, opacity: 1})
  }
  handleMouseUp = () => {
  }
  handleChange = e => {
    this.setState({editText: e.target.value})
  }
  render() {
    const { text, completed, bgColor } = this.props
    let { editing, isPressed, deltaX, opacity } = this.state
    let style = isPressed ? {x: deltaX, opacity} : {x: spring(0), opacity: spring(1)}
    return (
      <Motion style={style}>
        {({x, opacity}) => {
          return <div className={classNames({'todo-item-container': true, 'editing': editing})} style={{
            backgroundColor: bgColor,
            opacity,
            transform: `translate3d(${x}px, 0, 0)`,
            WebkitTransform: `translate3d(${x}px, 0, 0)`
          }} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
            <Hammer onDoubleTap={this.handleDoubleTap}>
              <div className={classNames({'todo-item': true, 'completed': completed})}>
                <label>{text}</label>
              </div>
            </Hammer>
            <div className='todo-edit-container'>
              <input type='text' value={this.state.editText} onChange={this.handleChange} onBlur={this.handleBlur} onKeyDown={this.handleKeyDown}/>
            </div>
          </div>
        }}
      </Motion>
    )
  }
}

export default TodoItem

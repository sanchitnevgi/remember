import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class TodoInput extends Component {
  state = {
    text: ''
  }
  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.addTodo(text)
      this.setState({ text: '' })
    }
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div id='todo-header'>
        <input
          type="text"
          placeholder='Add todo'
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
      </div>
    )
  }
}

export default connect(null, {addTodo})(TodoInput)

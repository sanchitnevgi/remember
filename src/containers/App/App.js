import React, { Component } from 'react';
import TodoContainer from '../TodoContainer/TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <TodoContainer />
      </div>
    )
  }
}

export default App;

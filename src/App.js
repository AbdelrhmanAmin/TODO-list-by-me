import React, { Component } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import './App.css';

class App extends Component {
  state = {
    todos : []
  }
  remove = (ts) => {
   const todos = this.state.todos.filter(t => t.ts !== ts)
   this.setState(() => ({ todos }));
  }
  add = (todo) => {
    this.setState(() => {
      return {todos: [...this.state.todos,{
        value:todo, ts:Date.now()
      }]}
    })
  }
  render() {
    return (
      <div className="App">
        <h1>TO-DO</h1>
        <Input add={this.add}/>
        <div class="container">
          <div class="jumbotron">
        <List todos={this.state.todos}  remove={this.remove}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

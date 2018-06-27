import React, { Component } from 'react';
import './App.css';
import Person from './Component/Person/Person'

class App extends Component {
  showSomeAlert = ()=>{
    alert("Hello! I am an alert box!");
  }
  render() {
    return (
      <div className="App">
          <h1>Hi! This is from React app</h1>
          <Person name='shahriar' />
          <Person name='alison' />
          <Person name='spancer'>Team Leader</Person>
          <button onClick={this.showSomeAlert}>Click Me</button>
      </div>
    );
  }
}

export default App;

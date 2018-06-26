import React, { Component } from 'react';
import './App.css';
import Person from './Component/Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hi! This is from React app</h1>
          <Person />
      </div>
    );
  }
}

export default App;

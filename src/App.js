import React, { Component } from 'react';
import './App.css';
import Person from './Component/Person/Person'

class App extends Component {
  state = {
    people: [
      {name: 'shahriar'},
      {name: 'alison'},
      {name: 'spancer'}
    ]
  }

  onChangeNameHandler = ()=>{
    this.setState({
      people: [
        {name: 'hanna'},
        {name: 'charllot'},
        {name: 'spancer'}
      ]
    })
  }

  showSomeAlert = ()=>{
    alert("Hello! I am an alert box!");
  }
  render() {
    return (
      <div className="App">
          <h1>Hi! This is from React app</h1>
          <Person name={this.state.people[0].name} />
          <Person name={this.state.people[1].name} />
          <Person name={this.state.people[2].name} click={this.onChangeNameHandler}>Team Leader</Person>
          <button onClick={this.showSomeAlert}>Click Me</button>
          <button onClick={this.onChangeNameHandler}>Change Me</button>
      </div>
    );
  }
}

export default App;

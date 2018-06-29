import React, { Component } from 'react';
import './App.css';
import Person from './Component/Person/Person';
import Country from './Component/Country/Country';
import LogoBD from './Component/Country/Content/Bangladesh.png';
import LogoFR from './Component/Country/Content/France.png';
import LogoSP from './Component/Country/Content/Spain.png';

class App extends Component {
  state = {
    people: [
      {name: 'shahriar'},
      {name: 'alison'},
      {name: 'spancer'}
    ],
    showList : true,
    country:[
      {name: 'Bangladesh', flag: LogoBD},
      {name: 'Spain', flag: LogoSP},
      {name: 'France', flag: LogoFR}
    ],
    showCountryList : false
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

  onChangeSetNewNameHandler = (event)=>{
    this.setState({
      people: [
        {name: event.target.value },
        {name: 'charllot'},
        {name: 'spancer'}
      ]
    })
  }

  showSomeAlert = (msg)=>{
    alert(msg);
  }

  onToggleChangeHandler = ()=>{
    const currentStatus = this.state.showList;
    this.setState({showList : !currentStatus});
  }

  CountryVisibilityHandler = ()=>{
    const currentStatus = this.state.showCountryList;
    this.setState({showCountryList : !currentStatus});
  }

  onDeleteHandler = (index)=>{
    const existingCountryList = this.state.country.slice();
    existingCountryList.splice(index, 1);
    this.setState({country : existingCountryList});
  }

  render() {
    let People = null;
  
    if(this.state.showList){
         People = (
          <div>
            <Person name={this.state.people[0].name}  />
            <Person name={this.state.people[1].name} setNewName={this.onChangeSetNewNameHandler} />
            <Person name={this.state.people[2].name} click={this.onChangeNameHandler}>Team Leader</Person>
          </div>
        )
    }

    let CountryList = null;
    if(this.state.showCountryList){
      CountryList = (
        <div>
          {
            this.state.country.map((country, index)=>{
              return <Country name={country.name} flag={country.flag} onDelete={this.onDeleteHandler.bind(this, index)}  />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
          <h1>Hi! This is from React app</h1>
          {People}
          {CountryList}
          <button onClick={this.showSomeAlert.bind(this, 'The recommended way')}>Click Me 1</button>
          <button onClick={()=>this.showSomeAlert('Not the recommended way to bind, has performance issue ')}>Click Me 2</button>
          <button onClick={this.onChangeNameHandler}>Change Me</button>
          <button onClick={this.onToggleChangeHandler}>Toggle List</button>
          <button onClick={this.CountryVisibilityHandler}>Toggle Country</button>
      </div>
    );
  }
}

export default App;

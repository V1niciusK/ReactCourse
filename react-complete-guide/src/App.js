import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Vinicius',
        age: 27
      },
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Ashley',
        age: 21
      },
      {
        name: 'Staphanie',
        age: 26
      }
    ],
    otherState: 'other status'
  }

  nameSwitchHandler = () => {
    //console.log('click detected');
    //DO NOT DO THIS this.state.persons[1].name = 'Maximilian';
    this.setState({persons:[
      {
        name: 'Vinicius',
        age: 27
      },
      {
        name: 'Maximilian',
        age: 28
      },
      {
        name: 'Ashley',
        age: 21
      },
      {
        name: 'Staphanie',
        age: 26
      }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.nameSwitchHandler}>Name switcher</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}>I'm no longer the only girl in this list</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is the compiled code'));
  }
}

export default App;

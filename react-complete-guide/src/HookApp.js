import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  
    const [ personsState, setPersons ] = useState({
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
      });

      const nameSwitchHandler = () => {
        //console.log('click detected');
        //DO NOT DO THIS -> this.state.persons[1].name = 'Maximilian';
        setPersons({persons:[
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={nameSwitchHandler}>Name switcher</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        <Person name={personsState.persons[3].name} age={personsState.persons[3].age}>I'm no longer the only girl in this list</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is the compiled code'));
}

export default app;

/* 
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
    //DO NOT DO THIS -> this.state.persons[1].name = 'Maximilian';
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
 */
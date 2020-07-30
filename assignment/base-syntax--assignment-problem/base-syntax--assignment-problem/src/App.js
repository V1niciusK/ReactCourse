import React, { Component } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

class App extends Component {
  state = {
    userName: [
      { email: 'testino@test.co.uk', age: 55 },
      { email: 'user_name@test.co.uk', age: 18 },
      { email: 'example2change@test.co.uk', age:25 }
    ]
  }

  inputChangeHandler = (event) => {
    this.setState({
      userName: [
        { email: 'testerrific@test.co.uk', age: 56},
        { email: 'userName@test.co.uk', age: 18 },
        { email: event.target.value, age:27 }
      ]
    });
  } 

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <br />
        <br />
        <UserInput
          defaultUserName={this.state.userName[2].email}
          changeDetected={this.inputChangeHandler}
        />
        <UserOutput firstP='test@test.co.uk'>Any paragraph texts of my choice</UserOutput>
        <UserOutput firstP='first paragraph here'>Second paragraph here</UserOutput>
        <UserOutput firstP={this.state.userName[0].email}>Second paragraph here: {this.state.userName[1].email}</UserOutput>
    <UserOutput firstP={this.state.userName[2].email}>The dude's age is {this.state.userName[2].age}</UserOutput>
      </div>
    );
  }
}

export default App;

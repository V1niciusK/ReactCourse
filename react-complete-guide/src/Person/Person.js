import React from 'react';
import './Person.css';

const Person = (props) => {
    return(
    <div className="Person">
        <h2>Hello! My name is {props.name}</h2>
        <p onClick={props.click}>I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    );
};

export default Person;
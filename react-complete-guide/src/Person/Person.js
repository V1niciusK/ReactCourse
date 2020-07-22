import React from 'react';

const Person = (props) => {
    return(
    <div>
        <p>Hello! My name is {props.name}</p>
        <p>I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    );
};

export default Person;
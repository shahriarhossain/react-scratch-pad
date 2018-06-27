import React from 'react';
import Person from './Person.css';

const person = (props)=>{
    return (
        <div className="Person">
            <p><b onClick={props.click}>{props.children}</b> I am {props.name}. Lets generate a dynamic content. Random Number {Math.random()} </p>
            <input type="text" onChange = {props.setNewName}/>
        </div>
    )
}

export default person;
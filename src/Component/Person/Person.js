import React from 'react';

const person = (props)=>{
    return (
        <div>
            <p><b onClick={props.click}>{props.children}</b> I am {props.name}. Lets generate a dynamic content. Random Number {Math.random()} </p>
            <input type="text" onChange = {props.setNewName}/>
        </div>
    )
}

export default person;
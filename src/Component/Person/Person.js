import React from 'react';

const person = (props)=>{
    return (
        <div>
            <p><b>{props.children}</b> I am {props.name}. Lets generate a dynamic content. Random Number {Math.random()} </p>
        </div>
    )
}

export default person;
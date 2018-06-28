import React from 'react';
import Country from './Country.css'

const country = (props)=>{
    return (
        <div className="Country">
            <p>{props.name}</p>
            <img src={props.flag} alt={props.name}/>
        </div>
    )
}

export default country;
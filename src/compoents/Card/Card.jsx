import React from 'react';
import './Card.css'
const Card =(props)=>
{
    return(
    <div className='card-container'>
        <img alt='' src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`}/>
       <h1> {props.monster.name}</h1>
       <p>{props.monster.email}</p>
    </div>)
}
export default Card;


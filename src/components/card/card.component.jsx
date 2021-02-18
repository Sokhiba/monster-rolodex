import React from 'react';
import './card.styles.css';

export const Card = props =>{
    return(
        <div className='card-container'>
            <img src='https://robohash.org/${props.monsters.id}?set=set2&size=120x120' alt="monster"/>
           <h2>{props.monster.name }</h2>
           <p>{props.monster.email}</p>
            </div>


    )
}
import React from 'react';
import './card.styles.css';

export const Card = (props) => (

    <div className="card-container">
        <img style={ { objectFit: 'contain', width: '200px' } } alt={`cat${props.cat.id}`}  src={props.cat.id === 11 ? `/cats-arena/omer-cat.png` : `https://robohash.org/${props.cat.id}?set=set4&size=200x200` } />
            <h2>{ props.cat.name }</h2>
            <p>{ props.cat.email }</p>
    </div>

);
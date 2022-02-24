import React from 'react';
import './card.styles.css';

export const Card = (props) => (
	<div className='card-container'>
		<img src={`https://robohash.org/${props.monster.id}?set=set4`}></img>
		<h2 className='card-container'>{props.monster.name}</h2>
		<p>{props.monster.email}</p>
	</div>
);
import React from 'react';
import './search-box.component';

export const SearchBox = ({ placeholder, handleChange }) => (
 	<input 
 		className='search'
 		type='search' 
 		placeholder={placeholder} 
 		onChange={handleChange}
 	/>
	);
import React from 'react';
import Carrousel from './Carrousel';
import CountTime from './CountTime';
export default function Featured() {
	return (
		<div style={{ position: 'relative' }}>
			<Carrousel />
			<div className='artist_name'>
				<div className='wrapper'>Coding Workshop</div>
			</div>
			<CountTime />
		</div>
	);
}

import React from 'react';
import Description from '../highlights/Description';
import Discount from './Discount';

export default function Highlights() {
	return (
		<div className='highlight_wrapper'>
			<Description />
			<Discount />
		</div>
	);
}

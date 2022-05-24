import React from 'react';
import Button from '@mui/material/Button';
import ticketIcon from '../../resources/images/icons/ticket.png';

export default function Buttons({ text, bck, link, color }) {
	return (
		<Button
			href={link}
			variant='contained'
			size='smal'
			style={{
				backgroundColor: { bck },
				color: { color },
			}}>
			<img src={ticketIcon} alt='icon_button' className='iconImage' />
			{text}
		</Button>
	);
}

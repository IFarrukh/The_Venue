import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';

export default function CountTime() {
	const [deadline] = useState('Dec, 16, 2023');
	const [days, setDays] = useState('0');
	const [hours, setHours] = useState('0');
	const [minutes, setMinutes] = useState('0');
	const [seconds, setSeconds] = useState('0');

	const getTimeUntil = () => {
		const time = Date.parse(deadline) - Date.parse(new Date());
		if (time) {
			setSeconds(Math.floor((time / 1000) % 60));
			setMinutes(Math.floor((time / 1000 / 60) % 60));
			setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
			setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		}
	};

	useEffect(() => {
		setInterval(() => getTimeUntil(deadline), 1000);
	});

	return (
		<Slide left>
			<div className='countdown_wrapper'>
				<div className='countdown_top'>Event starts in</div>
				<div className='countdown_bottom'>
					<div className='countdown_item'>
						<div className='countdown_time'>{days}</div>
						<div className='countdown_tag'>Days</div>
					</div>

					<div className='countdown_item'>
						<div className='countdown_time'>{hours}</div>
						<div className='countdown_tag'>Hs</div>
					</div>

					<div className='countdown_item'>
						<div className='countdown_time'>{minutes}</div>
						<div className='countdown_tag'>Min</div>
					</div>

					<div className='countdown_item'>
						<div className='countdown_time'>{seconds}</div>
						<div className='countdown_tag'>Sec</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}

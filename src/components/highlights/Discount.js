import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function Discount() {
	const [discountStarts, setDiscountStarts] = useState(0);
	const [discountEnds] = useState(30);

	const porcentage = () => {
		if (discountStarts < discountEnds) {
			setDiscountStarts(discountStarts + 1);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			porcentage();
		}, 30);
	});

	return (
		<div className='center_wrapper'>
			<div className='discount_wrapper'>
				<Fade onReveal={() => porcentage()}>
					<div className='discount_porcentage'>
						<span>{discountStarts}%</span>
						<span>OFF</span>
					</div>
				</Fade>
				<Slide right>
					<div className='discount_description'>
						<h3>Purchase tickets before 20th June</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
						</p>
						<div>Button</div>
					</div>
				</Slide>
			</div>
		</div>
	);
}

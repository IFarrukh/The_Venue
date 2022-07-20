import React, { useState } from 'react';
import Buttons from '../utils/Buttons';
import Zoom from 'react-reveal/Zoom';

Pricing.defaultProps = {
	prices: [100, 120, 160],
	positions: ['Balcony', 'Medium', 'Star'],
	desc: [
		'sdajdjahjsjkajkahjkhfkhasfsfsf',
		'ajdhjkahdjkhajkdhjkahsdjksadh',
		'dakshgdaggskhkjahkjhjsfsfdsff',
	],
	linkto: [
		'https://www.google.com/',
		'https://www.google.com/',
		'https://www.google.com/',
	],
	delay: [500, 0, 500],
};

export default function Pricing({ prices, positions, desc, linkto, delay }) {
	const [pricing] = useState(prices);
	const [position] = useState(positions);
	const [description] = useState(desc);
	const [link] = useState(linkto);
	const [time] = useState(delay);

	const showBoxes = () => {
		return pricing.map((box, i) => {
			return (
				<Zoom delay={time[i]} key={i}>
					<div className='pricing_item'>
						<div className='pricing_inner_wrapper'>
							<div className='pricing_title'>
								<span>${pricing[i]}</span>
								<span>{position[i]}</span>
							</div>
							<div className='pricing_description'>{description[i]}</div>
							<div className='pricing_buttons'>
								<Buttons
									text='Purchase'
									bck='#ffa800'
									color='#fffff'
									link={link[i]}
								/>
							</div>
						</div>
					</div>
				</Zoom>
			);
		});
	};

	return (
		<div className='bck_black'>
			<div className='center_wrapper pricing_section'>
				<h2>Pricing</h2>
				<div className='pricing_wrapper'>{showBoxes()}</div>
			</div>
		</div>
	);
}

import React from 'react';
import Slider from 'react-slick';
import imageOne from '../../resources/images/slide_one.jpg';
import imageTwo from '../../resources/images/slide_two.jpg';
import imageThree from '../../resources/images/slide_three.jpg';

export default function Carrousel() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
	};
	return (
		<div
			className='carrousel_wrapper'
			style={{
				overflow: 'hidden',
				height: `${window.innerHeight}px`,
			}}>
			<Slider {...settings}>
				<div>
					<div
						className='carrousel_image'
						style={{
							background: `url(${imageOne})`,
							height: `${window.innerHeight}px`,
						}}></div>
				</div>
				<div>
					<div
						className='carrousel_image'
						style={{
							background: `url(${imageTwo})`,
							height: `${window.innerHeight}px`,
						}}></div>
				</div>
				<div>
					<div
						className='carrousel_image'
						style={{
							background: `url(${imageThree})`,
							height: `${window.innerHeight}px`,
						}}></div>
				</div>
			</Slider>
		</div>
	);
}

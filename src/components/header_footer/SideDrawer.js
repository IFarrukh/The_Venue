import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';
import { scroller } from 'react-scroll';

export default function SideDrawer(props) {
	const scrollToElement = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -100,
		});
	};
	return (
		<Drawer anchor={'right'} open={props.open} onClose={props.close}>
			<List component='nav'>
				<ListItem button onClick={() => scrollToElement('Events start')}>
					Events start
				</ListItem>

				<ListItem button onClick={() => scrollToElement('Venue NFO')}>
					Venue NFO
				</ListItem>

				<ListItem button onClick={() => scrollToElement('highlights')}>
					Highlights
				</ListItem>

				<ListItem button onClick={() => scrollToElement('Pricing')}>
					Pricing
				</ListItem>

				<ListItem button onClick={() => scrollToElement('Location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
}

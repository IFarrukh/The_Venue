import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';

export default function SideDrawer(props) {
	return (
		<Drawer anchor={'right'} open={props.open} onClose={props.close}>
			<List component='nav'>
				<ListItem button onClick={() => console.log('Events start')}>
					Events start
				</ListItem>

				<ListItem button onClick={() => console.log('Venue NFO')}>
					Venue NFO
				</ListItem>

				<ListItem button onClick={() => console.log('Highlights')}>
					Highlights
				</ListItem>

				<ListItem button onClick={() => console.log('Pricing')}>
					Pricing
				</ListItem>

				<ListItem button onClick={() => console.log('Location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
}

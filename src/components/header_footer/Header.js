import React, { useState, useEffect } from 'react';
import SideDrawer from './SideDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
	const [drawer, setDrawer] = useState(false);
	const [headerShow, setHeaderShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHeaderShow(true);
		} else {
			setHeaderShow(false);
		}
	};

	const toggleDrawer = (open) => (event) => {
		setDrawer(open);
	};

	return (
		<div>
			<AppBar
				position='fixed'
				style={{
					backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
					boxShadow: 'none',
					padding: '10px 0px',
				}}>
				<Toolbar>
					<div className='header_logo'>
						<div className='font_righteous header_logo_venue'>The Venue</div>
						<div className='header_logo_title'>Programming Events</div>
					</div>
					<IconButton
						aria-label='Menu'
						color='inherit'
						onClick={toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>

					<SideDrawer open={drawer} close={toggleDrawer(false)}>
						Drawer
					</SideDrawer>
				</Toolbar>
			</AppBar>
		</div>
	);
}

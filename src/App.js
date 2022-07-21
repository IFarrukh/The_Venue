import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueinfo/VenueNfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
	return (
		<div className='App' style={{ height: '1500px' }}>
			<Element name='Events start'>
				<Header />
			</Element>
			<Featured />
			<Element name='Venue NFO'>
				<VenueNfo />
			</Element>
			<Element name='highlights'>
				<Highlights />
			</Element>
			<Element name='Pricing'>
				<Pricing />
			</Element>
			<Footer />
		</div>
	);
}

export default App;

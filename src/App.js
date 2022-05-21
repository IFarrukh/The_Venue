import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueinfo/VenueNfo';
import Highlights from './components/highlights/Highlights';
function App() {
	return (
		<div className='App' style={{ height: '1500px' }}>
			<Header />
			<Featured />
			<VenueNfo />
			<Highlights />
		</div>
	);
}

export default App;

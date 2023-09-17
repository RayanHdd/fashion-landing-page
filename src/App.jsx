import Nav from './components/Nav';
import Header from './components/Header';
import BestSelling from './components/BestSelling';
import Products from './components/Products';
import ExclusiveOffer from './components/ExclusiveOffer';
import DesignerClothes from './components/DesignerClothes';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<div className='bg-green-pallid -z-1 pb-10'>
			<Nav />
			<Header />
			</div>
			<BestSelling />
			<Products />
			<ExclusiveOffer />
			<DesignerClothes />
			<Feedback />
			<div className='bg-green-chromatic mt-[8rem] pt-11 -z-1 pb-10'>
			<Footer />
			</div> 
		</>
	);
};

export default App;

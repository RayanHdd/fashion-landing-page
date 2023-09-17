import { bestSellingCard1, bestSellingCard2, bestSellingCard3 } from '../assets/images';
import { star, arrowRight } from '../assets/icons';


const BestSelling = () => {
	return (
		<section className="margin-horizontal-screen h-auto pb-5">
			<h2 className="font-robotoSlab-medium text-green-chromatic text-4xl sm:text-5xl flex justify-center mt-10 sm:mt-16">
				Best selling
			</h2>
			<p className="font-poppins-medium text-green-chromatic text-sm sm:text-lg flex justify-center text-center mt-5">
				Get in on the trend with our curated selection of best-selling styles.
			</p>
			<main className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between py-10 max-lg:space-y-10">
					<div className="w-full lg:w-1/3 mr-8">
						<img src={bestSellingCard1} alt="best selling card 1" className="w-full" />
						<div>
							<p className="font-poppins-semiBold text-md mt-5 text-dark mx-auto text-center">
								Regular Fit Long Sleeve Top
							</p>
							<div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
								<span className="px-2">$38.99</span>
								<span className="px-2">|</span>
								<span className="px-2">5.0</span>
								<img src={star} alt="star icon" className="w-4" />
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/3 mr-8">
						<img src={bestSellingCard2} alt="best selling card 2" className="w-full" />
						<div>
							<p className="font-poppins-semiBold text-md mt-5 text-dark mx-auto text-center">
								Black Crop Tailored Jacket
							</p>
							<div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
								<span className="px-2">$62.99</span>
								<span className="px-2">|</span>
								<span className="px-2">4.9</span>
								<img src={star} alt="star icon" className="w-4" />
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/3">
						<img src={bestSellingCard3} alt="best selling card 3" className="w-full" />
						<div>
							<p className="font-poppins-semiBold text-md mt-5 text-dark mx-auto text-center">Textured Sunset Shirt</p>
							<div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
								<span className="px-2">$49.99</span>
								<span className="px-2">|</span>
								<span className="px-2">5.0</span>
								<img src={star} alt="star icon" className="w-4" />
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-4">
					<button className="mx-auto flex items-center space-x-2 border-2 border-green-chromatic font-poppins-medium text-md text-green-chromatic px-12 py-2 rounded">
						<span>See all</span>
						<img src={arrowRight} alt="arrow right icon" className="w-6" />
					</button>
				</div>
			</main>
		</section>
	);
};

export default BestSelling;

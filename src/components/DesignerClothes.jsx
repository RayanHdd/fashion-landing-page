import { designerClothCard1, designerClothCard2, designerClothCard3 } from '../assets/images';

const DesignerClothes = () => {
    return (
		<section className="margin-horizontal-screen">
			<h2 className="font-robotoSlab-medium text-green-chromatic text-4xl text-center lg:text-5xl flex flex-row justify-center mt-[8rem]">
            Designer Clothes For You
			</h2>
			<p className="font-poppins-medium text-green-chromatic text-center text-md flex flex-row justify-center mt-5">
            Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
			</p>
			<main className="container mx-auto">
				<div className="flex max-lg:flex-col justify-between py-12 lg:space-x-7 max-lg:space-y-7">
					<div className="lg:w-1/3">
						<img src={designerClothCard1} alt="best selling card 1" className="w-full" />
						<div>
							<p className="font-poppins-semiBold text-2xl mt-5 text-dark mx-auto text-center">Accessories</p>
							<p className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-[1.1rem] mt-1 text-center">
                            Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats. 
							</p>
						</div>
					</div>
					<div className="lg:w-1/3">
						<img src={designerClothCard2} alt="best selling card 2" className="w-full" />
						<div>
							<p className="font-poppins-semiBold text-2xl mt-5 text-dark mx-auto text-center">Dresses</p>
							<p className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-[1.1rem] mt-1 text-center">
                            Explore a stunning range of designer dresses, including evening gowns and chic day dresses. 
							</p>
						</div>
					</div>
					<div className="lg:w-1/3">
						<img src={designerClothCard3} alt="best selling card 3" className="w-full" />
						<div>
							<p className="font-poppins-semiBold text-2xl mt-5 text-dark mx-auto text-center">Outerwear</p>
							<p className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-[1.1rem] mt-1 text-center">
                            Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons. 
							</p>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

export default DesignerClothes
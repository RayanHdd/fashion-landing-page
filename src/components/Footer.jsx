import { facebook, twitter, instagram } from '../assets/icons';

const Footer = () => {
	return (
		<footer className='margin-horizontal-screen'>
			<div className="flex flex-row max-lg:space-x-12 max-w-full">
				<div>
					<h1 className="font-elephant text-2xl lg:text-4xl text-white">Rivo</h1>
					<h6 className="max-lg:hidden font-robotoSlab-medium text-xs lg:text-lg text-white mt-5">Social Media</h6>
					<div className="flex flex-row mt-3 space-x-3 lg:space-x-5">
						<a href="#">
							<img src={facebook} alt="facebook icon" className="w-4 lg:w-7" />
						</a>
						<a href="#">
							<img src={twitter} alt="twitter icon" className="w-4 lg:w-7" />
						</a>
						<a href="#">
							<img src={instagram} alt="instagram icon" className="w-4 lg:w-7" />
						</a>
					</div>
				</div>

				<div className="lg:ml-[12rem] mt-2">
					<h1 className="font-robotoSlab-medium text-lg text-white pb-4">SHOP</h1>
					<a href="#" className="font-poppins-medium text-green-pallid pb-3 block max-lg:text-sm">
						Products
					</a>
					<a href="#" className="font-poppins-medium text-green-pallid pb-3 block max-lg:text-sm">
						Overview
					</a>
					<a href="#" className="font-poppins-medium text-green-pallid pb-3 block max-lg:text-sm">
						Pricing
					</a>
					<a href="#" className="font-poppins-medium text-green-pallid block max-lg:text-sm">
						Releases
					</a>
				</div>

				<div className="ml-[8rem] mt-2">
					<h1 className="font-robotoSlab-medium text-md lg:text-lg text-white pb-4">COMPANY</h1>
					<a href="#" className="font-poppins-medium text-green-pallid pb-3 block max-lg:text-sm">
						About us
					</a>
					<a href="#" className="font-poppins-medium text-green-pallid pb-3 block max-lg:text-sm">
						Contact
					</a>
					<a href="#" className="font-poppins-medium text-green-pallid pb-3 block max-lg:text-sm">
						News
					</a>
					<a href="#" className="font-poppins-medium text-green-pallid block max-lg:text-sm">
						Support
					</a>
				</div>

				<div className="max-lg:hidden lg:block ml-[8rem] mt-2 flex flex-end flex-col">
					<h1 className="font-robotoSlab-medium text-lg text-white pb-4">STAY UP TO DATE</h1>
					<form>
						<div className="relative flex flex-row mt-2">
							<input
								type="email"
								className="py-2 pl-4 w-[20rem] text-sm text-white border border-[0.1rem] border-green-pallid2 rounded-sm bg-green-chromatic font-poppins-medium"
								placeholder="Enter your email"
							/>
							<button
								type="submit"
								className="text-green-chromatic font-poppins-medium -ml-1 bg-green-pallid2 font-medium rounded-sm text-sm px-4 py-2"
							>
								SUBMIT
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="lg:hidden flex flex-end flex-col mt-10">
					<h1 className="font-robotoSlab-medium text-md text-white pb-4">STAY UP TO DATE</h1>
					<form>
						<div className="relative flex flex-row mt-2">
							<input
								type="email"
								className="py-2 pl-4 w-[20rem] text-sm text-white border border-[0.1rem] border-green-pallid2 rounded-sm bg-green-chromatic font-poppins-medium"
								placeholder="Enter your email"
							/>
							<button
								type="submit"
								className="text-green-chromatic font-poppins-medium -ml-1 bg-green-pallid2 rounded-sm text-sm px-4 py-2"
							>
								SUBMIT
							</button>
						</div>
					</form>
				</div>


            <div className='flex flex-row mt-[5rem] items-center space-x-6 overflow-hidden'>
                <div className='bg-green-pallid2 h-0.5 w-4/5 rounded'/>
                <a href="#" className="font-poppins-semiBold text-white text-sm">
						Terms
					</a>
					<a href="#" className="font-poppins-semiBold text-white text-sm">
						Privacy
					</a>
					<a href="#" className="font-poppins-semiBold text-white text-sm">
						Cookies
					</a>
            </div>
		</footer>
	);
};

export default Footer;

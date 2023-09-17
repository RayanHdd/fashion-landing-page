import { shoppingBagAdd, hamburgerMenu } from '../assets/icons';

const Nav = () => {
	return (
		<nav className="flex flex-row margin-horizontal-screen pt-4 sm:pt-8 text-green-chromatic h-[3rem] sm:h-[5rem]">
			<a href="#" className="font-elephant text-2xl sm:text-4xl w-2/6">
				Rivo
			</a>

			<ul className="flex flex-row space-x-12 items-center font-poppins-medium text-lg w-3/6 max-lg:hidden">
				<li>
					<a href="#">HOME</a>
				</li>
				<li>
					<a href="#">SHOP</a>
				</li>
				<li>
					<a href="#">FEATURES</a>
				</li>
				<li>
					<a href="#">CONTACT</a>
				</li>
			</ul>

			<div className="flex flex-row max-lg:hidden space-x-8 w-4/6 lg:w-1/6 items-end justify-end">
				<a href="#" className="self-end">
					<img src={shoppingBagAdd} alt="shopping bag add icon" className="w-9" />
				</a>
				<button className="border-2 border-green-chromatic font-poppins-medium text-md px-7 py-2 rounded hover:bg-green-chromatic hover:text-white">
					LOGIN
				</button>
			</div>

			<div className="hidden max-lg:block w-4/6 self-center">
				<img src={hamburgerMenu} alt="hamburger menu icon" width={25} height={25} className='ml-auto' />
			</div>
		</nav>
	);
};

export default Nav;

import { headerImg } from "../assets/images";

const Header = () => {
  return (
    <header className="bg-green-pallid flex flex-row margin-horizontal-screen pt-[3rem] sm:pt-[5rem]">
        <div>
        <h1 className="font-rufina-bold max-lg:text-center text-green-chromatic text-5xl sm:text-7xl max-w-full lg:max-w-lg leading-[3.5rem] md:leading-[4.8rem]">Discover and Find Your Own Fashion!</h1>
        <img src={headerImg} alt='shopping bag add icon' className="w-full mt-12 lg:hidden" />
        <h6 className="font-poppins-medium text-green-normal text-lg mt-10 max-w-full lg:max-w-sm leading-8">Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</h6>
        <button className="bg-green-chromatic font-poppins-medium text-md px-10 py-4 rounded text-white mt-12 drop-shadow-2xl">EXPLORE NOW</button>
        </div>

        <img src={headerImg} alt='shopping bag add icon' className="hidden lg:block md:ml-auto md:w-[30rem] md:-mt-5" />
    </header>
  )
}

export default Header
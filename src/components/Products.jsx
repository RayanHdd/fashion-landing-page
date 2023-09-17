import { productCard1,
    productCard2,
    productCard3,
    productCard4,
    productCard5,
    productCard6,
    productCard7,
    productCard8 } from '../assets/images';
import { star } from '../assets/icons';

import {useState} from 'react';

const Products = () => {

    const [activeNavIndex,setActiveNavIndex] = useState(1);

    function onCategoryClick (index) {
        setActiveNavIndex(index);
    }

    const handleAnchorClick = (event) => {
        event.preventDefault(); // Prevent the default behavior of the anchor element
      };

  return (
    <section className="margin-horizontal-screen">
    <h2 className="font-robotoSlab-medium text-green-chromatic text-3xl sm:text-5xl flex flex-row justify-center mt-[5rem] sm:mt-[6rem]">
    Our products
    </h2>

    <ul className="flex flex-row space-x-7 sm:space-x-16 items-center justify-center font-poppins-medium text-xs sm:text-md text-dark-smooth mt-14 md:mb-5">
        <li onClick={()=> onCategoryClick(0)}>
          <a href="#" onClick={handleAnchorClick} className={activeNavIndex == 0 && 'active-product-category'}>SALE</a>
          {activeNavIndex == 0 && <div className='w-18 bg-green-chromatic h-[2px] rounded'/>}
        </li>
        <li onClick={()=> onCategoryClick(1)}>
          <a href="#" onClick={handleAnchorClick} className={activeNavIndex == 1 && 'active-product-category'}>HOT</a>
          {activeNavIndex == 1 && <div className='w-18 bg-green-chromatic h-[2px] rounded'/>}
        </li>
        <li onClick={()=> onCategoryClick(2)}>
          <a href="#" onClick={handleAnchorClick} className={activeNavIndex == 2 && 'active-product-category'}>NEW ARRIVALS</a>
          {activeNavIndex == 2 && <div className='w-18 bg-green-chromatic h-[2px] rounded'/>}
        </li>
        <li onClick={()=> onCategoryClick(3)}>
          <a href="#" onClick={handleAnchorClick} className={activeNavIndex == 3 && 'active-product-category'}>ACCESSORIES</a>
          {activeNavIndex == 3 && <div className='w-18 bg-green-chromatic h-[2px] rounded'/>}
        </li>
      </ul>

    <main className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between py-10 max-lg:space-y-10 lg:space-x-6">
            <div className="lg:w-1/4">
                <img src={productCard1} alt="best selling card 1" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">
                    Spread Collar Shirt
                    </p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$48.99</span>
                        <span className="px-2">|</span>
                        <span className="px-2">5.0</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <img src={productCard2} alt="best selling card 2" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">
                    White Solid Formal shirt
                    </p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$39.00</span>
                        <span className="px-2">|</span>
                        <span className="px-2">4.9</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <img src={productCard3} alt="best selling card 3" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">Shine On Me Blouse</p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$42.99</span>
                        <span className="px-2">|</span>
                        <span className="px-2">4.8</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <img src={productCard4} alt="best selling card 3" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">Gray Solid Padded Jacket</p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$32.99</span>
                        <span className="px-2">|</span>
                        <span className="px-2">4.7</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between max-lg:space-y-10 lg:space-x-6">
            <div className="lg:w-1/4">
                <img src={productCard5} alt="best selling card 1" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">
                    Printed Loose T-shirt
                    </p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$39.99</span>
                        <span className="px-2">|</span>
                        <span className="px-2">5.0</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <img src={productCard6} alt="best selling card 2" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">
                    Summer Wind Crop Shirt
                    </p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$39.95</span>
                        <span className="px-2">|</span>
                        <span className="px-2">4.7</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <img src={productCard7} alt="best selling card 3" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">Tailored Jacket</p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$46.00</span>
                        <span className="px-2">|</span>
                        <span className="px-2">4.9</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <img src={productCard8} alt="best selling card 3" className="w-full" />
                <div>
                    <p className="font-poppins-semiBold text-md mt-5 lg:mt-7 text-dark mx-auto text-center">Solid Round Neck T-shirt</p>
                    <div className="flex flex-row justify-center font-poppins-medium text-dark-smooth text-sm mt-1">
                        <span className="px-2">$36.00</span>
                        <span className="px-2">|</span>
                        <span className="px-2">5.0</span>
                        <img src={star} alt="star icon" className="w-4" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</section>
  )
}

export default Products
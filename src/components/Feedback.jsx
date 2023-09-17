import { useState } from 'react';
import { chevronRight, chevronLeft } from '../assets/icons';

const Feedback = () => {
    const [isHovered,setIsHovered] = useState([null,false]);

    const handleHover = (index,state) => {
        setIsHovered([index,state]);
    }

	return (
		<section className='margin-horizontal-screen'>
			<h2 className="font-robotoSlab-medium text-center text-green-chromatic text-4xl md:text-5xl mt-[7rem]">
				Feedback Corner
			</h2>

            <div className='flex max-lg:flex-col lg:flex-row pt-[5rem] lg:space-x-10 max-lg:space-y-7'>
                <div className={`lg:w-1/3 drop-shadow-md ${(isHovered[1] && isHovered[0] == 0) ? 'bg-green-pallid' : 'bg-white'} px-5 py-4`} onMouseEnter={()=> handleHover(0,true)} onMouseLeave={() => handleHover(0,false)}>
                    <h2 className='font-elephant text-5xl text-green-chromatic'>“</h2>
                    <h3 className='font-robotoSerif-SemiBold text-xl text-green-chromatic'>Emily Wilson</h3>
                    <p className={`font-poppins-medium text-md ${(isHovered[1] && isHovered[0] == 0) ? 'text-green-chromatic' : 'text-grey-normal' } mt-4`}>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>
                </div>
                <div className={`lg:w-1/3 drop-shadow-md ${(isHovered[1] && isHovered[0] == 1) ? 'bg-green-pallid' : 'bg-white'} px-5 py-4`} onMouseEnter={()=> handleHover(1,true)} onMouseLeave={() => handleHover(1,false)}>
                    <h2 className='font-elephant text-5xl text-green-chromatic'>“</h2>
                    <h3 className='font-robotoSerif-SemiBold text-xl text-green-chromatic'>Sarah Thompson</h3>
                    <p className={`font-poppins-medium text-md ${(isHovered[1] && isHovered[0] == 1) ? 'text-green-chromatic' : 'text-grey-normal' } mt-4`}>I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</p>
                </div>
                <div className={`lg:w-1/3 drop-shadow-md ${(isHovered[1] && isHovered[0] == 2) ? 'bg-green-pallid' : 'bg-white'} px-5 py-4`} onMouseEnter={()=> handleHover(2,true)} onMouseLeave={() => handleHover(2,false)}>
                    <h2 className='font-elephant text-5xl text-green-chromatic'>“</h2>
                    <h3 className='font-robotoSerif-SemiBold text-xl text-green-chromatic'>Olivia Martinez</h3>
                    <p className={`font-poppins-medium text-md ${(isHovered[1] && isHovered[0] == 2) ? 'text-green-chromatic' : 'text-grey-normal' } mt-4`}>I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!</p>
                </div>
            </div>


			<div className="flex flex-row items-center justify-center space-x-[5rem] drop-shadow-md mt-[4rem]">
				<button className="transform rotate-180 flex items-center px-2 py-2 rounded bg-white hover:bg-green-pallid">
					<img src={chevronLeft} alt="arrow left icon" className="w-8" />
				</button>
				<button className=" flex items-center px-2 py-2 rounded bg-white hover:bg-green-pallid">
					<img src={chevronRight} alt="arrow right icon" className="w-8" />
				</button>
			</div>
		</section>
	);
};

export default Feedback;

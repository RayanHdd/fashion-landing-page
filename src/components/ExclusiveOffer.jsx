import { exclusiveOfferImg } from "../assets/images";

const ExclusiveOffer = () => {
  return (
    <section className="bg-green-pallid margin-horizontal-screen flex my-[6rem] px-[2rem] lg:pr-[5rem] pb-5">
      <img src={exclusiveOfferImg} alt="exclusive offer img" className="hidden lg:block pl-12"/>
      {/* <div className="lg:ml-[7rem] w-full"> */}
      <div className="flex flex-col max-lg:justify-center max-lg:items-center">
      <h2 className="font-robotoSlab-bold text-green-chromatic text-[1.9rem] md:text-[2.5rem] mt-10">
      Exclusive offer
    </h2>
    <img src={exclusiveOfferImg} alt="exclusive offer img" className="lg:hidden mt-3"/>
    <p className="font-poppins-medium text-green-chromatic text-lg mt-7 max-lg:text-center">
    Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals
			</p>
      <div className="flex space-x-7 mt-5 w-full lg:w-3/5">
        <div className="w-1/3 bg-white h-[5rem] drop-shadow-xl flex flex-col justify-center items-center">
          <p className="font-poppins-semiBold text-green-chromatic text-2xl text-center">06</p>
          <p className="font-poppins-semiBold text-green-chromatic text-xs text-center">Days</p>
        </div>
        <div className="w-1/3 bg-white h-[5rem] drop-shadow-xl flex flex-col justify-center items-center">
          <p className="font-poppins-semiBold text-green-chromatic text-2xl text-center">18</p>
          <p className="font-poppins-semiBold text-green-chromatic text-xs text-center">Hours</p>
        </div>
        <div className="w-1/3 bg-white h-[5rem] drop-shadow-xl flex flex-col justify-center items-center">
          <p className="font-poppins-semiBold text-green-chromatic text-2xl text-center">48</p>
          <p className="font-poppins-semiBold text-green-chromatic text-xs text-center">Min</p>
        </div>
      </div>
      <button className="bg-green-chromatic lg:w-1/3 font-poppins-medium text-md px-12 py-4 rounded text-white mt-8 drop-shadow-2xl">BUY NOW</button>
      </div>
    </section>
  )
}

export default ExclusiveOffer
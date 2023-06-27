import React from "react";
import Travelbg from "../assets/travelbg.jpg";
const Hero = () => {
  return (
    <div  className="w-full h-[90vh]">
      <img src={Travelbg} alt="travelbg" className="w-full h-full object-cover" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl text-[#ecad4c]">Find your Special Trip</h1>
          <h2 className="text-4xl py-4 italic text">with T.W.M.</h2>
          <p>
            Welcome to TRAVEL WITH ME, the ultimate destination for
            globetrotters and adventure seekers! Prepare to embark on a journey
            like no other as we take you on a whirlwind tour of breathtaking
            landscapes, captivating cultures, and unforgettable experiences.
            Whether you're a seasoned explorer or a first-time traveler, our
            mission is to be your trusty companion, guiding you through the vast
            wonders of the world. So buckle up, wanderlust warriors, and get
            ready for an exhilarating adventure that will leave you craving
            more. TRAVEL WITH ME is here to ignite your wanderlust and transform
            your dreams into remarkable memories. Let's dive into the excitement
            together and let the magic unfold!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

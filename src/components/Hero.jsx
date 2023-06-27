import React from "react";
import Travelbg from "../assets/travelbg.jpg";
const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src={Travelbg}
        alt="travelbg"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl ">Find your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">with T.W.M.</h2>
          <p className="">
            Welcome to TRAVEL WITH ME, the ultimate destination for
            globetrotters and adventure seekers! Prepare to embark on a journey
            like no other as we take you on a whirlwind tour of breathtaking
            landscapes, captivating cultures, and unforgettable experiences.
            <h3 className="italic ">
              <hr class="w-[90%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:"></hr>
              Let's dive into the excitement together and let the magic unfold!
            </h3>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

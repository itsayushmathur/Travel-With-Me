import React from "react";
import Resort1 from "../assets/activity.jpg";
import Resort2 from "../assets/activity2.jpg";
import Resort3 from "../assets/activity3.jpg";
const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text2xl font-bold">
          Resorts
        </h3>
        <img
          src={Resort1}
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          alt=""
        />
      </div>
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text2xl font-bold">
          Resorts
        </h3>
        <img
          src={Resort2}
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          alt=""
        />
      </div>
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text2xl font-bold">
          Resorts
        </h3>
        <img
          src={Resort3}
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;

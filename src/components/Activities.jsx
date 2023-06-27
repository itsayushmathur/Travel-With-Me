import React from "react";
import Resort1 from "../assets/activity.jpg";
import Resort2 from "../assets/activity2.jpg";
import Resort3 from "../assets/activity3.jpg";
const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <a target="_blank" href="https://www.busytourist.com/best-vacation-spots-and-places-to-visit/">
        <div className="relative p-4 ">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold">
            The best vacation
          </h3>
          <img
            src={Resort1}
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            alt=""
          />
        </div>
      </a>

      <div className="relative p-4 ">
        <a target="_blank"  href="https://www.forbes.com/sites/laurabegleybloom/2019/09/04/bucket-list-travel-the-top-50-places-in-the-world/?sh=3e8c243120cf">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold">
            The best trips
          </h3>
          <img
            src={Resort2}
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            alt=""
          />
        </a>
      </div>
      <div className="relative p-4 ">
        <a target="_blank"  href="https://www.fabhotels.com/blog/tourist-destinations-in-india/">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-4xl font-bold">
            The best TRAVEL
          </h3>
          <img
            src={Resort3}
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Activities;

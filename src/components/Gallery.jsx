import React from "react";
import Gallery1 from "../assets/gallery1.jpg";
import Gallery2 from "../assets/gallery2.jpg";
import Gallery3 from "../assets/gallery3.jpg";
import Gallery4 from "../assets/gallery4.jpg";
import Gallery5 from "../assets/gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";
import Gallery7 from "../assets/gallery7.jpg";
// import Gallery8 from "../assets/gallery8.jpg";
import Gallery9 from "../assets/gallery9.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-4 gap-4">
        <div className="sm:col-span-2 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={Gallery1} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Gallery2} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Gallery3} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Gallery5} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Gallery6} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Gallery7} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Gallery9} alt="/" />
        </div>
        <div className="sm:col-span-2">
          <img className="w-full h-full object-cover" src={Gallery4} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React from "react";
import ContactImg from "../assets/contact.jpg";
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a Message</h2>
      <p className="text-center text-gray-700 py-2">We're Standing By!</p>
      <div className="grid md:grid-cols-2">
        <img
          src={ContactImg}
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          alt="/"
        />
      </div>
      <form>
        <div className="grid grid-cols-2">
          <input className="border m-2 p-2" type="text" placeholder="First" />
          <input className="border m-2 p-2" type="text" placeholder="Last" />
          <input className="border m-2 p-2" type="email" placeholder="Email" />
          <input className="border m-2 p-2" type="tel" placeholder="Phone" />
          <input
            className="border col-span-2 p-2 m-2"
            type="text"
            placeholder="Address"
          />
          <textarea
            className="border col-span-2 m-2 p-2"
            cols="30"
            rows="10"
          ></textarea>
          <button 
          
          className="col-span-2 m-2">
          Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

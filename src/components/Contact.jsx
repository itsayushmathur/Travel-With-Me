import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactImg from "../assets/contact.jpg";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the email template parameters
    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      message: message,
    };

    // Send the form data using EmailJS
    emailjs
      .send(
        "service_wrdx7h5",
        "template_ychuomv",
        templateParams,
        "orJMVLhh2DhgCaWkU"
      )
      .then((result) => {
        // Display success toast
        toast.success("We'll get in touch soon.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Clear form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
      })
      .catch((error) => {
        // Display error toast
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a Message</h2>
      <p className="text-center text-gray-700 py-2">We're Standing By!</p>
      <img
        src={ContactImg}
        className="w-full md:h-full object-fill p-2 max-h-[300px] h-[200px]"
        alt="/"
      />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
          <input
            className="border m-2 p-2"
            type="text"
            placeholder="First"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            className="border m-2 p-2"
            type="text"
            placeholder="Last"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className="border m-2 p-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border m-2 p-2"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            className="border col-span-2 p-2 m-2"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <textarea
            className="border col-span-2 m-2 p-2"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="col-span-2 m-2">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;

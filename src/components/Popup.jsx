import React from "react";

const Popup = ({ destination, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-lg font-bold mb-2">{destination.name}</h2>
        <p className="mb-4">{destination.intro}</p>
        <p className="font-bold">Travel Advice:</p>
        <p className="mb-2">{destination.travelAdvice}</p>
        <p className="font-bold">Best Time to Visit:</p>
        <p className="mb-2">{destination.bestTime}</p>
        <p className="font-bold">Getting Around:</p>
        <p className="mb-2">{destination.gettingAround}</p>
        <p className="font-bold">Local Customs:</p>
        <p className="mb-2">{destination.customs}</p>
        <p className="font-bold">Places to See:</p>
        <p className="mb-2">{destination.placesToSee}</p>
        <p className="font-bold">What to Eat:</p>
        <p className="mb-2">{destination.whatToEat}</p>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;

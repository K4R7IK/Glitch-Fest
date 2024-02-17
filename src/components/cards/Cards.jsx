import React, { useState } from "react";

const Cards = ({ title, bgImg, events }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div
      className="rounded-xl w-3/5 h-60 flex items-center justify-center relative cursor-pointer"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={togglePopup}
    >
      <h1 className="text-nbg lg:text-9xl uppercase font-pixelify text-6xl">
        {title}
      </h1>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black z-20 bg-opacity-90">
          <div className="max-w-md p-6  rounded-lg text-ef1897">
            <h2 className="text-6xl text-[#ef1897] font-pixelify font-bold mb-4">{title} Events</h2>
            <ul>
              {events.map((event, index) => (
                <li key={index} className="text-lg  text-[#ef1897]  mb-2">
                  <a href={`#${event}`} className="block p-2 hover:bg-ef1897 hover:text-white rounded-md">
                    {event}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 p-2 bg-ef1897 text-white rounded-md hover:bg-opacity-80"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;


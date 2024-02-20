import React, { useState } from "react";

const Cards = ({ title, bgImg, events }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div
      className="rounded-xl bg-black w-3/5 h-[20%] flex items-center justify-around relative cursor-pointer border-primary1 border-opacity-50 border-2"
      onClick={togglePopup}
    >
      <h1 className="text-nbg lg:text-9xl uppercase font-pixelify  text-6xl">
        {title}
      </h1>
      <img src={bgImg} alt="asciiArt" className="h-full" />

      {showPopup && (
        <div className="fixed bottom-20 top-20 bg-black z-20 bg-opacity-70 backdrop-blur-xl left-80 right-80 flex justify-center items-center rounded-2xl">
          <div className="p-6 flex jusitfy-center items-center flex-col">
            <h2 className="text-8xl text-primary1 font-pixelify mb-4">
              {title} Events
            </h2>
            <hr className="w-full my-1" />
            <ul className="text-center">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="text-2xl text-primary2 mb-1 font-spacegrostek font-bold"
                >
                  <a
                    href={`#${event}`}
                    className="block p-2 hover:bg-ef1897 hover:text-white rounded-md"
                  >
                    {event}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="w-1/2 my-1" />

            <button
              className="mt-2 text-nbg rounded-lg hover:text-[] font-silkscreen text-2xl"
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

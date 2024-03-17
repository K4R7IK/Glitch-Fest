import React, { useState } from "react";

const Cards = ({ title, bgImg, events }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div
      className="relative rounded-xl w-5/6 md:w-4/5 lg:max-w-screen-md border border-primary1"
      onClick={togglePopup}
    >
      <img
        className="w-full h-auto object-cover rounded-xl brightness-75"
        src={bgImg}
        alt="Image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-5xl text-white font-silkscreen p-4 lg:text-7xl xl:text-8xl">
          {title}
        </h2>
      </div>
      {showPopup && (
        <div className="fixed flex justify-center items-center z-50 top-0 bottom-0 left-0 right-0 h-full">
          <div className="bg-black bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 w-4/5 max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col justify-center items-center">
            <h2 className="text-4xl text-primary1 font-silkscreen mb-4 text-center p-2 lg:text-5xl uppercase">
              {title}
            </h2>
            <hr className="w-full my-1" />
            <ul className="text-center">
              {Object.entries(events).map(([eventName, eventLink]) => (
                <li
                  key={eventName}
                  className="text-lg text-primary2 mb-1 font-space-grotesk lg:text-xl"
                >
                  <a href={eventLink} className="block p-2 rounded-md" target="_blank">
                    {eventName}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="w-1/2 my-1 mx-auto" />
            <button
              className="text-nbg rounded-lg font-silkscreen text-lg text-center lg:text-xl"
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

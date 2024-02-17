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
        <div className="fixed bottom-20 top-20 bg-black z-20 bg-opacity-70 backdrop-blur-xl left-80 right-80 flex justify-center items-center rounded-2xl">
          <div className="p-6 flex jusitfy-center items-center flex-col">
            <h2 className="text-8xl text-[#ef1897] font-pixelify font-bold mb-4">
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

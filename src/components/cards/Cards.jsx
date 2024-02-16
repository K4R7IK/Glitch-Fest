import React from "react";

const Cards = ({title, bgImg}) => {
  return (
    <div
      className="rounded-xl w-3/5 h-60 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-nbg text-9xl uppercase font-pixelify bg-bg px-9 py-4 bg-opacity-50 rounded-lg backdrop-blur-sm">
        {title}
      </h1>
    </div>
  );
};

export default Cards;

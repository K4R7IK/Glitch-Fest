import React from "react";

const Cards = ({ title, bgImg }) => {
  return (
    <div
      className="rounded-xl w-3/5 h-60 flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-nbg lg:text-9xl uppercase font-pixelify text-6xl">
        {title}
      </h1>
    </div>
  );
};

export default Cards;

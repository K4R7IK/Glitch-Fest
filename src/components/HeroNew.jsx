import React from "react";
import Glitch from "./logo/Glitch";

const HeroNew = () => {
  return (
    <>
      <div className="min-h-full flex-grow flex justify-center items-center rounded-lg">
        <div className="text-center">
          <Glitch />
          <p className="mt-4 md:text-2xl text-nbg xl:text-3xl font-silkscreen font-medium 2xl:text-4xl">
            Embrace the Imperfection: Where Flaws Find Beauty
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroNew;

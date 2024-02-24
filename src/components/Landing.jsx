import React from "react";
import BgVid from "../assets/Videos/skull.gif";
import Glitch from "../components/Logo/Glitch";
import Nav from "../components/Nav";

const Landing = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 brightness-75"
        style={{ backgroundImage: `url(${BgVid})` }}
      ></div>

      <Nav />
      <div className="absolute inset-0 flex items-center justify-center z-10 flex-col gap-3">
        <Glitch/>
        <p className="text-xl/relaxed font-silkscreen text-white text-center px-1 lg:text-3xl/relaxed xl:text-4xl/relaxed">
          Embrace the Imperfection: Where Flaws Find Beauty
        </p>
        <div className="bg-primary1 p-3 font-space-grotesk text-base rounded-full bg-opacity-30 backdrop-blur-lg text-white font-bold lg:text-xl lg:p-4 xl:text-2xl xl:p-5">
          Registration Opening Soon
        </div>
      </div>
    </div>
  );
};

export default Landing;

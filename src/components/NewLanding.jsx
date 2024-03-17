import React from "react";
import Glitch from "../components/Logo/Glitch";
import Nav from "../components/Nav";
import BgIMG from "../assets/Videos/output.gif";
import { Link as LinkId } from "react-scroll";

const Landing = () => {
  return (
    <div className="relative h-screen">
      <img
        src={BgIMG}
        alt="bg"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute bg-pink-500 mix-blend-overlay backdrop-blur-[2px] w-full h-full"></div>
      <Nav />
      <div className="absolute inset-0 flex items-center justify-center z-10 flex-col gap-3">
        <Glitch />
        <p className="text-xl/relaxed font-silkscreen text-white text-center px-1 lg:text-3xl/relaxed xl:text-4xl/relaxed">
          Embrace the Imperfection: Where Flaws Find Beauty
        </p>
        <div className="bg-primary1 p-3 font-space-grotesk text-base rounded-full bg-opacity-30 backdrop-blur-lg text-white font-bold lg:text-xl lg:p-4 xl:text-2xl xl:p-5">
          <LinkId to="Events">Register Now</LinkId>
        </div>
      </div>
    </div>
  );
};

export default Landing;

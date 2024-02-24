import React from "react";
import SideImg from "../assets/PSX_20230705_100253.jpg"

const AboutGBU = () => {
  return (
    <div className="h-full bg-black flex flex-col-reverse lg:flex-row items-center justify-center" id="AboutGlitch">
      <div className="w-full p-5 lg:h-full lg:p-3 lg:w-1/2">
        <img src={SideImg} className="object-cover w-full rounded-xl grayscale bg-center" />
      </div>
      <div className="bg-black h-full lg:w-1/2 xl:p-4">
        <h1 className="text-white text-4xl font-silkscreen text-center pt-2 lg:text-5xl">
          About
        </h1>
        <h1 className="text-5xl font-pixelify text-primary1 text-center uppercase">
          Gautam Buddha University
        </h1>
        <hr className="text-nbg w-3/4 my-3 mx-auto" />
        <p className="font-space-grotesk text-white text-justify px-3 text-base pb-2 lg:text-lg xl:text-xl xl:w-2/3 xl:mx-auto">
          Situated in the tech-bowl of India, Greater Noida, Gautam Buddha
          University is a leading institution that offers graduate and
          post-graduate degrees in diverse fields of education. GBU polishes the
          imperfections within its students and helps them sparkle like
          diamonds.
          <br />
          Gautam Buddha University boasts a robust infrastructure and has a
          grand campus, which is probably one of the most picturesque and
          breathtaking in the entire country, if not the most. It’s not a wonder
          why the university has become a favoured venue for conducting key
          events, both of national and international importance.
        </p>
      </div>
    </div>
  );
};

export default AboutGBU;

import React from "react";
import logo_gbu from "../assets/logo_gbu.png";

function AboutGBU() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-4">
        <div className="w-3/5 p-4 bg-bg bg-opacity-15 backdrop-blur-sm">
          <p className="text-white text-6xl font-silkscreen text-center ">
            <span className="text-[#ef1897] text-7xl font-pixelify uppercase ">
              About{" "}
            </span>
            <br />
            Gautam Buddha University
          </p>
        </div>
        <div className="flex items-center gap-4 mx-16">
          <img src={logo_gbu} alt="GBU map" className="rounded-3xl w-full" />
          <div className="bg-bg bg-opacity-15 backdrop-blur-sm rounded-xl font-spacegrostek text-lg h-full leading-relaxed p-10 text-justify ">
            <p className="text-white">
              Situated in the tech-bowl of India, Greater Noida, Gautam Buddha
              University is a leading institution that offers graduate and
              post-graduate degrees in diverse fields of education. GBU polishes
              the imperfections within its students and helps them sparkle like
              diamonds.
              <br />
              Gautam Buddha University boasts a robust infrastructure and has a
              grand campus, which is probably one of the most picturesque and
              breathtaking in the entire country, if not the most. It’s not a
              wonder why the university has become a favoured venue for
              conducting key events, both of national and international
              importance.
              <br/>
              But bhai seriously yeh university students to support nahi karti jayda. Bus teachers apne pocket fill karne mein lage h. Student ki maa ki ch*t.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutGBU;

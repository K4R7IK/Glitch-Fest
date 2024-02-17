import React from "react";
import logo_gbu from "../assets/PSX_20230705_100253.jpg";
// import logo_gbu from "../assets/logo_gbu.png";

function AboutGBU() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-4">
        <div className="p-4 bg-bg bg-opacity-15 backdrop-blur-sm">
          <h1 className="text-primary1 text-7xl font-pixelify uppercase text-center">
            About
          </h1>
          <h2 className="text-nbg text-6xl font-silkscreen text-center">
            Gautam Buddha University
          </h2>
        </div>
        <div className="flex gap-5 items-center px-24">
          <div className="w-1/2">
            <img src={logo_gbu} alt="GBU map" className="grayscale rounded-xl" />
          </div>
          <div className="bg-bg bg-opacity-15 backdrop-blur-sm rounded-xl text-xl h-full leading-7 w-1/2">
            <p className="font-space-grotesk text-2xl text-nbg mt-10 w-[95%] leading-relaxed pl-4">
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
            </p>
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <div className="h-full flex flex-row">
  //       <img src={logo_gbu} className="object-cover w-1/2 grayscale" />
  //       <div className="bg-black h-full w-1/2 pt-14 pl-10">
  //         <h1 className="text-nbg text-5xl font-silkscreen">About</h1>
  //         <h1 className="text-7xl font-pixelify pl-4 text-[#ef1897]">
  //           Gautam Buddha University
  //         </h1>
  //         <hr className="text-nbg w-3/4 my-2" />
  //         <p className="font-space-grotesk text-2xl text-nbg mt-10 w-[95%] leading-relaxed pl-4">
  //           Situated in the tech-bowl of India, Greater Noida, Gautam Buddha
  //           University is a leading institution that offers graduate and
  //           post-graduate degrees in diverse fields of education. GBU polishes
  //           the imperfections within its students and helps them sparkle like
  //           diamonds.<br/> Gautam Buddha University boasts a robust infrastructure
  //           and has a grand campus, which is probably one of the most
  //           picturesque and breathtaking in the entire country, if not the most.
  //           It’s not a wonder why the university has become a favoured venue for
  //           conducting key events, both of national and international
  //           importance.
  //         </p>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default AboutGBU;

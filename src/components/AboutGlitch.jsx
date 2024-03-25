import React from "react";
import SideImg from "../assets/Videos/coding-slow.gif";

const AboutGlitch = () => {
  return (
    <>
      <div
        className="h-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center relative"
        id="AboutGlitch"
      >
        <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808032_1px,transparent_1px),linear-gradient(to_bottom,#80808032_1px,transparent_1px)] bg-[size:25px_25px] -z-10"></div>

        <div className="w-full p-5 lg:h-full lg:p-3 lg:w-1/2">
          <img
            src={SideImg}
            className="object-cover w-full bg-center rounded-xl"
          />
        </div>
        <div className="h-full lg:w-1/2 xl:p-4">
          <h1 className="text-nbg text-4xl font-silkscreen text-center pt-2 lg:text-5xl">
            About
          </h1>
          <h1 className="text-7xl font-pixelify text-primary1 text-center lg:text-8xl">
            Glitch
          </h1>
          <hr className="text-nbg w-3/4 my-3 mx-auto" />
          <p className="font-space-grotesk text-white text-justify px-3 text-base pb-2 lg:text-lg xl:text-xl xl:w-2/3 xl:mx-auto">
            Glitch Tech Fest 2024 stands as an unparalleled opportunity for
            students to flaunt their technical acumen amid a dynamic milieu of
            peers and industry luminaries. With a rich tapestry of events
            spanning diverse technological domains, participants engage in live
            interactions and networking, cultivating invaluable connections
            essential for future career trajectories. This convergence of talent
            not only fosters personal growth but also offers a fertile ground
            for forging lasting professional relationships, ensuring a
            transformative experience for all involved.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutGlitch;

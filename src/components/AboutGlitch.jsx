import React from "react";
import SideImg from "../assets/Videos/coding-slow.gif";
const AboutGlitch = () => {
  return (
    <>
      <div className="h-full flex flex-row-reverse bg-black" id="AboutGlitch">
        <img src={SideImg} className="object-cover brightness-[70%] w-1/2" />
        <div className="bg-black h-full pt-20 pl-16 w-1/2">
          <h1 className="text-nbg text-5xl font-silkscreen">About</h1>
          <h1 className="text-9xl font-pixelify text-primary1">Glitch</h1>
          <hr className="text-nbg w-3/4 my-2" />
          <p className="font-space-grotesk text-2xl text-nbg mt-10 w-5/6 leading-relaxed text-justify">
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

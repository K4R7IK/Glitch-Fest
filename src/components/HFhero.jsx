import React from "react";
import HFPoster from "../assets/HackfedPoster.png";
import { useState } from "react";

function HFhero() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <section id="HFlanding" className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="mb-4 text-3xl font-bold text-primary1 sm:text-4xl">
              <br className="  hidden lg:inline-block" />
              Join HackFed's Hackathon Revolution
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Welcome to the most thrilling 24 hours of your tech journey!
              HackFed Community invites you to TechFest 2024, where innovation
              and education technology collide in a symphony of creativity. Join
              us at Gautam Buddha University for a hackathon experience like no
              other.
              <br />
              <br />
              Join HackFed, a thriving community with over 2,000 members, on a
              mission to light the path for young minds. At TechFest 2024, we
              unite innovation and community spirit in a dynamic 24-hour
              hackathon at Gautam Buddha University.
            </p>
            <div className="flex justify-center">
              {/* <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"> */}
              {/*   Register */}
              {/* </button> */}
              <button className="inline-flex rounded border-0 bg-purple-500 px-6 py-2 text-lg text-white hover:bg-gray-200 focus:outline-none font-bold">
                Discord
              </button>
              <button
                className={`font-bold ml-4 inline-flex rounded border-0 px-6 py-2 text-lg text-white focus:outline-none 
      ${hovered ? "bg-indigo-600" : "bg-indigo-500 hover:bg-indigo-600"}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? "Opening Soon" : "Register"}
              </button>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src={HFPoster}
            />
          </div>
        </div>
        {/* <div className="m-auto max-w-7xl pt-8"> */}
        {/*   <h1 className="mb-7 text-center font-space-grotesk text-7xl font-bold text-primary1"> */}
        {/*     Hackathon Themes */}
        {/*   </h1> */}
        {/*   <ul className="flex list-none flex-wrap justify-evenly gap-2 p-0 lg:text-xl"> */}
        {/*     <li className="m-1 rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       AI/ML */}
        {/*     </li> */}
        {/*     <li className="m-1 rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       AR/VR */}
        {/*     </li> */}
        {/*     <li className="m-1 rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       CyberSecurity */}
        {/*     </li> */}
        {/*     <li className="m-1  rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       FinTech */}
        {/*     </li> */}
        {/*     <li className="m-1 rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       Web 3 */}
        {/*     </li> */}
        {/*     <li className="m-1 rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       Health Care */}
        {/*     </li> */}
        {/*     <li className="m-1 rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       Ed-Tech */}
        {/*     </li> */}
        {/*     <li className="m-1 rounded-md border border-primary1 px-4 py-2 text-white"> */}
        {/*       Open Inovation */}
        {/*     </li> */}
        {/*   </ul> */}
        {/* </div> */}
      </section>
    </>
  );
}

export default HFhero;

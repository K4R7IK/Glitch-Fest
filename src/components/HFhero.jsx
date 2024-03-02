import React from "react";
import HFPoster from "../assets/HackfedPoster.png"

function HFhero() {
  return (
    <>
      <section id="HFlanding" class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium  text-primary1"><br class="  hidden lg:inline-block" />Join HeckFed's Hackathon Revolution
            </h1>
            <p class="mb-8 leading-relaxed text-white">Welcome to the most thrilling 24 hours of your tech journey! HeckFed Community invites you to HackFest 2024, where innovation and education technology collide in a symphony of creativity. Join us at Gautam Buddha University for a hackathon experience like no other.<br /><br />
              Join HeckFed, a thriving community with over 2,000 members, on a mission to light the path for young minds. At HackFest 2024, we unite innovation and community spirit in a dynamic 24-hour hackathon at Gautam Buddha University.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Discord</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src={HFPoster} />
          </div>
        </div>
          <div className="pt-8 m-auto max-w-[700px]">
            <ul className="list-none flex justify-evenly flex-wrap gap-2 p-0">
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">AI</li>
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">AR</li>
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">VR</li>
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">CyberSecurity</li>
              <li className="px-4  py-2 border border-primary1 text-white rounded-md m-1">FinTech</li>
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">Web3</li>
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">HealthCare</li>
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">EdTech</li>
              <li className="px-4 py-2 border border-primary1 text-white rounded-md m-1">OpenInovation</li>
            </ul>
          </div>
      </section>
    </>
  )
}

export default HFhero;



import React from "react";
import HFPoster from "../assets/HackfedPoster.png"

function HFhero() {
  return (
    <>
      <section className="text-gray-400  h-screen flex align-middle">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="hero" src={HFPoster} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary1">Innovate, Collaborate, Elevate:
              <br className="hidden lg:inline-block" />Join HeckFed's Hackathon Revolution
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to the most thrilling 24 hours of your tech journey! HeckFed Community invites you to HackFest 2024, where innovation and education technology collide in a symphony of creativity. Join us at Gautam Buddha University for a hackathon experience like no other.<br/><br/>
              Join HeckFed, a thriving community with over 2,000 members, on a mission to light the path for young minds. At HackFest 2024, we unite innovation and community spirit in a dynamic 24-hour hackathon at Gautam Buddha University.<br/>
              <span className="px-4 bg-gray-700 rounded-md m-1">AI</span> 
              <span className="px-4 bg-gray-700 rounded-md m-1">AR</span>
              <span className="px-4 bg-gray-700 rounded-md m-1">VR</span>
              <span className="px-4 bg-gray-700 rounded-md m-1">CyberSecurity</span>
              <span className="px-4 bg-gray-700 rounded-md m-1">FinTech</span>
              <span className="px-4 bg-gray-700 rounded-md m-1">Web3</span>
              <span className="px-4 bg-gray-700 rounded-md m-1">HealthCare</span>
              <span className="px-4 bg-gray-700 rounded-md m-1">EdTech</span>
              <span className="px-4 bg-gray-700 rounded-md m-1">OpenInovation</span>
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Join community</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HFhero;

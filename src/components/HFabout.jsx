import React from "react";

function HFabout() {
  return (
    <>
      <section className="flex align-middle h-screen ">
        <div class=" flex flex-col items-center justify-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
              <h1 className="text-6xl sm:text-6xl mb-4 md:text-8xl  w-full font-mono text-primary1  font-extrabold">Hackfed_<span className="sm:text-6xl float-end text-gray-300 mt-2">0.1</span></h1>
              <h2 className="mb-4 text-xl md:mb-8 md:text-2xl font-extrabold text-gray-100">
                🚀 HackFest 2024 at Gautam Buddha University: Unleash the Future with HeckFed!
              </h2>
              <p className="text-gray-50 md:text-lg  font-mono text-justify">
                🌟 HackFest 2024: Where Innovation Meets Community Spirit:
                Foundation of HackFed rests upon the pillars of collaboration and support, creating an environment where ideas flourish.
                Join us at Gautam Buddha University for HackFest 2024, an electrifying 24-hour hackathon organized by HeckFed. Experience the synergy of innovation, collaboration, and the collective spirit of our dynamic community. From Ar/VR to EdTech, this is where ideas take flight, and the future is shaped!                HackFed - Igniting Futures, One Hack at a Time! #HeckFedHackathon #TechCommunity </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HFabout;

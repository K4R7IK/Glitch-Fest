import React from "react";

function HFabout() {
  return (
    <>
      <section   className="flex align-middle h-screen ">
        <div class=" flex flex-col items-center justify-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
              <h1 className="text-6xl sm:text-6xl mb-4 md:text-8xl  w-full font-mono text-primary1  font-extrabold">Hackfed_<span className="sm:text-6xl float-end text-gray-300 mt-2">0.1</span></h1>
              <h2 className="mb-4 text-xl md:mb-8 md:text-2xl font-extrabold text-gray-100">A small headline to switch your visitors into users.</h2>
              <p className="text-gray-50 md:text-lg  font-mono text-justify">
                Introducing Hackfed 1.0, Hackfed’s latest 24-hour
                hackathon, in partnership with Gautam Buddha
                University’s Glitch Tech Fest 2024. Our brand new
                event promises an unmatched platform to
                participants for turning their visionary ideas into
                tangible realities. Participants will have a diverse
                range of domains to choose from and innovate
                something new and interesting.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HFabout;

import React from "react";
import Photo4 from "../assets/HFphoto1.jpg";
import Photo3 from "../assets/HFphoto2.jpg";
import Photo2 from "../assets/HFphoto3.jpg";
import Photo1 from "../assets/HFphoto4.jpg";
import Photo5 from "../assets/HFphoto5.jpg";
import Photo6 from "../assets/HFphoto6.jpg";

function HFgallery() {
  return (
    <>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-primary1 lg:w-1/3 lg:mb-0 mb-4"> Glimpses of our Previous Editions</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Hackfed 1.0, Hackfed’s latest 24-hour
              hackathon, in partnership with Gautam Buddha
              University’s Glitch Tech Fest 2024. Our brand new
              event promises an unmatched platform to
              participants for turning their visionary ideas into
              tangible realities. Participants will have a diverse
              range of domains to choose from and innovate
              something new and interesting.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block"  src={Photo1} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={Photo2} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={Photo3}/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={Photo4} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={Photo5}/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={Photo6}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HFgallery;

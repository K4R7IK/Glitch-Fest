import React from "react";
import SponsorData from "../assets/Sponsors.json";

function Sponsors() {
  return (
    <>
      <section className="bg-black">
        <div className="container px-5 py-24 mx-auto">
          {Object.entries(SponsorData).map(([category, sponsors], index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold text-white mt-16 mb-8 w-full text-center ">{category}</h2>
              <div className="flex flex-wrap -m-4">
                {sponsors.map((item, index) => (
                  <div key={index} className="xl:w-1/4 md:w-1/2 m-auto w-full p-4">
                    <div className="bg-opacity-40  p-6 rounded-lg ">
                      <a href={item.website}>
                      <div className="flex justify-center align-middle bg-white px-4 h-40 rounded-lg "><img className=" rounded bg-white my-auto w-full size-fit object-center my-6" src={item.image} alt="content" /></div>
                      </a>
                      <h2 className="text-lg text-white font-bold title-font mt-4 mb-4 w-full text-center">{item.company}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Sponsors;


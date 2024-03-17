import React from "react";
import HFSponsorData from "../assets/HFsponsors.json";

function HFsponsors() {
  return (
    <>
      <section className="">
        <div className="container px-5 py-24 mx-auto">
          {Object.entries(HFSponsorData).map(([category, sponsors], index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold text-white mt-16 mb-8 w-full text-center font-space-grotesk">{category}</h2>
              <div className="flex flex-wrap -m-4">
                {sponsors.map((item, index) => (
                  <div key={index} className="xl:w-1/4 md:w-1/2 m-auto w-full p-4">
                    <div className="bg-opacity-40  p-6 rounded-lg ">
                      <a href={item.website}>
                        <div className="flex justify-center align-middle bg-white px-4 py-2 h-40  rounded-lg ">
                          <img className="max-h-32 rounded bg-white   w-full object-center my-6" src={item.image} alt={item.alt} />
                          {/* <img className="max-h-32 rounded bg-white my-auto  w-full object-center my-6" src={item.image} alt={item.alt} /> */}
                        </div>
                      </a>
                      <h2 className="text-lg text-white  font-space-grotesk font-bold title-font mt-4 mb-4 w-full text-center">{item.company}</h2>
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

export default HFsponsors;

import React from "react";
import Registration from "../assets/icons/Registration.svg";
import Reach from "../assets/icons/Reach.svg";
import Footfall from "../assets/icons/Footfall.svg";
import Location from "../assets/icons/Location.svg";
import College from "../assets/icons/College.svg";

function HFdemographs() {
  // return (
  //   <>
  //     <section className="text-gray-400  body-font">
  //       <div className="container px-5 py-24 mx-auto">
  //         <div className="flex flex-col text-center w-full mb-20">
  //           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary1">Master Cleanse Reliac Heirloom</h1>
  //           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
  //         </div>
  //         <div className="flex flex-wrap -m-4 text-center">
  //           <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
  //             <div className="border-2 border-primary1 border-opacity-50 px-4 py-6 rounded-lg">
  //               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
  //                 <path d="M8 17l4 4 4-4m-4-5v9"></path>
  //                 <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
  //               </svg>
  //               <h2 className="title-font font-medium text-3xl text-white">2.7K</h2>
  //               <p className="leading-relaxed text-primary1 opacity-75">Downloads</p>
  //             </div>
  //           </div>
  //           <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
  //             <div className="border-2 border-primary1 border-opacity-50 px-4 py-6 rounded-lg">
  //               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
  //                 <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
  //                 <circle cx="9" cy="7" r="4"></circle>
  //                 <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
  //               </svg>
  //               <h2 className="title-font font-medium text-3xl text-white">1.3K</h2>
  //               <p className="leading-relaxed text-primary1 opacity-75">Users</p>
  //             </div>
  //           </div>
  //           <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
  //             <div className="border-2 border-primary1 border-opacity-50 px-4 py-6 rounded-lg">
  //               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
  //                 <path d="M3 18v-6a9 9 0 0118 0v6"></path>
  //                 <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
  //               </svg>
  //               <h2 className="title-font font-medium text-3xl text-white">74</h2>
  //               <p className="leading-relaxed text-primary1 opacity-75">Files</p>
  //             </div>
  //           </div>
  //           <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
  //             <div className="border-2 border-primary1 border-opacity-50 px-4 py-6 rounded-lg">
  //               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
  //                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  //               </svg>
  //               <h2 className="title-font font-medium text-3xl text-white">46</h2>
  //               <p className="leading-relaxed text-primary1 opacity-75">Places</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>    </>
  // )
  return (
    <div className="flex flex-wrap justify-center text-white py-5   lg:justify-around">
      <div className="flex justify-center items-center">
        <img src={Registration} alt="Registration" className="h-20" />
        <div className="ml-2 md:ml-0">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">2000+</p>
          <p className="font-bold text-xs md:text-sm lg:text-xl">
            Registrations
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={Footfall} alt="Footfall" className="h-20" />
        <div className="ml-2 md:ml-0">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">100+</p>
          <p className="font-bold text-xs md:text-sm lg:text-xl">Teams</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={College} alt="Colleges" className="h-20" />
        <div className="ml-2 md:ml-0">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">25+</p>
          <p className="font-bold text-xs md:text-sm lg:text-xl">Colleges</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={Reach} alt="Reach/Views" className="h-20" />
        <div className="ml-2 md:ml-0">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">5000+</p>
          <p className="font-bold text-xs md:text-sm lg:text-xl">Reach/Views</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={Location} alt="Location" className="h-20" />
        <div className="ml-2 md:ml-0">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">Delhi-NCR</p>
          <p className="font-bold text-xs md:text-sm lg:text-xl">Location</p>
        </div>
      </div>
    </div>
  );
}

export default HFdemographs;

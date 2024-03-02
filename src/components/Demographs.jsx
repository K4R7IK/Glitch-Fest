import React from "react";
import Registration from "../assets/icons/Registration.svg";
import Reach from "../assets/icons/Reach.svg";
import Footfall from "../assets/icons/Footfall.svg";
import Location from "../assets/icons/Location.svg";
import College from "../assets/icons/College.svg";

function Demographs() {
  return (
    <div className="bg-black flex flex-wrap justify-center text-white py-5   lg:justify-around">
      <div className="flex justify-center items-center">
        <img src={Registration} alt="Registration" className="h-20" />
        <div className="ml-2 md:ml-0">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">5000+</p>
          <p className="font-bold text-xs md:text-sm lg:text-xl">
            Registrations
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={Footfall} alt="Footfall" className="h-20" />
        <div className="ml-2 md:ml-0">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">8000</p>
          <p className="font-bold text-xs md:text-sm lg:text-xl">Footfall</p>
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
          <p className="font-bold text-lg md:text-xl lg:text-2xl">4000+</p>
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

export default Demographs;

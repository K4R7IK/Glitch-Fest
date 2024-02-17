import React from "react";
import Registration from "../assets/icons/Registration.svg";
import Reach from "../assets/icons/Reach.svg";
import Footfall from "../assets/icons/Footfall.svg";
import Location from "../assets/icons/Location.svg";
import College from "../assets/icons/College.svg";

function Demographs() {
  return (
    <div className="bg-black h-64 p-40 flex justify-around items-center text-nbg">

      <div className="flex flex-col items-center">
        <img src={Registration} alt="Registration" className="icon h-40" />
        <p className="font-bold text-4xl mt-2">200034</p>
        <p className="font-bold mt-2">Registration</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={Footfall} alt="Footfall" className="icon h-40" />
        <p className="font-bold text-4xl mt-2">12000</p>
        <p className="font-bold mt-2">Footfall</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={College} alt="College" className="icon h-40" />
        <p className="font-bold text-4xl mt-2">12+</p>
        <p className="font-bold mt-2">College involved</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={Location} alt="Location" className="icon h-40" />
        <p className="font-bold text-4xl mt-2">NCR</p>
        <p className="font-bold mt-2">College involved</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={Reach} alt="Reach" className="icon h-40" />
        <p className="font-bold text-4xl mt-2">200000</p>
        <p className="font-bold mt-2">Reach / views</p>
      </div>

    </div>
  );
}

export default Demographs;


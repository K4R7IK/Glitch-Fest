import React from "react";
import HFhero from "../components/HFhero";
import HFstickey from "../components/HFstickey";
import HFthemes from "../components/HFthemes";
import HFprizepool from "../components/HFprizepool";
import HFdemographs from "../components/HFdemographs";
import Demographs from "../components/Demographs";
import HFsponsors from "../components/HFsponsors";
import HFgallery from "../components/HFgallery";
import HFroadmap from "../components/HFroadmap";
import HFourteam from "../components/HFourteam";
import HFfooter from "../components/HFfooter";
import HFabout from "../components/HFabout";
import HFnavbar from "../components/HFnavbar";
import BGImage from '../assets/BlackGrid.jpg';
function HFhackathon() {
  return (
    <>
      <div
        className="overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat  shadow-lg"
        style={{ backgroundImage: `url(${BGImage})`,
        }}
      >
        <section className="bg-black bg-opacity-85">
          <HFnavbar />
          <HFhero />
          <HFabout />
          <HFthemes />
          <HFprizepool />
          <HFdemographs />
          {/* <Demographs/> */}
          {/* <HFsponsors /> */}
          <HFgallery />
          {/* <HFroadmap /> */}
          {/* <HFourteam /> */}
          <HFfooter />
          <HFstickey/>
        </section>
      </div>
    </>
  )
}
export default HFhackathon;

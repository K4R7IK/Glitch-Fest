import React from "react";
import BGImage from "../assets/BlackGrid.jpg";
import "ldrs/quantum";

const HFhero = React.lazy(() => import("../components/HFhero"));
const HFstickeyBtn = React.lazy(() => import("../components/HFstickey"));
const HFthemes = React.lazy(() => import("../components/HFthemes"));
const HFprizepool = React.lazy(() => import("../components/HFprizepool"));
const HFdemographs = React.lazy(() => import("../components/HFdemographs"));
const HFgallery = React.lazy(() => import("../components/HFgallery"));
const HFfooter = React.lazy(() => import("../components/HFfooter"));
const HFabout = React.lazy(() => import("../components/HFabout"));
const HFnavbar = React.lazy(() => import("../components/HFnavbar"));
const HFsponsors = React.lazy(() => import("../components/HFsponsors.jsx"));


const Loading = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <l-quantum size="200" color="white"></l-quantum>
    </div>
  );
};

const HFhackathon = () => {
  return (
    <div
      className="bg-cover bg-fixed bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <React.Suspense fallback={<Loading />}>
        <section className="bg-black bg-opacity-85">
          <HFnavbar />
          <HFhero />
          <HFthemes />
          <HFabout />
          <HFprizepool />
          <HFsponsors />
          <HFdemographs />
          <HFgallery />
          <HFfooter />
          <HFstickeyBtn />
        </section>
      </React.Suspense>
    </div>
  );
};
export default HFhackathon;

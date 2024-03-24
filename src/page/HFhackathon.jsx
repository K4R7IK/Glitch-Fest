import React from "react";
import "ldrs/quantum";

const HFhero = React.lazy(() => import("../components/HFhero"));
const HFstickey = React.lazy(() => import("../components/HFstickey"));
const HFthemes = React.lazy(() => import("../components/HFthemes"));
const HFprizepool = React.lazy(() => import("../components/HFprizepool"));
const HFdemographs = React.lazy(() => import("../components/HFdemographs"));
const HFgallery = React.lazy(() => import("../components/HFgallery"));
const HFfooter = React.lazy(() => import("../components/HFfooter"));
const HFabout = React.lazy(() => import("../components/HFabout"));
const HFnavbar = React.lazy(() => import("../components/HFnavbar"));
const HFsponsors = React.lazy(() => import("../components/HFsponsors"));

const Loading = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <l-quantum size="200" color="white"></l-quantum>
    </div>
  );
};

const HFhackathon = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <section className="relative">
        <div class="fixed inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808032_1px,transparent_1px),linear-gradient(to_bottom,#80808032_1px,transparent_1px)] bg-[size:50px_50px] -z-10"></div>

        <HFnavbar />
        <HFhero />
        <HFthemes />
        <HFabout />
        <HFprizepool />
        <HFdemographs />
        <HFsponsors />
        <HFgallery />
        <HFfooter />
        <HFstickey />
      </section>
    </React.Suspense>
  );
};
export default HFhackathon;

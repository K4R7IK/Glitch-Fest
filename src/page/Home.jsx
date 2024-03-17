import React from "react";
import "ldrs/quantum";

const NewLanding = React.lazy(() => import("../components/NewLanding"));
const AboutGlitch = React.lazy(() => import("../components/AboutGlitch"));
const AboutGBU = React.lazy(() => import("../components/AboutGBU"));
const Events = React.lazy(() => import("../components/Events"));
const Demographs = React.lazy(() => import("../components/Demographs"));
const FaqSection = React.lazy(() => import("../components/Faq"));
const Footer = React.lazy(() => import("../components/Footer"));
const HFsponsors = React.lazy(() => import("../components/HFsponsors"));

const Loading = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <l-quantum size="200" color="white"></l-quantum>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <NewLanding />
        <AboutGlitch />
        <AboutGBU />
        <Events />
        <Demographs />
        <HFsponsors />
        <FaqSection />
        <Footer />
      </React.Suspense>
    </>
  );
};

export default Home;

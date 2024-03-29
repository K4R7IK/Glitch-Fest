import React from "react";
import "ldrs/quantum";

const Landing = React.lazy(() => import("../components/Landing"));
const AboutGlitch = React.lazy(() => import("../components/AboutGlitch"));
const AboutGBU = React.lazy(() => import("../components/AboutGBU"));
const Event = React.lazy(() => import("../components/Event"));
const Demographs = React.lazy(() => import("../components/Demographs"));
const FaqSection = React.lazy(() => import("../components/Faq"));
const Footer = React.lazy(() => import("../components/Footer"));
const Sponsor = React.lazy(() => import("../components/Sponsors"));

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
        <Landing />
        <AboutGlitch />
        <AboutGBU />
        <Event />
        <Demographs />
        <Sponsor />
        <FaqSection />
        <Footer />
      </React.Suspense>
    </>
  );
};

export default Home;

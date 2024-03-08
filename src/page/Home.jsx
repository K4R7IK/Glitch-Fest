import React from "react";

// import home page components
import Landing from "../components/Landing";
import NewLanding from "../components/NewLanding"
import AboutGlitch from "../components/AboutGlitch";
import AboutGBU from "../components/AboutGBU";
import Events from "../components/Events";
import Demographs from "../components/Demographs";
import FaqSection from "../components/Faq";
import Footer from "../components/Footer";
import HFhackathon from "./HFhackathon";

function Home() {
  return (
    <>
      <NewLanding />
      <AboutGlitch />
      <AboutGBU />
      <Events />
      <Demographs />
      <FaqSection />
      <Footer />
    </>
  );
}

export default Home;

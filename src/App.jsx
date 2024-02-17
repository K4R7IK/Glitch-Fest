import "./App.css";
import HeroNew from "./components/HeroNew";
import BgVid from "./assets/Videos/cosmos.gif";
import BgImage from "./assets/Videos/skull.gif";
import Nav from "./components/nav/Nav";
import Events from "./components/Events";
import AboutGBU from "./components/AboutGBU";
import AboutGlitch from "./components/AboutGlitch";
import Footer from "./components/Footer";
import Sponsor from "./components/soponsor";
import Demographs from "./components/Demographs";
import BgGlitch from './assets/Videos/skull3.gif';

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen flex p-3 flex-col gap-3"
      >
        <Nav />
        <HeroNew />
      </div>
      <div className="h-screen">
        <AboutGlitch />
      </div>
      <div className="h-screen bg-black">
        <AboutGBU />
      </div>
      <div className="bg-black -z-10">
        <img
          src={BgVid}
          className="-z-1 absolute h-full w-full object-cover opacity-50"
        />
        <Demographs />
        <Events />
        <Sponsor />
        <Footer />
      </div>
    </>
  );
}
export default App;

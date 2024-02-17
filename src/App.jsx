import "./App.css";
import HeroNew from "./components/HeroNew";
import BgVid from "./assets/Videos/cosmos.gif";
import BgImage from "./assets/Videos/skull.gif";
import Nav from "./components/nav/Nav";
import Events from "./components/Events";
import AboutGBU from "./components/AboutGBU";
import Bgabout from "./assets/Videos/camille-unknown-barcelona21xx-full.gif";
import AboutGlitch from "./components/AboutGlitch";
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
        {/* <img src={BgGlitch} className="-z-10 absolute object-cover brightness-[70%]" /> */}
        <AboutGlitch />
      </div>
      <div className="h-screen">
        <img src={Bgabout} className="-z-10 absolute object-cover w-screen brightness-[70%]" />
        <AboutGBU />
      </div>
      <div
        style={{
          backgroundImage: `url(${BgVid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen flex items-strech p-3 flex-col gap-3"
      >
        <Events />
      </div>
    </>
  );
}
export default App;

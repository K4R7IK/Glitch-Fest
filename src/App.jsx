import "./App.css";
import HeroNew from "./components/HeroNew";
import BgImage from "./assets/Videos/skull.gif";
import Nav from "./components/nav/Nav";
import Events from "./components/Events";
import AboutGBU from "./components/AboutGBU";
import AboutGlitch from "./components/AboutGlitch";
import Footer from "./components/Footer";
import Sponsor from "./components/soponsor";
import Demographs from "./components/Demographs";

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
      <div className="min-h-screen">
        <Events />
      </div>
      <div className="bg-black">
        <Demographs />
      </div>
      <div className="flex flex-col justify-center items-center bg-black gap-1">
        <hr className="text-white w-full" />
        <Sponsor />
        <hr className="text-white w-full" />
      </div>
      <Footer />
    </>
  );
}
export default App;

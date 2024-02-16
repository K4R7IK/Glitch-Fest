import "./App.css";
import HeroNew from "./components/HeroNew";
import bgVid from "./assets/Videos/cosmos.gif";
import BgImage from "./assets/Videos/skull.gif";
import Nav from "./components/nav/Nav";
import Events from "./components/Events";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen flex items-strech p-3 flex-col gap-3"
      >
        <Nav />
        <HeroNew />
      </div>
      <div
        style={{
          backgroundImage: `url(${bgVid})`,
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

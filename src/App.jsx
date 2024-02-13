import './App.css'
import HeroNew from './components/HeroNew'
import BgImage from "./assets/Videos/coding-slow.gif";
import Nav from './components/nav/Nav';
import About from './components/About';

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
      
      <About/>
    </>
  )
}
export default App

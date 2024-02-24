import React from "react";
import GlitchLogo from "../assets/Glitch_logo.png";
import { Link } from "react-router-dom";

function HFstickey() {
  const rotateAnimation = {
    animation: "spin 3s linear infinite", // Customize the animation duration (10s in this example)
  };

  return (
    <>
      <div>
        <Link to="/" className="animate-spin fixed right-2 bottom-6 h-16 w-16 h-16" style={rotateAnimation}> <img src={GlitchLogo} alt="GlitchLogo" /> </Link>
      </div>

    </>
  )
}

export default HFstickey;

import React from "react";
import "ldrs/hourglass";

const Loading = () => {
  return (
    <div className="z-50 h-screen bg-black flex items-center justify-center">
      <l-hourglass size="300" color="white"></l-hourglass>
    </div>
  );
};

export default Loading;

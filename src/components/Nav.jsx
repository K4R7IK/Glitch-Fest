import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 right-0 left-0">
      <div class="font-pixelify text-md flex items-center justify-center gap-4 bg-black bg-opacity-20 backdrop-blur-lg py-2 uppercase text-primary1 lg:text-2xl lg:gap-12">
      <a class="hover:text-primary2 " href="#AboutGlitch">
        About
      </a>
      <a class="hover:text-primary2 ">Hackathon</a>
      <a class="hover:text-primary2 " href="#Events">
        Event
      </a>
      <a class="hover:text-primary2"  href="https://linktr.ee/Anurag_Rawal_04">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;

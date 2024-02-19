import React from "react";

const Nav = () => {
  return (
    <>
      <header class="text-nbg bg-bg backdrop-blur-lg rounded-md bg-opacity-10 transition-all mx-auto px-5 py-3">
        <nav class="flex flex-wrap items-center justify-center text-lg lg:text-2xl font-pixelify uppercase gap-7 2xl:text-3xl">
          <a class="hover:text-primary2 " href="#AboutGlitch">About</a>
          <a class="hover:text-primary2 ">Hackathon</a>
          <a class="hover:text-primary2 " href="#Events">Event</a>
          <a class="hover:text-primary2 ">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Nav;

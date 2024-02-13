import React from "react";

const Nav = () => {
  return (
    <>
      <header class="text-nbg bg-bg backdrop-blur-md rounded-md bg-opacity-20">
        <div class="flex flex-wrap p-3 flex-col md:flex-row justify-stretch">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            LOGO
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center justify-center text-xl font-pixelify uppercase">
            <a class="mr-5 hover:text-primary2 ">About</a>
            <a class="mr-5 hover:text-primary2 ">Hackathon</a>
            <a class="mr-5 hover:text-primary2 ">Event</a>
            <a class="mr-5 hover:text-primary2 ">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;

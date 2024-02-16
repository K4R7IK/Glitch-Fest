import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isTop = currentScrollPos < 100;

      setIsCollapsed(!isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        class={`text-nbg bg-bg backdrop-blur-md rounded-md bg-opacity-20 transition-all`}
      >
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

import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkId } from "react-scroll"
const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 right-0 left-0">
      <div class="font-pixelify text-md flex items-center justify-center gap-4 bg-black bg-opacity-20 backdrop-blur-lg py-2 uppercase text-primary1 lg:text-3xl lg:gap-12">
      {/* <a className="hover:text-primary2" href="#AboutGlitch"> About </a> */}
      <LinkId class="hover:text-primary2 " to="AboutGlitch" >About</LinkId>
      <LinkId to="Events" class="hover:text-primary2 " > Events </LinkId>
      {/* <a class="hover:text-primary2"  href="#AboutGlitch">About</a> */}
      {/* <a class="hover:text-primary2"  href="#Events">Events</a> */}
        < Link to="/hackathon/" className="hover:text-primary2 ">Hackathon</Link>
        < Link to="/broucher/" className="hover:text-primary2 ">Broucher</Link>
      <a class="hover:text-primary2"  href="https://linktr.ee/Anurag_Rawal_04">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkId } from "react-scroll";
const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 right-0 left-0 ">
      {/* <div className="font-pixelify text-md flex items-center justify-center gap-4 bg-black bg-opacity-20 backdrop-blur-lg py-2 uppercase text-primary1 lg:text-3xl lg:gap-12"> */}
      <div className="font-pixelify text-md flex items-center justify-center gap-4 bg-black  py-2 uppercase text-primary1 lg:text-3xl lg:gap-12">
        <LinkId className="hover:text-primary2 " to="AboutGlitch">
          About
        </LinkId>
        <LinkId to="Events" className="hover:text-primary2 ">
          Events
        </LinkId>
        <Link to="/hackathon/" className="hover:text-primary2 ">
          Hackathon
        </Link>
        <Link to="/broucher/" className="hover:text-primary2 ">
          Broucher
        </Link>
        <Link to="/contact/" className="hover:text-primary2 ">
          Contact
        </Link>
      </div>
    </nav>
  );

  // return (
  //   <>
  //     <nav className="fixed top-0 z-50 right-0 left-0 ">
  //       <div className="font-pixelify text-md flex items-center justify-center gap-4 bg-black bg-opacity-20 backdrop-blur-lg py-2 uppercase text-primary1 lg:text-3xl lg:gap-12">
  //         <LinkId className="hover:text-primary2 " to="AboutGlitch">
  //           About
  //         </LinkId>
  //         <LinkId to="Events" className="hover:text-primary2 ">
  //           Events
  //         </LinkId>
  //         {/* <Link to="/hackathon/" className="hover:text-primary2 "> */}
  //         {/*   Hackathon */}
  //         {/* </Link> */}
  //         {/* <Link to="/broucher/" className="hover:text-primary2 "> */}
  //         {/*   Broucher */}
  //         {/* </Link> */}
  //         <a
  //           className="hover:text-primary2"
  //           href="https://linktr.ee/Anurag_Rawal_04"
  //         >
  //           Contact
  //         </a>
  //       </div>
  //     </nav>
  //   </>
  // );
};

export default Nav;

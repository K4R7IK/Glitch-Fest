import React from "react";
import logo from "../assets/Glitch_logo.png";

function Footer() {
  const rotateAnimation = {
    animation: "spin 10s linear infinite", // Customize the animation duration (10s in this example)
  };
  return (
    <>
      <footer className="relative bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left justify-center items-center gap-5">
            <img
              src={logo}
              alt="glitch"
              className="animate-spin lg:w-1/5 w-1/2 md:w-1/3"
              style={rotateAnimation}
            />
            <div className="w-full lg:w-4/12 px-4">
              <h4 className="text-3xl lg:text-6xl font-silkscreen text-white">
                Glitch
              </h4>
              <h5 className="text-md lg:text-lg mt-1 mb-1 text-white">
                Embrace Imperfections, Elevate Innovation. An insight into
                Gautam Buddha University’s biggest annual tech fest.
              </h5>
            </div>
            <div className="flex items-start flex-grow gap-10">
              <div className="w-full lg:w-fit mb-5 lg:mb-0">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled text-gray-400">
                  <li>
                    <a
                      className="hover:text-white font-semibold block pb-2 text-sm"
                      href="#AboutGlitch"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Hackathon
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white font-semibold block pb-2 text-sm"
                      href="#Events"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white font-semibold block pb-2 text-sm"
                      href="https://linktr.ee/Anurag_Rawal_04"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-fit mb-5 lg:mb-0">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled text-gray-400">
                  <li>
                    <a
                      className="hover:text-white font-semibold block pb-2 text-sm"
                      href="#Demographs"
                    >
                      Demographs
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Previous Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="w-full px-4 text-center">
            <div className="text-sm text-white font-medium py-1 font-space-grotesk">
              Copyright © 2024 Glitch.
              <br />
              Created by{" "}
              <a href="https://bento.me/k4r7ik" target="_blank">
                Kartik Kushwaha
              </a>
              {" "}&{" "}
              <a href="https://github.com/ashish-kus/" target="_blank">
                Ashish Kushwaha
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

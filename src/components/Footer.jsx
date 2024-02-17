import React from "react";
import logo from "../assets/Glitch_logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  const rotateAnimation = {
    animation: 'spin 10s linear infinite', // Customize the animation duration (2s in this example)
  };
  return (
    <>
      <footer className="relative bg-black pt-24 pb-6">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="lg:w-2/12 px-4 ">
              <img src={logo} alt="glitch" className="animate-spin" style={rotateAnimation} />
            </div>
            <div className="w-full lg:w-4/12 px-4 ">
              <h4 className=" text-8xl  font-silkscreen text-white "> Glitch </h4>
              <h5 className="text-md mt-0 mb-2 text-white">
              Embrace Imperfections, Elevate Innovation. An insight into Gautam Buddha University’s biggest annual tech fest. 
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-dribbble"></i>
                </button>
                <button className="bg-white text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-8">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled text-gray-400">
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#About">About Us</a>
                    </li>
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#Hackathon">Hackathon</a>
                    </li>
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#Events">Events</a>
                    </li>
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#Contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled text-gray-400">
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#">Demographs</a>
                    </li>
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="hover:text-white font-semibold block pb-2 text-sm" href="#">Previous Events</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © <span id="get-current-year">2021 </span>
                <a href="https://www.creative-tim.com/product/notus-js" className="text-white hover:text-gray-800" target="_blank">
                  Glitch GBU
                  <a href="#" className="text-white hover:text-white-800"> & created by GBU students</a>.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
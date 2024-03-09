import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkId } from "react-scroll";

function HFfooter() {
  return (
    <>
      <footer className="">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <LinkId
              smooth={true}
              className="inline-block rounded-full bg-primary1 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
              to={`HFlanding`}
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </LinkId>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-primary1 lg:justify-start">
                <div className="text-primary2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div className="text-center text-4xl pl-2 font-extrabold font-mono">
                  Hackfed
                </div>
              </div>

              <p className="text-white text-center text-lg pl-12 lg:text-left">
                This hackthon conducted under GLITCH TechFest 2024. Click on rotating circle to learn more!
              </p>
            </div>

            {/* <ul */}
            {/*   className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12" */}
            {/* > */}
            {/*   <li> */}
            {/*     <a className="text-white transition hover:text-white/75" href="#"> About </a> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <a className="text-white transition hover:text-white/75" href="#"> Services </a> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <a className="text-white transition hover:text-white/75" href="#"> Projects </a> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <a className="text-white transition hover:text-white/75" href="#"> Blog </a> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>

        <p className="w-full text-center pb-2 text-gray-600">
          Made by {" "} 
          <a href="https://github.com/ashish-kus/" target="_blank">
            Ashish Kushwaha
          </a>
          {" "}&{" "}
          <a href="https://bento.me/k4r7ik" target="_blank">
            Kartik Kushwaha
          </a>
        </p>
      </footer>
    </>
  );
}

export default HFfooter;

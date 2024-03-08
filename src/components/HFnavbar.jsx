import React from "react";

function HFnavbar() {
  return (
    <>
      <nav class=" shadow px-8 md:px-auto pt-12 flex flex-row">
        <div class="md:h-16  mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div class="text-indigo-500 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <p className="font-extrabold font-mono text-xl px-2 text-white py-2">
              HackFed
            </p>
          </div>
          <div class="">
            {/* <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-bold"> */}
            {/*   <span>13 April'24</span> */}
            {/* </button> */}
            <h2 className="text-white text-lg font-mono">
              13 April'24, Gautam Buddha University
            </h2>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HFnavbar;

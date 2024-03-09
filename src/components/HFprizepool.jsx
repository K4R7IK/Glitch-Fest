import React from "react";

function HFprizepool() {
  return (
    <>
      <div >
        <h1 className="font-bold text-6xl w-full text-primary1 font-mono text-center">
          Prize Pool
        </h1>
        <div className="  py-12 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-primary1 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="p-1 bg-primary1"></div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4 ">3rd Prize</h2>
                <p className="text-white mb-6">Ideas implemented always worth</p>
                <p className="text-4xl font-bold text-white mb-6">5000 INR</p>
              </div>
              <div className="  p-4">
                <button className=" bottom-0 w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Register
                </button>
              </div>
            </div>
            <div className="border-2 border-primary1 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="p-1 bg-primary1"></div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4 ">1st Prize</h2>
                <p className="text-white mb-6">
                  Change for good cause is appreciated.
                </p>
                <p className="text-4xl font-bold text-white mb-6">15000 INR</p>
                {/* <ul className="text-sm text-white mb-6"> */}
                {/*   <li className="mb-2 flex items-center"> */}
                {/*     <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" */}
                {/*       xmlns="http://www.w3.org/2000/svg"> */}
                {/*       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" */}
                {/*         d="M5 13l4 4L19 7"></path> */}
                {/*     </svg> */}
                {/*     10 Users */}
                {/*   </li> */}
                {/*   <li className="mb-2 flex items-center"> */}
                {/*     <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" */}
                {/*       xmlns="http://www.w3.org/2000/svg"> */}
                {/*       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" */}
                {/*         d="M5 13l4 4L19 7"></path> */}
                {/*     </svg> */}
                {/*     Basic Features */}
                {/*   </li> */}
                {/*   <li className="flex items-center"> */}
                {/*     <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" */}
                {/*       xmlns="http://www.w3.org/2000/svg"> */}
                {/*       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" */}
                {/*         d="M5 13l4 4L19 7"></path> */}
                {/*     </svg> */}
                {/*     24/7 Support */}
                {/*   </li> */}
                {/* </ul> */}
              </div>
              <div className="p-4">
                <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Register
                </button>
              </div>
            </div>

            <div className="border-2 border-primary1 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="p-1 bg-primary1"></div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4 ">2nd Prize</h2>
                <p className="text-white mb-6">Consistancy is the also a win.</p>
                <p className="text-4xl font-bold text-white mb-6">10000 INR</p>
                {/* <ul className="text-sm text-white mb-6"> */}
                {/*   <li className="mb-2 flex items-center"> */}
                {/*     <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" */}
                {/*       xmlns="http://www.w3.org/2000/svg"> */}
                {/*       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" */}
                {/*         d="M5 13l4 4L19 7"></path> */}
                {/*     </svg> */}
                {/*     10 Users */}
                {/*   </li> */}
                {/*   <li className="mb-2 flex items-center"> */}
                {/*     <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" */}
                {/*       xmlns="http://www.w3.org/2000/svg"> */}
                {/*       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" */}
                {/*         d="M5 13l4 4L19 7"></path> */}
                {/*     </svg> */}
                {/*     Basic Features */}
                {/*   </li> */}
                {/*   <li className="flex items-center"> */}
                {/*     <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" */}
                {/*       xmlns="http://www.w3.org/2000/svg"> */}
                {/*       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" */}
                {/*         d="M5 13l4 4L19 7"></path> */}
                {/*     </svg> */}
                {/*     24/7 Support */}
                {/*   </li> */}
                {/* </ul> */}
              </div>
              <div className="p-4">
                <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HFprizepool;

import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
// import EventJson from '../assets/data.json';

const PerEvent = () => {
  console.log(EventJson);
  return (
    <>
      <Nav/>
        <section class="text-white body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-primary1 tracking-widest">Tagline</h2>
                <h1 class="text-primary1 text-3xl title-font font-medium mb-4">Event Name</h1>
                <div class="flex mb-4">
                  <p class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</p>
                  <p class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Date</p>
                </div>
                <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-100">Entry Fee</span>
                  <span class="ml-auto text-white">500</span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-100">Winner</span>
                  <span class="ml-auto text-white">50000</span>
                </div>

                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-100">Runnerup</span>
                  <span class="ml-auto text-white">50000</span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span class="text-gray-100">Theme</span>
                  <span class="ml-auto text-white">Devil</span>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-white">$58.00</span>
                  <Link class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</Link>
                </div>
              </div>
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
            </div>
          </div>
        </section>
      <Footer/>
    </>
  )
};

export default PerEvent;

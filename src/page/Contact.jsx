import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Nav />
      <div className=" h-fit">
        <Nav />
        <section className="text-white font-mono relative w-screen ">
          <div className="absolute inset-0 bg-black">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7017.865858561514!2d77.5206807!3d28.4212806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0f918abee8d%3A0x8c72169fdd7154b0!2sGautam%20Buddha%20University!5e0!3m2!1sen!2sin!4v1710435289384!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe className="w-full h-full filter grayscale contrast-200 opacity-40" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7017.865858561514!2d77.5206807!3d28.4212806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0f918abee8d%3A0x8c72169fdd7154b0!2sGautam%20Buddha%20University!5e0!3m2!1sen!2sin!4v1710435289384!5m2!1sen!2sin" ></iframe>
          </div>
          <div className="px-5 py-24 w-screen bottom-16 flex flex-col lg:flex-row lg:justify-end">
            <div className="lg:w-1/4 md:w-1/2 bg-black rounded-lg p-2 flex flex-col  w-full  md:mt-0 relative z-10 shadow-md">
              <div className="p-6 mr-2  sm:rounded-lg">
                <h1 className="text-xl sm:text-5xl text-gray-100   tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-sm sm:text-2xl font-medium text-gray-100  mt-2"> Let's start a conversation  </p>
                <div className="flex items-center mt-8 text-gray-100 ">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4  tracking-wide  w-full">
                    Gautam Buddha University,
                    Yamuna Expressway,
                    Greater Noida Gautam Budh Nagar
                    Uttar Pradesh (INDIA) - 201312.
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-100">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91 72100 01528
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-100">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    tech.fest@gbu.ac.in
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-100 text-lg mb-1 font-medium title-font">Message</h2>
              <p className="leading-relaxed mb-5 text-white">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="pt-28"> */}
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Contact;

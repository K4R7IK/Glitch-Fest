import React from "react";

function HFhero() {
  return (
    <>
      <section className="text-gray-400  h-screen flex align-middle">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary1">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Hackfed was started with just one aim in mind - to
              gather fresh, young minds and direct them to a
              path that leads to a brighter future. We are a
              thriving student community, with over 2k members
              currently associated with us.
              The Hackfed community is a sanctuary for like-
              minded individuals where they can learn and master
              new skills. Our community’s foundation rests upon
              the strengths of collaboration and support.
              What inspires us is our firm belief that one should
              always look for fresh prospects to expand their
              knowledge, and guide others along the way too.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Join community</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HFhero;

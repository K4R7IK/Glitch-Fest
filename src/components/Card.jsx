import React from "react";

const NewCard = ({ info }) => {
  return (
    <div className="grid min-h-[140px] place-items-center rounded-lg p-6 max-w-[48rem] hover:max-w-[50rem] transition-all">
      <div className="bg-gradient-to-tr from-indigo-400 to-pink-400 p-[2px] relative rounded-xl ">
        <div className="relative flex flex-col md:flex-row rounded-xl shadow-md bg-black">
          <div className="relative md:w-[30%] rounded-xl hidden md:block bg-[poster] flex-none">
            <img
              src={info.poster}
              alt="image"
              className="object-cover w-fit rounded-xl rounded-r-none"
            />
          </div>
          <div className="relative md:w-[30%] rounded-xl md:hidden bg-[poster] flex-none">
            <img
              src={info.banner}
              alt="image"
              className="object-cover w-fit rounded-xl rounded-b-none"
            />
          </div>
          <div className="p-6 flex flex-col justify-around">
            <h6 className="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-primary1 uppercase">
              {info.title}
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
              {info.eventName}
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-300">
              {info.eventDesc}
            </p>
            <a
              className="inline-block self-end"
              href={info.link}
              target="_blank"
            >
              <button
                className="px-6 py-3 font-mono font-bold text-center text-primary1 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-gray-500/10"
                type="button"
              >
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

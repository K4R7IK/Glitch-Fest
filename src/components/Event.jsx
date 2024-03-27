import React from "react";
import Card from "./Card";
import Info from "../assets/events.json";

const NewEvent = () => {
  return (
    <>
      <div className="h-full relative" id="Events">
        <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808032_1px,transparent_1px),linear-gradient(to_bottom,#80808032_1px,transparent_1px)] bg-[size:35px_35px]"></div>
        <h1 className="lg:text-8xl md:text-7xl text-5xl text-white font-silkscreen uppercase text-center relative py-4">
          Events
        </h1>
        <div className="flex flex-wrap justify-center">
          {Info.map((event, index) => (
            <Card info={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewEvent;

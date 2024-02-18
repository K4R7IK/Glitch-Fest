import React from "react";
import BgVid from "../assets/Videos/cosmos.gif";
import Cards from "./cards/Cards";
import bgImage from "../assets/Videos/cracks.jpg";

const Events = () => {
  const day1 = [
    "Opening Ceremony",
    "Exhibition",
    "Coding Challenges",
    "Face Painting",
    "Cinematography",
    "Cosplay",
    "Fashion Show",
    "Workshop/Bootcamps",
    "Bridge Making",
    "Eco Cart",
  ];
  const day2 = [
    "Hackathon Begins",
    "UI/UX Challenges",
    "E-Sports",
    "Startup Challenge",
    "Tech Debate",
    "Capture the flag",
    "Tresure Hunt",
    "Finding Mona",
    "Jamming",
    "Dance Competition",
  ];
  const day3 = [
    "Closing Ceremony",
    "Technology Discussion",
    "Hackathon Presentation",
    "Jury Evaluation",
    "Award Ceremony",
    "Acknowledgement",
    "Epiphany Night",
  ];
  return (
    <>
      <div className="h-full bg-black -z-10">
        <img src={BgVid} className="h-full w-full absolute object-cover z-0 opacity-50" />
        <section className="flex justify-center items-center gap-6 flex-col h-screen">
          <h1 className="text-9xl text-white font-silkscreen uppercase z-[1]">
            Events
          </h1>
          <hr className="bg-nbg h-auto w-5/6 z-[1]" />
          <Cards title="Day 1" bgImg={bgImage} events={day1} />
          <Cards title="Day 2" bgImg={bgImage} events={day2} />
          <Cards title="Day 3" bgImg={bgImage} events={day3} />
        </section>
      </div>
    </>
  );
};

export default Events;

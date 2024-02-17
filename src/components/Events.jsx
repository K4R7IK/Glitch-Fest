import React from "react";
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
      <section className="flex justify-center items-center gap-6 flex-col pb-6">
        <h1 className="text-9xl text-white font-silkscreen uppercase mt-5 z-[1]">
          Events
        </h1>
        <hr className="bg-nbg h-auto w-5/6 mb-5" />
        <Cards title="Day 1" bgImg={bgImage} events={day1} />
        <Cards title="Day 2" bgImg={bgImage} events={day2} />
        <Cards title="Day 3" bgImg={bgImage} events={day3} />
      </section>
    </>
  );
};

export default Events;

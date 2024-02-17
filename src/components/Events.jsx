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
      <section className="min-h-full flex justify-center items-center rounded-lg gap-6 flex-col flex-grow bg-black bg-opacity-20 backdrop-blur-sm pb-2">
        <h1 className="text-9xl text-nbg font-silkscreen uppercase mt-5">
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

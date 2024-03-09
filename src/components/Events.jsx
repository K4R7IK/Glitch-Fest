import React from "react";
import Cards from "../components/Cards";
import BgVid from "../assets/Videos/cosmos.gif";
import bgImage1 from "../assets/ascii1.png";
import bgImage2 from "../assets/ascii2.png";
import bgImage3 from "../assets/ascii1.png";

const Events = () => {
  const day1 = [
    "Opening Ceremony",
    "Exhibition",
    "Coding Challenges",
    "Face Painting",
    "UI/UX Challenges",
    "Cinematography",
    "Workshop/Bootcamps",
    "Bridge Making",
    "Band Wars",
  ];
  const day2 = [
    "Fashion Show",
    "Hackathon Begins",
    "E-Sports",
    "Startup Challenge",
    "Tech Debate",
    "Capture the Flag",
    "Treasure Hunt",
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
    <div className="relative h-full" id="Events">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${BgVid})` }}
      ></div>
      <div className="flex justify-center items-center flex-col gap-4 h-full pb-4">
        <h1 className="text-7xl text-white font-silkscreen uppercase z-[1] pt-4">
          Events
        </h1>
        <hr className="bg-nbg h-auto w-5/6" />
        <div className="flex items-center justify-evenly flex-col flex-grow max-h-full gap-3">
          <Cards title="Day 1" bgImg={bgImage1} events={day1} />
          <Cards title="Day 2" bgImg={bgImage2} events={day2} />
          <Cards title="Day 3" bgImg={bgImage3} events={day3} />
        </div>
      </div>
    </div>
  );
};

export default Events;

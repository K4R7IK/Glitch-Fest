import React from "react";
import SideImg from "../assets/Videos/skull3.gif";
const AboutGlitch = () => {
  return (
    <>
      <div className="h-full flex flex-row-reverse">
        <img src={SideImg} className="object-cover brightness-[70%]" />
        <div className="bg-black h-full w-1/2 pt-20 pl-16">
          <h1 className="text-nbg text-5xl font-silkscreen">About</h1>
          <h1 className="text-9xl font-pixelify pl-4 text-[#ef1897]">Glitch</h1>
          <hr className="text-nbg w-3/4 my-2" />
          <p className="font-spacegrostek text-2xl text-nbg mt-10 w-5/6 leading-8">
            Glitch Tech Fest 2024 is a great opportunity to connect with fresh
            and talented students. The tech fest brings together students and
            experts from various universities who represent a variety of
            technological domains.
            <br />
            Glitch provides a brilliant platform for students to showcase their
            skills in modern technology. This allows the participants to have
            their profile stand out from the crowd, and gain unprecedented
            advantage. With the constant release of newer technologies and
            techniques, one is bound to get perplexed about what could be the
            right path to follow. Glitch will also solve this problem faced by a
            lot of students, by providing them with live interactions with
            domain and industry experts. The tech fest also becomes a perfect
            venue for the participants to interact with each other and forge new
            friendships.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutGlitch;

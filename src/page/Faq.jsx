import React, { useState } from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "How to register?",
      answer:
        "Soon, we'll be launching the registration portal. Stay tuned for updates!",
    },
    {
      question: "Will I get a refund?",
      answer:
        "No, as such, refunds will not be provided. However, in case of any emergency, you can transfer your registration to someone else.",
    },
    {
      question: "Are accommodation facilities available?",
      answer:
        "Participants will beaccomodated in the Guest house of Gautam Buddha University for a nominal fee. Participants outside Delhi-NCR will be given priority. The charges will be updated soon.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="md:flex md:justify-center md:items-center md:bg-black md:flex-col">
        <hr className="md:w-5/6" />
        <div className="text-white bg-black flex justify-center items-center flex-col pt-3 md:w-5/6">
          <h1 className="text-5xl w-full font-silkscreen text-center">FAQ</h1>

          {faqData.map((faq, index) => (
            <div key={index} className="w-full lg:w-1/2">
              <button
                className="w-full text-center p-4 text-base text-primary1 font-semibold flex items-center font-space-grotesk hover:text-primary2 lg:text-xl"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex-grow">{faq.question}</span>
                <span
                  className={`ml-auto transition-transform duration-800 text-primary1 text-2xl transform ${activeIndex === index ? "rotate-45" : "rotate-0"}`}
                >
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className="p-4 border-b border-white">
                  <p className="text-white font-space-grotesk text-base text-center lg:text-xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr className="md:w-5/6" />
      </div>
    </>
  );
};

export default FaqSection;

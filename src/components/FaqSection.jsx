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
        "No, as such, refunds will not be provided. However, in case of any emergency, you can transfer your registration to someone else. For more details, contact us at",
    },
    {
      question: "Are accommodation facilities available?",
      answer:
        "Participants will beaccomodated in the Guest house of Gautam Buddha University for a nominal fee. Participants outside Delhi-NCR will be given priority. The charges will be updated soon. For more details, contact us at",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto w-1/2  text-white p-16">
      <h1 className="text-5xl w-full my-8 flex justify-center align-middle font-pixelify">
        Frequently Asked Questions
      </h1>

      {faqData.map((faq, index) => (
        <div key={index} className="faq-item mb-6">
          <button
            className="faq-trigger w-full text-left p-4 text-2xl text-primary1 font-bold flex items-center font-space-grotesk hover:text-primary2"
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
            <div className="faq-content p-4 border-b border-gray-800">
              <p className="text-white font-space-grotesk text-xl ">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;

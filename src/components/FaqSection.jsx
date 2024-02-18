import React, { useState } from 'react';

const FaqSection = () => {
  const faqData = [
    {
      question: 'Why is the sky blue?',
      answer: 'The sky appears blue due to the scattering of sunlight by the gases and particles in the Earth\'s atmosphere.',
    },
    {
      question: 'How do plants make food?',
      answer: 'Plants make food through a process called photosynthesis, where they use sunlight to convert carbon dioxide and water into glucose.',
    },
    {
      question: 'What is the capital of France?',
      answer: 'The capital of France is Paris.',
    },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto w-1/2  text-white p-16">
      <h1 className="text-3xl font-bold w-full my-8 flex justify-center align-middle">Frequently Asked Questions</h1>

      {faqData.map((faq, index) => (
        <div key={index} className="faq-item mb-6">
          <button
            className="faq-trigger w-full text-left p-4 text-xl text-primary1 font-semibold flex items-center"
            onClick={() => toggleFaq(index)}
          >
            <span className="flex-grow">{faq.question}</span>
            <span className={`ml-auto transition-transform duration-800 text-primary1 text-2xl transform ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}>
              +
            </span>
          </button>

          {activeIndex === index && (
            <div className="faq-content p-4 border-b border-gray-800">
              <p className="text-white">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;



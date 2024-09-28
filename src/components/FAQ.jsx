import React, { useState } from "react";
import images from '../constants/images';

const borderColors = [
  "border-l-googleRed",
  "border-l-googleGreen", 
  "border-l-primary",     
  "border-l-googleYellow"
];

const darkBorderColors = [
  "dark:border-l-googleRed",
  "dark:border-l-googleGreen", 
  "dark:border-l-primary",     
  "dark:border-l-googleYellow"
];

const imageSources = [
  images.vectorRed,   
  images.vectorGreen, 
  images.vectorBlue,  
  images.vectorYellow 
];

const faqData = [
  {
    question: "What is GDG?",
    answer: `Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.`,
  },
  {
    question: "How can you become a part of GDG?",
    answer: `We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two-step process involving form filling and a personal interview. Students acing both rounds are selected to be part of the core team.`,
  },
  {
    question: "What does a GDG Lead do?",
    answer: `A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.`,
  },
  {
    question: "How is DSC related to Google?",
    answer: `A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.`,
  },
  {
    question: "How to reach us?",
    answer: 'Mail us at "dsc.rknec@gmail.com"',
  },
];

const FAQ = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleFAQ = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto mt-8">
      <h2 className="text-[60px] text-fontColor dark:text-darkFontColor font-bold text-center mb-[100px]">FAQs</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4 flex flex-col items-center">
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full text-left p-4 rounded-full focus:outline-none border-[12px] border-[#E1E1E1] dark:border-[#4A4A4A] `}
            aria-expanded={activeIndices.includes(index)}
            aria-controls={`faq-content-${index}`}
          >
            <div className="flex items-center px-4 gap-10">
              <span className={`transform transition-transform duration-500 ${activeIndices.includes(index) ? "rotate-180" : "rotate-0"}`}>
                <img src={imageSources[index % imageSources.length]} alt="Expand/Collapse Icon" className="h-4"/>
              </span>
              <span className="text-[32px] font-bold text-fontColor dark:text-darkFontColor">{faq.question}</span>
            </div>
          </button>
          <div
            id={`faq-content-${index}`}
            className={`w-[90%] overflow-hidden transition-max-height duration-700 ease-in-out max-h-0 mt-7 rounded-xl border-[#E1E1E1] dark:border-[#4A4A4A]  border-[12px] border-opacity-0 dark:border-opacity-0
              ${activeIndices.includes(index) ? 'max-h-[400px] mb-[120px] border-opacity-100 dark:border-opacity-90' : ''} 
              ${borderColors[index % borderColors.length]}
              ${darkBorderColors[index % darkBorderColors.length]}`
            }
          >
            <div className="p-6 text-fontColor dark:text-darkFontColor text-left text-[25px] rounded-b-md ">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

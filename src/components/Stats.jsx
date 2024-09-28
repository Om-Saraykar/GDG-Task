import React from 'react';

const statsData = [
  { value: '03', label: 'Years' },
  { value: '10', label: 'Events' },
  { value: '1K', label: 'Community Members' },
  { value: '200', label: 'Attendees' },
];

const Stats = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around py-[15rem] px-4">
      {statsData.map((stat, index) => (
        <div key={index} className="flex flex-col items-center w-full lg:w-1/5 mb-10 lg:mb-0">
          {/* Circle Container */}
          <div className="relative w-[170px] h-[170px] lg:w-[210px] lg:h-[210px] flex justify-center items-center">
            {/* Quarter Segments */}
            <div
              className="absolute inset-0 rounded-full border-[15px] lg:border-[20px] border-googleRed"
              style={{
                clipPath: 'polygon(50% 50%, -200% 50%, 50% -200%)',
              }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-[15px] lg:border-[20px] border-primary"
              style={{
                clipPath: 'polygon(50% 50%, 50% -200%, 200% 50%)',
              }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-[15px] lg:border-[20px] border-googleYellow"
              style={{
                clipPath: 'polygon(50% 50%, 200% 50%, 50% 200%)',
              }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-[15px] lg:border-[20px] border-googleGreen"
              style={{
                clipPath: 'polygon(50% 50%, -200% 50%, 50% 200%)',
              }}
            ></div>
            {/* Text inside the circle */}
            <span className={`${stat.value.length > 2 ? 'text-[50px] lg:text-[60px]' : 'text-[60px] lg:text-[75px]'} font-bold text-fontColor dark:text-darkFontColor`}>
              {stat.value}+
            </span>
          </div>
          {/* Label below the circle */}
          <div className="mt-2 text-[32px] lg:text-[42px] font-medium text-[#353535] dark:text-[#E0E0E0]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

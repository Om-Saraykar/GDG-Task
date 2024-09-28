import React, { useState } from 'react';
import images from '../constants/images';

const technologies = [
  {
    name: 'Android',
    logo:  `${images.androidLogo}`, 
    color: 'googleRed',
  },
  {
    name: 'Flutter',
    logo:  `${images.flutterLogo}`, 
    color: 'primary',
  },
  {
    name: 'Cloud',
    logo:  `${images.cloudLogo}`, 
    color: 'googleGreen',
  }
];

const Technologies = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className='flex items-center gap-20'>
        <div className='h-2 w-[400px] bg-googleRed rounded'></div>
        <h2 className="text-[70px] text-fontColor dark:text-darkFontColor font-bold">Technologies</h2>
        <div className='h-2 w-[400px] bg-googleRed rounded'></div>
      </div>
      <p className="text-[32px] text-fontColor dark:text-darkFontColor mb-8">Domains That Excite Us to Collaborate and Teach!</p>
      <div className="flex justify-around gap-20 space-x-4 py-[10rem]">
      {technologies.map((tech, index) => (
        <div className=''>
          <div className={`border-t-8 border-${tech.color} w-1/2 mx-auto rounded mb-2`}></div>
          <div
            key={index}
            className={`h-[320px] w-[400px] flex flex-col items-center justify-center py-10 gap-2 p-4 rounded-3xl relative transition-transform transform hover:scale-105 cursor-pointer shadow-custom dark:shadow-custom-dark`}
          >
            <img src={tech.logo} alt={tech.name} className="h-[150px] mx-auto" />
            <h3 className="text-[40px] text-fontColor dark:text-darkFontColor font-medium">{tech.name}</h3>
            <img src={images.vector} alt="" className="h-[15px]" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Technologies;

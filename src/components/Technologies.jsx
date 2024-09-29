import React from 'react';
import images from '../constants/images';

const technologies = [
  {
    name: 'Android',
    logo: `${images.androidLogo}`, 
    color: 'googleRed',
  },
  {
    name: 'Flutter',
    logo: `${images.flutterLogo}`, 
    color: 'primary',
  },
  {
    name: 'Cloud',
    logo: `${images.cloudLogo}`, 
    color: 'googleGreen',
  }
];

const Technologies = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <div className='flex items-center gap-10 lg:gap-20'>
        <div className='h-2 w-[0px] lg:w-[200px] xl:w-[300px] bg-googleRed rounded'></div>
        <h2 className="text-[40px] md:text-[50px] lg:text-[70px] text-fontColor dark:text-darkFontColor font-bold text-center">Technologies</h2>
        <div className='h-2 w-[0px] lg:w-[200px] xl:w-[300px] bg-googleRed rounded'></div>
      </div>
      <p className="text-[24px] md:text-[28px] lg:text-[32px] text-fontColor dark:text-darkFontColor mb-8 text-center">
        Domains That Excite Us to Collaborate and Teach!
      </p>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 py-10 lg:py-[10rem]">
        {technologies.map((tech, index) => (
          <article key={index} className="flex flex-col items-center w-full max-w-xs mx-auto">
            <div className={`border-t-8 border-${tech.color} w-1/2 mx-auto rounded mb-2`}></div>
            <div
              className={`h-[250px] w-[230px] md:h-[300px] md:w-[280px] flex flex-col items-center justify-center py-10 gap-2 p-4 rounded-3xl relative transition-transform transform hover:scale-105 cursor-pointer shadow-custom dark:shadow-custom-dark`}
              role="button"
              aria-label={`Learn more about ${tech.name}`}
            >
              <img src={tech.logo} alt={tech.name} className="h-[80px] md:h-[120px] w-auto mx-auto" />
              <h3 className="text-[30px] md:text-[36px] lg:text-[40px] text-fontColor dark:text-darkFontColor font-medium text-center">{tech.name}</h3>
              <img src={images.vector} alt="" className="h-[15px]" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

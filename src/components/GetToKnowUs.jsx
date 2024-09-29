import React from 'react';
import images from '../constants/images';

const GetToKnowUs = ({ isDarkMode }) => {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col gap-14">
      <div className='flex flex-col items-center justify-center py-10 gap-2'>
        <img 
          src={isDarkMode ? images.whiteVector : images.vector} 
          alt="Decorative vector" 
          className='opacity-20 dark:opacity-20 h-[50px] lg:h-[80px]' 
        />
        <img 
          src={isDarkMode ? images.whiteVector : images.vector} 
          alt="Decorative vector" 
          className='opacity-60 dark:opacity-60 h-[50px] lg:h-[80px]' 
        />
        <img 
          src={isDarkMode ? images.whiteVector : images.vector} 
          alt="Decorative vector" 
          className='opacity-100 dark:opacity-100 h-[50px] lg:h-[80px]' 
        />
      </div>

      <h1 className="text-[40px] lg:text-[60px] xl:text-[70px] text-fontColor dark:text-darkFontColor font-bold text-center mb-20">Get To Know Us!</h1>

      {/* Our Mission Section */}
      <section className="mb-12">
        <h2 className="text-[40px] lg:text-[50px] xl:text-[60px] text-fontColor dark:text-darkFontColor font-medium">Our Mission</h2>
        <div className="w-[200px] h-[6px] mx-auto bg-primary mt-1"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
          <img
            src={images.mission1}
            alt="Our mission illustration"
            className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[700px] h-auto"
          />
          <div className='w-full lg:w-[800px] xl:w-[900px] border-primary border-solid border-r-[12px] rounded-xl py-5 px-5 mt-4 lg:mt-0'>
            <p className="text-[20px] lg:text-[30px] xl:text-[35px] md:text-right text-fontColor dark:text-darkFontColor">
              Our mission involves community engagement, leadership development, building strong tech foundations, while enabling all tech enthusiasts to contribute to the global society.
            </p>
          </div>
        </div>
      </section>

      {/* Our Perspective Section */}
      <section className="my-12">
        <h2 className="text-[40px] lg:text-[50px] xl:text-[60px] text-fontColor dark:text-darkFontColor font-medium">Our Perspective</h2>
        <div className="w-[200px] h-[6px] mx-auto bg-googleGreen mt-1"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
          <div className='w-full lg:w-[800px] xl:w-[900px] border-googleGreen border-solid border-l-[12px] rounded-xl py-5 px-5 mt-4 lg:mt-0'>
            <p className="text-[20px] lg:text-[30px] xl:text-[35px] md:text-left text-fontColor dark:text-darkFontColor">
              We’re a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas and working for a solution-driven team.
            </p>
          </div>
          <img
            src={images.mission2}
            alt="Our perspective illustration"
            className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[700px] h-auto"
          />
        </div>
      </section>

      {/* What Keeps Us Going Section */}
      <section className="my-12">
        <h2 className="text-[40px] lg:text-[50px] xl:text-[60px] text-fontColor dark:text-darkFontColor font-medium">What Keeps Us Going?</h2>
        <div className="w-[200px] h-[6px] mx-auto bg-googleYellow mt-1"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
          <img
            src={images.mission3}
            alt="What keeps us going illustration"
            className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[700px] h-auto"
          />
          <div className='w-full lg:w-[800px] xl:w-[900px] border-googleYellow border-solid border-r-[12px] rounded-xl py-5 px-5 mt-4 lg:mt-0'>
            <p className="text-[20px] lg:text-[30px] xl:text-[35px] md:text-right text-fontColor dark:text-darkFontColor">
              Our club helps students to connect, learn, empower, and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetToKnowUs;

import React from 'react';
import images from '../constants/images';
import GetToKnowUs from './GetToKnowUs';
import Stats from './Stats';
import Technologies from './Technologies';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = ( {isDarkMode} ) => {
  return (
    <>
      <div className="text-center py-14 px-4 dark:bg-[#181818]">
        <h1 className="text-[84px] font-bold dark:text-darkFontColor">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#DB4437]">o</span>
          <span className="text-[#F4B400]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#0F9D58]">l</span>
          <span className="text-[#DB4437]">e</span>
          <span className="text-heading dark:text-white"> Developer Groups</span>
        </h1>
        <h3 className="text-[50px] font-bold text-[#646464] dark:text-[#A0A0A0]">RBU Chapter</h3>
        <div className="mt-10 mb-6">
          <img src={images.centerImage} alt="Illustration" className="mx-auto w-[600px]" />
        </div>
        <p className="mx-[100px] md:mx-[200px] lg:mx-[350px] text-[35px] text-fontColor dark:text-darkFontColor mb-8">
          Google Developer Groups are community groups for college and university students interested in Google developer technologies.
        </p>
        <button className="bg-primary text-white hover:scale-105 font-bold px-12 py-3 rounded-lg text-2xl mt-8">
          JOIN US
        </button>
        
        <GetToKnowUs isDarkMode={isDarkMode} />
        <Stats />
        <Technologies />
        <FAQ />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default Home;

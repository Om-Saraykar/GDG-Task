import React from 'react';
import images from '../constants/images';

const Footer = ( {isDarkMode} ) => {
  return (
    <footer className="bg-[#ECECEC] dark:bg-[#1C1C1C]">
      <div className="w-full mm:w-[90%] xl:w-[85%] mx-auto flex md:flex-row flex-col justify-between items-center px-4 mb-8">
        <div className="flex flex-col items-center p-4 mt-10">
          <img src={images.gdgLogo} alt="" className='w-[90px]'/>
          <h1 className="text-[20px] lg:text-[32px] text-[#636d74] dark:text-[#B0BAC4]">Google Developer Groups</h1>
          <div className='flex items-center'>
            <p className="text-primary text-[15px] lg:text-[20px] mr-1">On Campus </p>
            <p className="text-[#636d74] dark:text-[#B0BAC4]  text-[15px] lg:text-[20px] mr-1">•</p>
            <p className="text-[#636d74] dark:text-[#B0BAC4]  text-[15px] lg:text-[20px] "> Ramdeobaba University</p>
          </div>
        </div>
        <div className='h-0 md:h-[12rem] border-r-[1.5px] border-black dark:border-[#CECECE] '></div>
        <div className="flex flex-col items-start gap-3 mt-[20px] md:mt-[100px]">
          <div className='flex items-center gap-5'>
            <img src={isDarkMode ? images.whiteLocation : images.locationIcon} alt="" className='w-7'/>
            <p className="text-black dark:text-[#CECECE] text-[15px] lg:text-[18px]">
              Shri Ramdeobaba College of Engineering and Management,
              <span className="hidden sm:inline"> 
                <br />
              </span>
              Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
            </p>
          </div>
          <div className='w-full flex sm:flex-row flex-col gap-5 sm:gap-0 justify-between items-start'>
            <a href="mailto:dsc.rknec@gmail.com" className="text-black dark:text-[#CECECE] flex items-center gap-5">
              <img src={isDarkMode ? images.whiteGmail : images.gmailIcon} alt="" className='w-7'/>
              <p className='underline text-[15px] lg:text-[18px]'>dsc.rknec@gmail.com</p>
            </a>
            <div className="flex flex-col py-1 pr-[32px] gap-3 w-full sm:w-auto sm:items-start items-center sm:mt-0 mt-4">
              <p className='text-[20px] pl-5 text-black dark:text-[#CECECE]'>Follow Us:</p>
              <div className='flex gap-2'>
                <div className='bg-[#F1F1F1] p-4 rounded-full'>
                  <a href="#" className='flex items-center justify-center'>
                    <img src={images.instaIcon} alt="Instagram" className="h-6 w-6 object-contain" />
                  </a>
                </div>
                <div className='bg-[#F1F1F1] p-4 rounded-full'>
                  <a href="#" className='flex items-center justify-center'>
                    <img src={images.linkedInIcon} alt="LinkedIn" className="h-6 w-6 object-contain" />
                  </a>
                </div>
                <div className='bg-[#F1F1F1] p-4 rounded-full'>
                  <a href="#" className='flex items-center justify-center'>
                    <img src={images.twitterIcon} alt="Twitter" className="h-6 w-6 object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={images.footerImage} alt="" className='w-full'/>
    </footer>
  );
};

export default Footer;

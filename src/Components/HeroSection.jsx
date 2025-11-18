import React from "react";
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from "react"

// If you have the GIF in your assets folder, import it like this:
// import backgroundGif from './assets/your-background.gif';

function HeroSection() {
  useEffect (() => {
    AOS.init({
      mirror: false,
      duration: 1000,
      once: true,
    });
  }, []);
  
  return (
    <div 
      className='hero overflow-hidden p-[35px] w-full flex flex-col gap-10 md:gap-10 items-center justify-center'
      style={{
        backgroundImage: `url('src/assets/wallpaper.gif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' // Optional: makes it fixed on scroll
      }}
    >
      <h1 
        data-aos="fade-down" 
        data-aos-delay="200"
        data-aos-easing="linear"
        data-aos-duration='500'
        className='heroH text-center mt-[150px] md:mt-200px md:w-[709px] h-[186px] md:h-[200px] lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] leading-[62px] md:leading-[88px] tracking-[0.2px] md:font-bold text-white'
      >
        Work at the speed of thought
      </h1>
      
      <p 
        data-aos='fade-down' 
        data-aos-duration='500'
        data-aos-delay="600"
        data-aos-easing="linear"
        className="heroS mt-[2.5] text-center md:mt-3 text-[20px] sm:w-[382px] sm:h-[120px] flex items-center leading-[30px] tracking-[0.2px] md:w-[700px] md:h-[60px] p-[5] md:pl-[60px] text-white"
      >
        Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.
      </p>
      
      <div 
        data-aos="fade-down" 
        data-aos-delay="1000"
        data-aos-easing="linear"
        data-aos-duration='500'
        className="flex flex-wrap justify-around w-[320px]"
      >
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-blue-600 text-white'>
          Try for free
        </button>
        <button className='w-[130px] h-[45px] rounded-[3px] border-2 border-white mt-2 bg-transparent text-white'>
          Learn more
        </button>
      </div>
      
      <div className="w-screen">
        <img
          data-aos="zoom-in-down" 
          data-aos-delay="1200"
          data-aos-easing="linear"
          data-aos-duration='500'
          src="src/assets/screens.png" 
          alt="screenshots of app" 
          className="w-screen"
        />
      </div>
    </div>
  )
}

export default HeroSection
/* eslint-disable react/prop-types */
import React from 'react'
import { features } from '../Constants/Index'
import { textVariant, staggerContainer, fadeIn } from '../Utils/Motion'
import { motion } from 'framer-motion'


function Features({ index }) {
  return (
    <motion.div 
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25}}
    className='flex font-sans  flex-col p-[65px 50px] gap-10 justify-center items-center bg-black'>
      <motion.h2 variants={textVariant()} className='text-[52px]  leading-[62px] text-white'>Features</motion.h2>
      <motion.p variants={textVariant()}  className='xs:mt-[10px] sm:mt-2.5 text-center md:mt-3 text-[20px] sm:w-[411px] sm:h-[90px] flex items-center leading-[30px] tracking-[0.2px] md:w-[700px] md:h-[60px] p-5 pl-[30px] text-white'>Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule.</motion.p>
<motion.div className="flex justify-center flex-wrap gap-6 p-5">
  <motion.img 
  variants={fadeIn("right", "spring", index * 0.5, 1)}
   src="src/assets/Panel.png" alt="" className='w-[55%]'/>
  <motion.div 
  variants={fadeIn("left", "spring", index * 0.5, 1)}
   className="flex flex-col items-center gap-3 text-white">
    {features.map((feat, index) => (
      <motion.div
      variants={fadeIn("left", "tween", index * 0.5, '.5')}
       className="" 
       key={feat.title}>
        <div className="flex items-center gap-4 text-white">
          <img src={feat.icon} alt="" className=''/>
          <p className='w-[153px] flex items-center h-[60px]'>{feat.title}</p>
        </div>
        <p className='w-[249px] h-24'>{feat.text}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>
    </motion.div>
  )
}

export default Features
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants, sideVariants } from '../Utils/Motion'
import { navlinks } from '../Constants/Index'



const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Animation variants for the running letters
  const letterVariants = {
    hidden: { 
      x: -100, 
      opacity: 0,
      rotate: -180,
      scale: 0.5
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.6
      }
    }),
    hover: {
      y: [0, -10, 0],
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Split text into letters for animation
  const AnimatedText = ({ text, className = "" }) => {
    return (
      <div className={`flex ${className}`}>
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="inline-block"
            style={{ 
              display: 'inline-block',
              transformOrigin: 'center bottom'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    );
  };

  // const navlinks = [
  //   { name: 'home', title: 'Home' },
  //   { name: 'about', title: 'About' },
  //   { name: 'services', title: 'Services' },
  //   { name: 'contact', title: 'Contact' }
  // ];

  const sideVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { 
      x: 50, 
      opacity: 0,
      rotate: 45 
    },
    open: { 
      x: 0, 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <>
      {/* Background Blur Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <nav className='z-10 hidden md:flex lg:flex justify-around fixed  w-full h-15 bg-black text-white mt--10'>
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
        >
          <img src="src/assets/logo.png" alt="website logo" className='w-[full] h-12 cursor-pointer mt-1' />
        </motion.div>
        
        <div className="flex items-center justify-between lg:w-[30%] md:w-[40%]">
          {navlinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={letterVariants}
              whileHover="hover"
            >
             <Link to={link.url} >
             <AnimatedText text={link.title} className="font-bold text-lg" />
             </Link> 
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.1,
              x: [0, -5, 5, 0],
              transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
            }}
            whileTap={{ scale: 0.9 }}
            className='w-[139px] h-[50px] rounded-[3px] border-2 border-white bg-transparent text-white font-bold text-center'
          >
            <AnimatedText text="" />
             <a href="/login">Login</a>
          </motion.button>
        </div>
      </nav>

     {/* Mobile Navbar */}
<nav className='z-30 md:hidden flex justify-center w-full fixed h-[12vh] bg-black text-white'>
  <div className="pt-5 px-2 flex justify-around w-full">
    <div className="w-[40%]">
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
      >
        <Link to="/">
          <img src="src/assets/logo.png" alt="website logo" className='w-full pt-2 cursor-pointer' />
        </Link>
      </motion.div>
    </div>
    
    <div className="flex items-center gap-2">
      {/* Login button removed from mobile */}
    </div>
    
    <motion.div 
      className="w-[10%] pt-3 pl-4"
      onClick={handleMenuClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {isMenuOpen ? (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <AiOutlineClose size='40px' cursor="pointer" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <BiMenuAltRight size='40px' cursor="pointer" style={{ color: 'white' }} />
        </motion.div>
      )}
    </motion.div>
  </div>
</nav>

{/* Mobile Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: "55vw",
        opacity: 1
      }}
      exit={{
        width: 0,
        opacity: 0,
        transition: { delay: 0.3, duration: 0.5 }
      }}
    >
      <motion.div 
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="nav-container md:hidden border flex flex-col fixed text-white w-[55vw] mt-[120px] h-[350px] justify-around items-end pr-[18vw] ml-[28%] z-40 rounded-2xl pt-4 bg-black/95 backdrop-blur-sm"
      >
        <div className="flex flex-col items-center w-[30%]">
          {navlinks.map((link, index) => (
            <motion.div 
              className="flex flex-col pr-7 text-[16px]" 
              key={link.name}
              variants={itemVariants}
              whileHover={{
                x: [0, 10, -10, 0],
                transition: { duration: 0.3, repeat: Infinity }
              }}
            >
              <Link 
                to={link.url} 
                className='list-none p-3 font-bold text-lg no-underline text-white'
                onClick={() => setMenuOpen(false)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedText text={link.title} />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#ff6b6b",
            transition: { 
              backgroundColor: { duration: 0.2 },
              scale: { duration: 0.2 }
            }
          }}
          whileTap={{ scale: 0.9 }}
          className="w-[150px] h-12 text-black bg-white font-bold rounded-xl mb-7 text-[14px] mr-[-2.8em]"
        >
          <a href="/login">Get Started</a>
        </motion.button>
      </motion.div>
    </motion.aside>
  )}
</AnimatePresence>
    </>
  );
};

export default NavBar;
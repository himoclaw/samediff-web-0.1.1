import React, { useState } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import ContactImage from "../assets/contact_color_BG1.png";
import { motion } from 'framer-motion';

const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isImageHovered, setIsImageHovered] = useState(false); // State for image hover

  const linkStyle = (linkIndex) => {
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center font-space-mono text-3xl sm:text-3xl md:text-4xl lg:text-[27px] xl:text-3xl 2xl:text-4xl transition-colors duration-300 ${
      hoveredLink === linkIndex ? 'text-pink-400' : (isOuterLink ? 'text-sd-yellow' : 'text-sd-gray')
    } break-words`;
  };

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 10, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative overflow-hidden bg-sd-black w-full">
      <Header className='z-20' />
      
    {/* Manifesto Text */}
    <div className="absolute translate-y-[-155px] w-full h-full flex justify-center items-center z-0">
      <motion.div
        className="space-y-6 px-32 text-xl lg:text-2xl font-space-mono text-center text-white"
        variants={paragraphVariants}
        initial="hidden"
        animate={isImageHovered ? "visible" : "hidden"}
      >
        <p>
          DIFFERENT VIEWS, SAME VISION.<br /><br />
          Same Difference is a remix of two
          ex-advertising creatives— one obsessed with the idea, the other obsessed
          with the craft. Both with an innate desire to collaborate with
          independent artists who invest in themselves.
        </p><br />
        <p>
          We believe music is the most soulful form of human expression and video
          is the most powerful medium to foster a shared connection. Every song
          should have a music video. Every artist should have a visual album. And
          every brand can invest in artists to reach their audience through music.<br /><br />
        </p>
        <p>
          Sound like a good time?<br />
          It is.
        </p>
      </motion.div>
    </div>

      {/* Main Container */}
      <div className="relative w-full h-screen flex justify-center items-center py-2 xs:px-0 sm:px-6 md:px-10 lg:px-20 xl:px-24 2xl:px-36">
        {/* Contact Image */}
        <motion.div className="relative w-full h-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <Image src={ContactImage} alt="contact" className={`z-10 transition-opacity duration-500 ${isImageHovered ? 'opacity-10' : 'opacity-100'}`}/>
        </motion.div>

        {/* Email address container */}
        <motion.div
          className={`translate-y-40 xl:translate-y-60 absolute flex flex-col lg:flex-row justify-center items-center transition-opacity duration-300 ${isImageHovered ? 'opacity-5' : 'opacity-100'}`} // Adjusted for stacking at medium and below breakpoints
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {['artists', 'brands', 'jobs'].map((type, index) => (
            <motion.a
              key={type}
              href={`mailto:${type}@samedifference.tv`}
              className={linkStyle(index) + ' z-20'}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              variants={itemVariants}
            >
              {`${type}@samedifference.tv`}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <Footer className='z-20'/>
    </div>
  );
};

export default Contact;

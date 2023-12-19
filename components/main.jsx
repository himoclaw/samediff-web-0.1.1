import React, { useState } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Type from './Title';
import LogoGrayCrop from "../assets/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `overflow-hidden bg-sd-black min-h-screen min-w-screen`,
};

const Main = () => {
  return (
    <div className={style.mainComp}>
      {/* Header */}
      <Header />

      {/* Video and Logo Container */}
      <div className="object-fill relative mt-[-50px] flex justify-center items-center w-full pointer-events-none">
        {/* Adjust the height here to make the logo larger */}

        {/* Logo */}
        <motion.div className="absolute z-0"
          initial={{ opacity:0, y: 10 }}
          animate={{ opacity:100, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <Image
            src={LogoGrayCrop} // Logo source here.
            alt="sd-logo"
          />
        </motion.div>


        {/* Video Component */}
        <motion.div className="relative z-10 w-full"
          initial={{ opacity:0, y: 10 }}
          animate={{ opacity:100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}        
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", objectFit: "cover" }}
          >
            <source src="/images/sd_anim_transparent.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
      
      {/* Typewriter */}
      <div className="text-center -translate-y-[20px] min-h-[60px] min-w-[300px]">
        <h1 className="pointer-events-none items-center font-space-mono text-[30px] tracking-[.01em] text-sd-gray">
          <Type />
        </h1>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;

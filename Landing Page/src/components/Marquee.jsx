import {motion} from 'framer-motion'
import React from 'react';


function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear",duration:5}} className="text-[16vw] tracking-tighter leading-none font-bold font-['Test Founders Grotesk X-Cond Smbd'] uppercase pt-4 -mb-2 font-bold pr-20">We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear",duration:5}} className="text-[16vw] tracking-tighter leading-none font-bold font-['Test Founders Grotesk X-Cond Smbd'] uppercase pt-5 -mb-2  font-bold pr-20">We are ochi</motion.h1>
        </div>
      
    </div>
  );
}

export default Marquee;

import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
    
    return (
        
        <div className="h-screen w-full bg-zinc-900 pt-1">
            <div className="textStructure mt-40 px-20">
                {["We create", "eye opening", "prensentation"].map((item, index) =>{ 
                    return <div className="master">
                        <div className="w-fit flex top-[1vw] ">
                            {index===1 && (
                            <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1]}} className="ml-[1vw] w-[9vw] h-[5.6vw] mt-[2vw] reltive rounded-md ">
                                <img className="w-full h-full object-cover " src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img>
                            </motion.div>)}

                        <h1 key={index} className="pt-[1vw]  flex items-center uppercase text-[9vw] h-full leading-[.75]  font-['Test Founders Grotesk X-Cond Smbd'] font-bold tracking-tighter">{item}</h1>
                    </div></div>
                })}
            </div>
            <div className="border-t-[.5px] border-zinc-700 mt-20 flex  justify-between items-center">
                {["For Public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className="text-md font-ligth tracking-light  leading-none px-20 py-5">{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="text-md font-ligth tracking-light  leading-none px-4 py-3  border-[2px]  border-zinc-500 rounded-full uppercase">Start The Project  </div>
                    <div className="w-10 h-10 rounded-full border-[2px]  border-zinc-500 flex items-center p-2">
                        <span className="rotate-45"><FaArrowUpLong /></span>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Landing;

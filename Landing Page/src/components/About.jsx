import React from 'react';

function About() {
  return (
    < div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl px-5">
  <p className="text-[4vw] font-['Neue_Montreal'] leading-[3.5vw] mr-[100px] tracking-tight  py-5 text-black/[0.8]">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</p>
    <div className=" flex w-full border-t-[1px] border-[#7d9527] pt-5  mt-20">
        <div className="w-1/2  ">
          <h1 className="text-[3vw] text-bold text-black">Our approach:</h1>
          <button  className="bg-black  flex gap-10 items-center uppercase mt-10 text-white px-10 py-6 rounded-full ">Read More
          <div className="w-3 h-3 bg-zinc-100 rounded-[50%]"></div>
          </button>
        </div>
        <div className="w-1/2">
            <img className="rounded-md " src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg'></img>
        </div>
        </div>  
    </div>
  )
}

export default About;

import React from 'react';

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-500 flex  items-center px-32 gap-5 bg-zinc-900">
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
                <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-yellow-200  border-2 text-yellow-200">&copy;2025</button>
            </div>
        </div>
        <div className="cardcontainer  h-[50vh] w-1/2 flex gap-5">
            <div className="card relative rounded-xl h-full w-1/2 bg-green-950 flex justify-center items-center">
            <img src='
https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
                <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-yellow-200  border-2 border-zinc-400 border-2 text-zinc-20 tracking-tighter">RATING 5.0 ON CLUTCH</button>
           
            </div>
            <div className="card relative rounded-xl h-full w-1/2 bg-green-950 flex justify-center items-center">
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-zinc-400 border-2 text-zinc-200 tracking-tighter  ">BUISNESS BOOTCAMP ALLUMINI</button>
           
            </div>
        </div>
      
    </div>
  );
}

export default Cards;

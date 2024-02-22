import React from 'react';

function Feature() {
    return (
        <div className="w-full  py-20 bg-zinc-700">
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">Featured projects</h1>
            </div>
            <div className="px-20   ">
                <div className="w-full flex gap-10 mt-10 ">
                    <div className="  relative cardcontainer w-1/2 h-[75vh] ">


                        <div className="card w-full h-full rounded-xl bg-blue-950 overflow-hidden">
                            {/* <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">{"FYDE".split('').map((item, index) =>
                                <span>{item}</span>
                            )}</h1> */}
                            <img className="w-full h-full " src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
                        </div>
                        <div className="w-full flex gap-8 mt-2">{["Audit ","copywriting","sales"].map((item,index)=><button className=" h-[3vw] bg-zinc-400 bor rounded-2xl mt-2 border-black-1 w-[8vw] ">{item}</button>)}</div>
                       
                    </div>
                    < div className="cardcontainer w-1/2 h-[75vh] relative ">
                    <div className="card w-full h-full rounded-xl bg-blue-950 overflow-hidden">
                            {/* <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">{"VISE".split('').map((item,index)=>
                                <span>{item}</span>
                            )}</h1> */}
                            <img className="w-full h-full " src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' ></img>
                            
                        </div>
                        <div className="w-full flex gap-8 mt-2">{["Audit ","copywriting","sales"].map((item,index)=><button className=" h-[3vw] bg-zinc-400 bor rounded-2xl mt-2 border-black-1 w-[8vw] ">{item}</button>)}</div>
                       

                    </div>
                   
                </div>
            </div>

        </div>
    );
}

export default Feature;

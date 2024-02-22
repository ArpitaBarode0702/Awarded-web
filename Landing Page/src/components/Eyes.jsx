import React from 'react';
import { useState,useEffect } from 'react';
function Eyes() {
  const [rotate, setrotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      //console.log(e.screenX);
      let mouseX=e.clientX;
      let mouseY=e.clientY;
      let deltaX=mouseX-window.innerWidth/2;
      let deltaY=mouseY-window.innerHeight/2;
      var def=Math.atan2(deltaY,deltaX)*(180/Math.PI);
      setrotate(def-180);
      

    })
  })
  return (
    <div className="w-full h-screen  ">
        <div className=" relative h-full w-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]" >
        <div className="absolute flex justify-center gap-5 w-1/2  h-80 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="flex justify-center items-center circle w-[15vw] h-[15vw]  bg-white rounded-full">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div style={{transform:`translate(-50%,-50%)  rotate(${rotate}deg)`}} className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full  h-10  ">
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
              
            </div>
          </div>
          <div className="circle flex justify-center items-center  w-[15vw] h-[15vw]  bg-white rounded-full">
          <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div style={{transform:`translate(-50%,-50%)  rotate(${rotate}deg)`}}  className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full  h-10  ">
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
       
        
</div>
)}

export default Eyes;
 
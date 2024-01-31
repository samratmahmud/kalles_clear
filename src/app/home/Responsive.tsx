"use client";
import React from "react";
import {Parallax} from "react-scroll-parallax";

function Responsive() {
   return (
      <section>
         <div className="container">
            <div className="max-w-[1700px] mx-auto mb-[90px] md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-44">
               <Parallax translateX={[-20, 20]}>
                  <div className="flex gap-6 items-center justify-between">
                     <h2 className="text-11xl sm:text-14xl md:text-20xl lg:text-18xl xl:text-21xl 4xl:text-19xl bg-clean-bg font-medium stroke-text">
                        Clean
                     </h2>
                     <div className="border-[10px] rounded-full border-dotted border-red-800 animate-spin relative z-0">
                        <span className="bg-one-stop xl:w-64 lg:w-56 md:w-48 sm:w-40 w-28 aspect-square rounded-full absolute -top-[15%] -left-[15%] blur-[50px] -z-10" />
                        <img
                           className="xl:w-48 lg:w-44 md:w-40 sm:w-32 w-20 p-2 rounded-full aspect-square"
                           src="/images/purple-osteospermum-daisy-flower_1373-16.jpg"
                           alt=""
                        />
                     </div>
                  </div>
               </Parallax>
               <div className="text-11xl sm:text-14xl md:text-20xl lg:text-18xl xl:text-21xl 4xl:text-19xl font-medium xl:tracking-[-12px] md:tracking-[-5px] -tracking-wide mb-4 text-lenear bg-50+ text-center">
                  Responsive
               </div>
               <Parallax translateX={[20, -20]}>
                  <div className="flex gap-6 items-center justify-between">
                     <img
                        className="sm:w-28 w-20 md:w-auto"
                        src="/images/arrow_right.svg"
                        alt=""
                     />
                     <span className="text-11xl sm:text-14xl md:text-20xl lg:text-18xl xl:text-21xl 4xl:text-19xl stroke-text bg-clean-bg font-medium">
                        Versatile
                     </span>
                  </div>
               </Parallax>
            </div>
         </div>
      </section>
   );
}

export default Responsive;

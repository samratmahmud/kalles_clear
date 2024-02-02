import Buttons from "@/components/common/Buttons";
import React from "react";

function Advanced() {
   return (
      <section className="2xl:mb-[200px] xl:mb-40 lg:mb-32 md:mb-20 sm:mb-16 mb-12">
         <div className="relative z-0 2xl:mb-32 xl:mb-24 lg:mb-20 md:mb-16 sm:mb-12 mb-8">
            <span className="bg-primary w-full md:h-28 h-14 absolute 5xl:top-[18%] md:top-1/4 top-[35%] -z-10 5xl:blur-[350px] md:blur-[200px] blur-[120px]" />
            <h2 className="text-3xl sm:text-6xl md:text-12xl lg:text-16xl xl:text-22xl 2xl:text-17xl leading-[1.2] text-center font-medium text-lenear bg-Advanced xl:px-12 lg:px-8 px-4">
               Advanced Mega Menu
            </h2>
            <div
               className="bg-cover bg-no-repeat"
               style={{backgroundImage: "url('/images/lay2.png')"}}
            >
               <img className="w-full" src="/images/1.png" alt="" />
            </div>
         </div>
         <div className="max-w-[830px] md:mx-auto bg-gray-black border border-transparent rounded-2xl mx-4">
            <div className="lg:text-xl md:text-md text-sm font-medium lg:p-6 md:p-5 p-3.5 bg-black rounded-2xl text-center">
               <span className="text-lenear bg-one-stop">
                  Dynamic & informative mega menu
               </span>{" "}
               helps buyers easily find their{" "}
               <span className="text-white">favorite items</span>
            </div>
         </div>
      </section>
   );
}

export default Advanced;

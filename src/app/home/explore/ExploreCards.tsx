import Link from "next/link";
import React from "react";

interface exploreCardsProps {
   thumbnail: string;
   title: string;
   describtion: string;
   href: string;
}

function ExploreCards(props: exploreCardsProps) {
   const {thumbnail, title, describtion, href} = props;

   return (
      <Link href={href} className="group" target="_blank">
         <div className="border-2 border-white/20 rounded-2xl mx-3">
            <div className="2xl:max-w-[660px] lg:max-w-[540px] md:max-w-[440px] max-w-[340px] w-full md:pt-4 pt-3 md:px-4 px-3 rounded-2xl">
               <img
                  className="w-full max-w-[660px] rounded-2xl"
                  src={thumbnail}
                  alt=""
               />
               <div className="flex items-center justify-between gap-3 lg:py-8 py-4 px-4">
                  <div>
                     <h4 className="lg:text-xl md:text-base text-md leading-[1.4] text-white mb-2">
                        {title}
                     </h4>
                     <p className="text-white/50 text-sm md:text-base">
                        {describtion}
                     </p>
                  </div>
                  <div className="w-10 h-10 group-hover:bg-primary duration-300 rounded-lg px-3 md:px-2.5 py-3">
                     <img src="/images/icons8-arrow-50.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default ExploreCards;

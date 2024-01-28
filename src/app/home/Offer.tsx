"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Marquee from "react-fast-marquee";

function Offer() {
   return (
      <section className="bg-top-marque hidden md:block">
         <Marquee speed={50} pauseOnHover={true}>
            {[...Array(10)].map((_, index) => (
               <div key={index} className="flex items-center">
                  <div className="flex items-center">
                     <span className="w-2 h-2 bg-white rounded-full" />
                     <div className="flex items-center gap-3 py-[17px] px-8">
                        <img
                           className="blur-[1px]"
                           src="/images/open-icon.svg"
                           alt=""
                        />
                        <Link
                           href="/"
                           className="text-white font-medium duration-300 hover:text-primary underline"
                           target="_blank"
                        >
                           Open a Store Now
                        </Link>
                     </div>
                     <span className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex items-center py-[17px] px-8 gap-3">
                     <img
                        className="blur-[1px]"
                        src="/images/fire.svg"
                        alt=""
                     />
                     <div className="font-medium">
                        <Link
                           href="/"
                           className="text-white duration-300 underline hover:text-primary"
                           target="_blank"
                        >
                           Start a free trial and enjoy 3 months
                        </Link>
                        <span> of Shopify for</span>
                        <span className="text-green-400">$1/month.</span>
                     </div>
                  </div>
               </div>
            ))}
         </Marquee>
      </section>
   );
}

export default Offer;

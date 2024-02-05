import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

function Footer() {
   return (
      <section>
         <div className="container">
            <div className="max-w-[1630px] mx-auto relative z-0">
               <div className="bg-newP max-w-[557px] aspect-square w-full rounded-full blur-[350px] absolute -z-10 bottom-0 left-[50%] translate-x-[-50%]" />
               <div className="mb-32">
                  <div className="mb-6 flex justify-center">
                     <img src="/images/1 (6).png" alt="" />
                  </div>
                  <p className="text-center mb-16">
                     <strong className="text-white">4.99/5.00</strong> based on{" "}
                     <strong className="text-white">1600+</strong> reviews
                  </p>
                  <div className=" flex flex-col gap-3 items-center justify-center mb-16">
                     <h3 className="text-5xl font-medium text-lenear bg-one-stop inline-block">
                        Grab Kalles, Get Started
                     </h3>
                     <h2 className="text-[96px] font-medium tracking-[3.12px] leading-[1.2] text-white">
                        and Grow Your Business.
                     </h2>
                  </div>
                  <div className="flex items-center gap-6 justify-center">
                     <Buttons href="/" name="Get Kalles Now" />
                     <Buttons
                        href="/"
                        name="Install EComposer"
                        varient="outlined"
                        icon="/images/1 (4).png"
                     />
                  </div>
               </div>
               <div className="py-10 flex items-center justify-between gap-3">
                  <div className="text-white font-medium leading-[1.4]">
                     © 2024 Kalles. All rights reserved.
                  </div>
                  <div className="flex gap-8">
                     <Link
                        href="/"
                        className="text-white hover:text-primary duration-300 font-medium underline"
                     >
                        Privacy Policy
                     </Link>
                     <Link
                        href="/"
                        className="text-white hover:text-primary duration-300 font-medium underline"
                     >
                        Return Policy
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;

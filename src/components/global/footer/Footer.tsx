import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

function Footer() {
   return (
      <section>
         <div className="max-w-[1630px] mx-auto relative z-0 px-4">
            <div className="bg-newP max-w-[557px] aspect-square w-full rounded-full blur-[350px] absolute -z-10 bottom-0 left-[50%] translate-x-[-50%]" />
            <div
               className="2xl:mb-32 xl:mb-24 lg:mb-20 md:mb-14 sm:mb-10 mb-8 bg-cover bg-no-repeat overflow-hidden"
               style={{backgroundImage: `url('/images/footer-bg.svg')`}}
            >
               <div className="mb-6 flex justify-center">
                  <img data-aos="fade-up" src="/images/1 (6).png" alt="" />
               </div>
               <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-center xl:mb-16 lg:mb-12 md:mb-10 mb-8"
               >
                  <strong className="text-white">4.99/5.00</strong> based on{" "}
                  <strong className="text-white">1600+</strong> reviews
               </p>
               <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className=" flex flex-col gap-3 items-center justify-center 2xl:mb-16 xl:mb-12 lg:mb-10 mb-8 overflow-hidden"
               >
                  <h3 className="2xl:text-5xl lg:text-3xl md:text-xl text-md font-medium text-lenear bg-one-stop inline-block mb-3">
                     Grab Kalles, Get Started
                  </h3>
                  <h2
                     data-aos="fade-up"
                     data-aos-delay="300"
                     className="text-3xl sm:text-5xl md:text-10xl lg:text-11xl xl:text-13xl 2xl:text-[96px] font-medium lg:!tracking-[-3.12px] text-center leading-[1.2] text-white"
                  >
                     and Grow Your Business.
                  </h2>
               </div>
               <div className="flex items-center gap-6 justify-center">
                  <div data-aos="fade-down-right">
                     <Buttons href="/" name="Get Kalles Now" />
                  </div>
                  <div data-aos="fade-up-left">
                     <Buttons
                        href="/"
                        name="Install EComposer"
                        varient="outlined"
                        icon="/images/1 (4).png"
                     />
                  </div>
               </div>
            </div>
            <div className="lg:py-10 py-[30px] flex lg:flex-row flex-col items-center justify-between gap-4">
               <div className="text-white font-medium leading-[1.4]">
                  © 2024 Kalles. All rights reserved.
               </div>
               <div className="flex md:gap-8 gap-3">
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
      </section>
   );
}

export default Footer;

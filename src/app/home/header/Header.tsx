"use client";
import Buttons from "@/components/common/Buttons";
import React from "react";
import KarllesTabs from "./KarllesTabs";
import CommerceCretificate from "./CommerceCretificate";

function Header() {
   return (
      <section className="2xl:pt-[180px] xl:pt-32 lg:pt-24 md:pt-16 sm:pt-12 pt-10 mb-40 relative z-0">
         <span className="absolute -z-10 top-0 left-0 right-0 bottom-0">
            <img className="w-full" src="/images/bg.jpeg" alt="" />
         </span>
         <div className="container-width">
            <div className="flex 2xl:flex-row flex-col 2xl:gap-12 gap-7 justify-between 2xl:mb-36 xl:mb-32 lg:mb-24 md:mb-20 sm:mb-12 mb-8">
               <div className="2xl:w-[40%] mt-14">
                  <div className="flex justify-center 2xl:justify-start">
                     <h3 className="text-xl md:text-5xl bg-one-stop inline-block text-lenear mb-3">
                        One-stop Shopify Theme
                     </h3>
                  </div>
                  <h1 className="text-8xl md:text-11xl lg:text-15xl 2xl:text-9xl lg:tracking-[-2.16px] tracking-[0.4px] font-medium 2xl:mb-6 md:mb-10 mb-5 text-white text-center 2xl:text-left">
                     Prime Quality <br className="hidden lg:block" /> Premium
                     Design
                  </h1>
                  <p className="2xl:mb-7 lg:mb-14 md:mb-10 mb-6 text-center 2xl:text-left lg:max-w-[510px] max-w-[640px] mx-auto 2xl:mx-0">
                     Craft a beautiful and high-converting Shopify store with
                     Kalles multipurpose theme. Optimized for eCommerce, speed
                     and user experiences.
                  </p>
                  <div className="flex gap-6 2xl:mb-4 mb-6 justify-center 2xl:justify-start">
                     <Buttons
                        href="/"
                        icon="/images/icons8-multiple-stars-24.png"
                        name="Explore Demos"
                     />
                     <Buttons
                        varient="outlined"
                        href="/"
                        icon="/images/icons8-shopify-50.png"
                        name="Open Store Free"
                     />
                  </div>
                  <p className="text-md text-center 2xl:text-left lg:max-w-[480px] mx-auto 2xl:mx-0">
                     Get 3 months trial Shopify with 1$/month, exclusive Shopify
                     deal for The4's customers
                  </p>
               </div>
               <div className="max-w-[884px] 2xl:w-[60%] mx-auto">
                  <div className="hidden lg:block">
                     <KarllesTabs />
                  </div>
                  <div className="lg:hidden py-4">
                     <img src="/images/banner_mobile.png" alt="" />
                  </div>
               </div>
            </div>
            <div>
               <CommerceCretificate />
            </div>
         </div>
      </section>
   );
}

export default Header;

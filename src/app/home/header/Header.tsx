"use client";
import Buttons from "@/components/common/Buttons";
import React from "react";
import KarllesTabs from "./KarllesTabs";
import CommerceCretificate from "./CommerceCretificate";

function Header() {
   return (
      <section className="pt-44 mb-40 relative z-0">
         <span className="absolute -z-10 top-0 left-0 right-0 bottom-0">
            <img className="w-full" src="/images/bg.jpeg" alt="" />
         </span>
         <div className="container-width">
            <div className="flex gap-12 justify-between mb-36">
               <div className="w-[40%] mt-14">
                  <h3 className="text-xl bg-one-stop inline-block text-lenear mb-3">
                     One-stop Shopify Theme
                  </h3>
                  <h1 className="text-8xl font-medium mb-6 text-white">
                     Prime Quality <br /> Premium Design
                  </h1>
                  <p className="mb-7">
                     Craft a beautiful and high-converting Shopify store with{" "}
                     <br />
                     Kalles multipurpose theme. Optimized for eCommerce, speed{" "}
                     <br /> and user experiences.
                  </p>
                  <div className="flex gap-6 mb-4">
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
                  <p className="text-md">
                     Get 3 months trial Shopify with 1$/month, exclusive Shopify
                     deal
                     <br />
                     for The4's customers
                  </p>
               </div>
               <div className="max-w-[884px] w-[60%]">
                  <KarllesTabs />
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

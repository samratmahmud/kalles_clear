import Buttons from "@/components/common/Buttons";
import React from "react";

function SpecialDeal() {
   return (
      <section id="specialDeal">
         <div className="max-w-[1700px] mx-auto 2xl:mb-44 xl:mb-36 lg:mb-28 md:mb-20 mb-16">
            <div className="grid xl:grid-cols-2 gap-6 md:gap-9 lg:gap-12 xl:gap-0 relative z-0 px-4 xl:px-0">
               <span className="bg-primary max-w-[432px] aspect-square w-full absolute lg:top-[70%] md:top-1/2 top-1/4 left-[35%] rounded-full -z-10 blur-[300px]" />
               <div className="xl:pl-[8%] xl:mt-10">
                  <h2
                     data-aos="fade-up"
                     className="text-xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-10xl leading-[1.2] tracking-normal text-white font-medium mb-6"
                  >
                     Buy Kalles to{" "}
                     <span className="text-lenear bg-newP relative">
                        get{" "}
                        <span className="w-full h-[3px] bg-newP absolute bottom-2 left-0 lg:inline-block hidden" />
                     </span>{" "}
                     <br />
                     <p className="text-lenear bg-one-stop inline relative">
                        EComposer Partner Plan
                        <span className="w-full h-0.5 bg-one-stop absolute bottom-2 left-0 lg:inline-block hidden" />
                     </p>{" "}
                     <br />
                     (6 months Free, Save $114)
                  </h2>
                  <p
                     data-aos="fade-up"
                     data-aos-delay="150"
                     className="lg:mb-14 md:mb-10 mb-6 lg:max-w-[650px] text-md md:text-base"
                  >
                     EComposer is the top rated Shopify Page Builder which is
                     fully integrated with Kalles. Want to design your pages
                     with a powerful drag-drop editor?
                  </p>
                  <div className="flex sm:flex-row flex-col gap-6 lg:mb-14 md:mb-10 mb-6">
                     <div data-aos="fade-down-right" className="flex">
                        <Buttons
                           href="/"
                           name="Try Live Demo"
                           icon="/images/icons8-trolley-64.png"
                        />
                     </div>
                     <div data-aos="fade-up-left" className="flex">
                        <Buttons
                           href="/"
                           name="Install EComposer Free"
                           icon="/images/icons8-pallet-50.png"
                           varient="outlined"
                        />
                     </div>
                  </div>
                  <div
                     data-aos="fade-up"
                     data-aos-delay="200"
                     className="bg-gray-black border border-transparent rounded-2xl xl:max-w-[455px] inline-block"
                  >
                     <div className="flex items-center md:gap-6 gap-2.5 md:p-6 py-2.5 px-4 bg-black rounded-2xl">
                        <img
                           className="w-6 h-6"
                           src="/images/icons8-pallet-50.png"
                           alt=""
                        />
                        <p className="md:text-md text-sm tracking-normal">
                           <span className="text-white">How to claim:</span> Buy
                           Kalles &gt; Install EComposer then chat with support
                           in-app to claim your deal.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute 2xl:top-[50%] top-[47%] 2xl:-left-[14%] xl:-left-[19%] sm:-left-[10%] -left-[10%]">
                     <img
                        className="max-w-20"
                        src="/images/orange-arrow.svg"
                        alt=""
                     />
                  </div>
                  <img className="w-full" src="/images/1 (2).png" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default SpecialDeal;

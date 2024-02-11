import Buttons from "@/components/common/Buttons";
import React from "react";

const updateItems = [
   {
      text: (
         <>
            Import new demos by a click, forge{" "}
            <br className="hidden lg:block" /> the traditional way
         </>
      ),
   },
   {
      text: (
         <>
            Update theme latest version anytime, access to new features promptly
         </>
      ),
   },
   {
      text: (
         <>
            Enjoy advanced theme functions: Compare,{" "}
            <br className="hidden lg:block" /> Wishlist, Countdown
         </>
      ),
   },
   {
      text: (
         <>
            Activate other boost sales add-ons: Sales Notice Popup, Trust
            Badges, Inactive Tab/Favicon Cart Count, Content Protection,
            Christmas Effect.
         </>
      ),
   },
];

function EcomRise() {
   return (
      <section>
         <div className="max-w-[1920px] mx-auto px-4 xl:px-0">
            <div className="mb-10 sm:mb-14 md:mb-20 lg:mb-28 xl:mb-40 2xl:mb-56 relative z-0">
               <span className="max-w-[732px] aspect-square w-full bg-one-stop absolute top-1/2 -translate-y-1/3 left-0 4xl:left-[45%] rounded-full blur-[250px] -z-10" />
               <div className="xl:pl-[8%] grid 2xl:grid-cols-9 xl:grid-cols-8 gap-6">
                  <div className="col-span-4 xl:mt-12">
                     <h2
                        data-aos="fade-up"
                        className="text-xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-10xl font-medium text-white mb-6 md:mb-10 lg:mb-12 xl:mb-16"
                     >
                        <span className="bg-one-stop text-lenear inline-block">
                           EcomRise
                        </span>{" "}
                        <br className="hidden lg:block" />
                        One Click Import Demos{" "}
                        <br className="hidden lg:block" /> & Update Theme
                     </h2>
                     <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 max-w-[590px]">
                        {updateItems.map(({text}, index) => (
                           <div
                              key={index}
                              data-aos="fade-right"
                              data-aos-delay={`${index * 50}`}
                              className="flex items-start md:gap-4 gap-2.5"
                           >
                              <img src="/images/egroup-images.svg" alt="" />
                              <div className="text-sm md:text-lg 3xl:text-xl -tracking-[-0.30px] text-white">
                                 {text}
                              </div>
                           </div>
                        ))}
                     </div>
                     <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="flex"
                     >
                        <Buttons
                           href="/"
                           name="Install EcomRise Free"
                           icon="/images/icons8-download-64.png"
                           target="_blank"
                        />
                     </div>
                  </div>
                  <div className="2xl:col-span-5 col-span-4">
                     <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="relative"
                     >
                        <div className="absolute sm:top-[44%] top-[38%] 4xl:-left-[13%] 2xl:-left-[17%] xl:-left-[25%] lg:-left-[10%] md:-left-[15%] sm:-left-[22%] -left-[35%]">
                           <img src="/images/arrow.svg" alt="" />
                        </div>
                        <img
                           className="w-full"
                           src="/images/2 (1).png"
                           alt=""
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default EcomRise;

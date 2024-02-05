"use client";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import Typewriter from "typewriter-effect";

function Performance() {
   return (
      <section id="performance">
         <div className="container 2xl:mb-44 xl:mb-36 lg:mb-24 md:mb-20 mb-16">
            <div className="overflow-x-auto">
               <div className="grid grid-cols-3 lg:gap-7 md:gap-4 gap-2.5 md:min-w-[1280px] min-w-[980px] overflow-hidden">
                  <div className="flex flex-col gap-6">
                     <div className="bg-gray-black border border-transparent rounded-2xl">
                        <div className="bg-black 2xl:py-14 2xl:px-12 lg:py-11 lg:px-10 p-[30px] rounded-2xl relative z-10">
                           <h3
                              data-aos="fade-right"
                              className="text-white lg:text-3xl md:text-lg text-md tracking-normal font-medium text-center mb-4"
                           >
                              Skyrocket Revenue To Next Level
                           </h3>
                           <p
                              data-aos="fade-up-right"
                              data-aos-delay="200"
                              className="text-center text-sm md:text-md lg:text-base !leading-[1.2]"
                           >
                              With all the boost sales & marketing features
                              specialized for eCommerce, seeing your sales boom
                              is just one click away.
                           </p>
                        </div>
                     </div>
                     <div data-aos="fade-up" data-aos-delay="200">
                        <img
                           className="w-full"
                           src="/images/1 (3).png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="flex flex-col gap-6">
                     <div data-aos="fade-up">
                        <img
                           className="w-full"
                           src="/images/2 (2).png"
                           alt=""
                        />
                     </div>
                     <div className="bg-gray-black border border-transparent rounded-2xl w-full">
                        <div className="bg-black 2xl:py-14 2xl:px-12 lg:py-11 lg:px-10 p-[30px] rounded-2xl">
                           <h3
                              data-aos="fade-right"
                              className="text-white lg:text-3xl md:text-lg text-md tracking-normal font-medium text-center mb-4"
                           >
                              Lightning-fast Loading Speed
                           </h3>
                           <p
                              data-aos="fade-up-right"
                              data-aos-delay="200"
                              className="text-center text-sm md:text-md lg:text-base !leading-[1.2]"
                           >
                              Fast loading is the key to win your sales. Kalles
                              is proved to be the fastest theme, with 99%
                              performance and high score in popular speed check
                              tools.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="bg-gray-800 rounded-2xl 2xl:max-h-none md:max-h-[750px] max-h-[550px] overflow-hidden">
                     <div className="2xl:py-14 2xl:px-12 lg:py-11 lg:px-10 p-[30px]">
                        <h3
                           data-aos="fade-up"
                           className="text-white lg:text-3xl md:text-lg text-md tracking-normal font-medium text-center mb-4"
                        >
                           Built Storefont With SEO Confidence
                        </h3>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="100"
                           className="text-center text-sm md:text-md lg:text-base"
                        >
                           Kalles layouts are built for SEO orientation to drive
                           more organic traffic and boost the ranking of your
                           website effortlessly.
                        </p>
                     </div>
                     <div className="relative z-0">
                        <span className="bg-clean-bg blur-[130px] rounded-t-full absolute w-full h-full top-[15%] left-0 right-0 bottom-0 -z-10" />
                        <div
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="flex justify-center 2xl:mb-10 lg:mb-8 md:mb-6 mb-4"
                        >
                           <img src="/images/google.svg" alt="" />
                        </div>
                        <div
                           data-aos="fade-up"
                           data-aos-delay="300"
                           className="bg-slate-600/30 border border-slate-300/30 rounded-2xl lg:max-w-[85%] max-w-[95%] mx-auto lg:mb-8 md:mb-6 mb-4 py-[13px] md:pl-2.5 pl-2 md:pr-6 pr-3 flex gap-3 items-center"
                        >
                           <div className="w-14 aspect-square bg-gray-800 p-2 rounded-full">
                              <img src="/images/gg.png" alt="" />
                           </div>
                           <div className="w-full">
                              <Typewriter
                                 options={{
                                    wrapperClassName: "text-md text-white",
                                    strings: [
                                       "Kalles trending product",
                                       "Cristmas salse",
                                       "Fashion trending 2024",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 70,
                                    deleteSpeed: 70,
                                 }}
                              />
                           </div>
                           <img
                              className="w-7 h-7"
                              src="/images/icons8-search-48.png"
                              alt=""
                           />
                        </div>
                        <div
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="bg-slate-600/30 border border-slate-300/30 md:p-4 p-2 max-w-[95%] mx-auto rounded-2xl md:mb-4 mb-2.5"
                        >
                           <h4 className="text-sm tracking-normal text-slate-300/50 mb-2">
                              yourstore.com
                           </h4>
                           <p className="text-lenear bg-shopify mb-4 inline-block relative">
                              Your Shopify store
                              <span className="absolute left-0 bottom-0 h-[1px] w-full bg-shopify" />
                           </p>
                           <SkeletonTheme
                              baseColor="#48494B"
                              highlightColor="#828282"
                           >
                              <p>
                                 <Skeleton count={1} style={{height: "10px"}} />
                                 <Skeleton
                                    count={1}
                                    style={{width: "85%", height: "10px"}}
                                 />
                                 <Skeleton
                                    count={2}
                                    style={{width: "90%", height: "10px"}}
                                 />
                              </p>
                           </SkeletonTheme>
                        </div>
                        <div
                           data-aos="fade-up"
                           data-aos-delay="500"
                           className="bg-slate-600/30 border border-slate-300/30 md:p-4 p-2 max-w-[95%] mx-auto rounded-2xl"
                        >
                           <SkeletonTheme
                              baseColor="#48494B"
                              highlightColor="#828282"
                           >
                              <p>
                                 <Skeleton
                                    count={1}
                                    style={{
                                       width: "20%",
                                       height: "12px",
                                       marginBottom: "5px",
                                    }}
                                 />
                                 <Skeleton
                                    count={1}
                                    style={{
                                       width: "80%",
                                       height: "16px",
                                       marginBottom: "8px",
                                    }}
                                 />
                                 <Skeleton count={1} style={{height: "10px"}} />
                                 <Skeleton
                                    count={1}
                                    style={{width: "85%", height: "10px"}}
                                 />
                                 <Skeleton
                                    count={2}
                                    style={{width: "90%", height: "10px"}}
                                 />
                              </p>
                           </SkeletonTheme>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Performance;

import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

function Performance() {
   return (
      <section id="performance">
         <div className="container mb-44">
            <div className="grid grid-cols-3 gap-6">
               <div className=" flex flex-col gap-6">
                  <div className="bg-gray-black border border-transparent rounded-2xl">
                     <div className="bg-black py-9 px-12 rounded-2xl relative z-10">
                        <h3 className="text-white text-3xl tracking-normal font-medium text-center mb-4">
                           Skyrocket Revenue To Next Level
                        </h3>
                        <p className="text-center">
                           With all the boost sales & marketing features
                           specialized for eCommerce, seeing your sales boom is
                           just one click away.
                        </p>
                     </div>
                  </div>
                  <div>
                     <img src="/images/1 (3).png" alt="" />
                  </div>
               </div>
               <div className="flex flex-col gap-6">
                  <div>
                     <img src="/images/2 (2).png" alt="" />
                  </div>
                  <div className="bg-gray-black border border-transparent rounded-2xl">
                     <div className="bg-black py-9 px-12 rounded-2xl relative z-10">
                        <h3 className="text-white text-3xl tracking-normal font-medium text-center mb-4">
                           Lightning-fast Loading Speed
                        </h3>
                        <p className="text-center">
                           Fast loading is the key to win your sales. Kalles is
                           proved to be the fastest theme, with 99% performance
                           and high score in popular speed check tools.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="bg-gray-800 rounded-2xl max-h-[760px] overflow-hidden">
                  <div className="py-10 px-10">
                     <h3 className="text-white text-3xl tracking-normal font-medium text-center mb-4">
                        Built Storefont With SEO Confidence
                     </h3>
                     <p className="text-center">
                        Kalles layouts are built for SEO orientation to drive
                        more organic traffic and boost the ranking of your
                        website effortlessly.
                     </p>
                  </div>
                  <div className="relative z-0">
                     <span className="bg-clean-bg blur-[200px] rounded-t-full absolute w-full h-full left-0 right-0 bottom-0 -z-10" />
                     <div className="flex justify-center mb-10">
                        <img src="/images/google.svg" alt="" />
                     </div>
                     <div className="bg-slate-600/30 border border-slate-300/30 rounded-2xl max-w-[85%] mx-auto mb-8 py-3 pl-2.5 pr-6 flex gap-3 items-center">
                        <div className="w-14 aspect-square bg-gray-800 p-2 rounded-full">
                           <img src="/images/gg.png" alt="" />
                        </div>
                        <div className="w-full">
                           <input
                              type="text"
                              className="w-full bg-transparent focus:outline-none"
                           />
                        </div>
                        <img
                           className="w-7 h-7"
                           src="/images/icons8-search-48.png"
                           alt=""
                        />
                     </div>
                     <div className="bg-slate-600/30 border border-slate-300/30 p-4 max-w-[95%] mx-auto rounded-2xl mb-4">
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
                     <div className="bg-slate-600/30 border border-slate-300/30 p-4 max-w-[95%] mx-auto rounded-2xl">
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
      </section>
   );
}

export default Performance;

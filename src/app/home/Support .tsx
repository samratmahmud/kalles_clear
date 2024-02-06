import Buttons from "@/components/common/Buttons";
import React from "react";

const imagesGroup = [
   "/images/the4_per_1.jpeg",
   "/images/the4_per_2.jpeg",
   "/images/the4_per_3.jpeg",
];

function Support() {
   return (
      <section>
         <div className="container">
            <div className="flex lg:flex-row flex-col justify-between gap-8 max-w-[1630px] mx-auto mb-52">
               <div className="max-w-[652px]">
                  <h3 className="md:text-xl sm:text-base text-md font-medium bg-one-stop text-lenear inline-block uppercase md:mb-6 mb-4">
                     CUSTOMER SATISFACTION GUARANTEED
                  </h3>
                  <h2 className="text-xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-10xl tracking-[-0.96px] font-medium text-white md:mb-6 mb-4">
                     Efficient Help, <br className="lg:block hidden" /> Every
                     Step of the Way.
                  </h2>
                  <p className="mb-14">
                     Get the support you need from our ticket center, Facebook
                     community or external resources such as documents, video
                     guides, etc.
                  </p>
                  <div className="flex items-center gap-6 mb-14">
                     <div className="flex">
                        <div className="flex ">
                           {imagesGroup.map((image, index) => (
                              <img
                                 className="rounded-full -ml-2.5 first:-ml-0"
                                 key={index}
                                 src={image}
                                 alt=""
                              />
                           ))}
                        </div>
                        <div className="-ml-2.5 border-2 border-white rounded-full">
                           <div className="bg-one-stop w-14 aspect-square rounded-full p-1.5 text-base font-medium text-black flex items-center justify-center">
                              +12
                           </div>
                        </div>
                     </div>
                     <div>
                        <p className="text-white font-medium mb-2 leading-[1.4]">
                           Kalles Support Team
                        </p>
                        <div className="flex items-center gap-2">
                           <div className="flex gap-1">
                              {[...Array(5)].map((_, index) => (
                                 <img
                                    key={index}
                                    src="/images/star.svg"
                                    alt=""
                                 />
                              ))}
                           </div>
                           <div
                              className="text-xs font-medium text-white py-0.5 px-1.5 rounded-full"
                              style={{
                                 backgroundImage:
                                    "linear-gradient(113deg, #EA1D62 5.37%, #F2944F 108.05%)",
                              }}
                           >
                              5.0
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex">
                     <Buttons href="/" name="See Real Reviews" />
                  </div>
               </div>
               <div>
                  <img className="w-full" src="/images/1 (5).png" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Support;

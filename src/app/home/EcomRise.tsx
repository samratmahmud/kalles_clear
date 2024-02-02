import Buttons from "@/components/common/Buttons";
import React from "react";

const updateItems = [
   {
      text: (
         <>
            Import new demos by a click, forge <br /> the traditional way
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
            Enjoy advanced theme functions: Compare, <br /> Wishlist, Countdown
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
         <div className="container">
            <div className="mb-56 relative z-0">
               <span className="max-w-[732px] aspect-square w-full bg-one-stop absolute top-1/2 -translate-y-1/3 left-0 4xl:left-[45%] rounded-full blur-[250px] -z-10" />
               <div className="pl-[8%] grid 4xl:grid-cols-5 grid-cols-4">
                  <div className="col-span-2 mt-12">
                     <h3 className="text-10xl font-medium bg-one-stop text-lenear inline-block">
                        EcomRise
                     </h3>
                     <h2 className="text-10xl font-medium text-white mb-16">
                        One Click Import Demos <br /> & Update Theme
                     </h2>
                     <div className="flex flex-col gap-10 mb-16 max-w-[590px]">
                        {updateItems.map(({text}, index) => (
                           <div key={index} className="flex items-start gap-4">
                              <img src="/images/egroup-images.svg" alt="" />
                              <div className="text-xl tracking-normal text-white">
                                 {text}
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="flex">
                        <Buttons
                           href="/"
                           name="Install EcomRise Free"
                           icon="/images/icons8-download-64.png"
                        />
                     </div>
                  </div>
                  <div className="4xl:col-span-3 col-span-2">
                     <img className="w-full" src="/images/2 (1).png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default EcomRise;

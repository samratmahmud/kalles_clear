"use client";
import {title} from "process";
import React, {useState} from "react";

const builsPackages = [
   {
      title: [
         "Shopify Features",
         "Shopify App Cost",
         "Conversion Increase",
         "Kalles",
      ],
      contant: [
         {
            describtion: ["Bundles & Discounts", "$180", "0.7%", "free"],
         },
         {
            describtion: ["Smart Product Filters", "$240", "0.3%", "free"],
         },
         {
            describtion: ["Advanced Mega Menu", "$120", "0.35%", "free"],
         },
         {
            describtion: [
               "Cart drawer with free shipping goal",
               "$200",
               "0.4%",
               "free",
            ],
         },
         {
            describtion: [
               "Frequently Bought Together",
               "$150",
               "0.65%",
               "free",
            ],
         },
         {
            describtion: ["In-cart recommendations", "$144", "0.57%", "free"],
         },
         {
            describtion: ["Video Thumbnail & 3D", "$120", "0.2%", "free"],
         },
         {
            describtion: ["Countdown Timer", "$84", "0.55%", "free"],
         },
         {
            describtion: ["Trust Badges", "$25", "0.19%", "free"],
         },
         {
            describtion: ["Sales Popup", "$79", "0.27%", "free"],
         },
         {
            describtion: ["Sticky Add To Cart", "$45", "0.3%", "free"],
         },
         {
            describtion: ["Mobile Bottom Navigation", "$30", "0.24%", "free"],
         },
         {
            describtion: ["Stunning Lookbook", "$160", "0.2%", "free"],
         },
         {
            describtion: ["Quickview", "$79", "0.5%", "free"],
         },
         {
            describtion: ["Compare, Wishlist", "$80", "0.4%", "free"],
         },
         {
            describtion: ["Exit Intent Popup", "$180", "0.45%", "free"],
         },
         {
            describtion: ["Inactive Tab & Cart Count", "$50", "0.32%", "free"],
         },
         {
            describtion: ["Store Location Page", "$39", "0.12%", "free"],
         },
         {
            describtion: [
               "Multiple Currencies & Languages",
               "$79",
               "0.41%",
               "free",
            ],
         },
         {
            describtion: ["Size Chart", "$69", "0.21%", "free"],
         },
         {
            describtion: ["Back to stock notification", "$90", "0.23%", "free"],
         },
         {
            describtion: ["AJAX Infinite Loading", "$30", "0.12%", "free"],
         },
         {
            describtion: ["Pickup Availability", "$30", "0.12%", "free"],
         },
         {
            describtion: ["Pre Order", "$45", "0.21%", "free"],
         },
      ],
      btn: [
         {
            value: "Total",
         },
         {
            titleB: "Extra cost",
            value: (
               <>
                  <p className="text-lenear bg-hotP">$2358/year</p>
               </>
            ),
         },
         {
            titleB: "Expected CR increase",
            value: (
               <>
                  <p className="text-lenear bg-hotP">8.05%</p>
               </>
            ),
         },
         {
            titleB: "One time payment",
            value: (
               <>
                  <p className="text-lenear bg-free">Only $89</p>
               </>
            ),
            background: "",
         },
      ],
   },
];

function PackageBuilt() {
   const [open, setOpen] = useState(false);
   const toggle = () => setOpen((prev) => !prev);

   return (
      <section>
         <div className="container">
            <div className="max-w-[1700px] mx-auto 2xl:mb-40 xl:mb-32 lg:mb-24 md:mb-20 mb-16">
               <div className="flex flex-col items-center justify-center mb-7 md:mb-10 lg:mb-12 xl:mb-16">
                  <h3
                     data-aos="fade-up"
                     className="2xl:text-5xl lg:text-3xl md:text-xl text-md font-medium text-lenear bg-one-stop text-center mb-3"
                  >
                     Save $2369 per year
                  </h3>
                  <h2
                     data-aos="fade-up"
                     data-aos-delay="100"
                     className="text-5xl sm:text-8xl md:text-10xl lg:text-12xl xl:text-13xl 2xl:text-16xl font-medium md:!tracking-[-2.4px] text-center text-white"
                  >
                     with Kalles built-in features
                  </h2>
               </div>
               <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="bg-features-build rounded-t-3xl w-full border-t border-x-2 border-transparent lg:mb-8 md:mb-8 mb-4 relative "
               >
                  <div className="bg-black rounded-t-3xl xl:p-12 lg:p-9 px-3  py-6 mt-[2px] w-full overflow-x-auto">
                     <div className="gridgrid-cols-4 min-w-[700px] md:min-w-[1120px] xl:min-w-[1300px]">
                        {builsPackages.map(({title, contant, btn}, index) => (
                           <div key={index}>
                              <div className="grid grid-cols-4">
                                 {title.map((items, index) => (
                                    <div
                                       key={index}
                                       className="2xl:text-3xl md:text-lg text-md font-medium text-white text-center 2xl:mb-12 mb-6"
                                    >
                                       {items}
                                    </div>
                                 ))}
                              </div>
                              <div className="">
                                 {contant
                                    .slice(0, 9)
                                    .map(({describtion}, index) => (
                                       <div
                                          key={index}
                                          className="grid grid-cols-4 gap-4 group"
                                       >
                                          {describtion.map((item, index) => (
                                             <div
                                                key={index}
                                                className="table-data-design"
                                             >
                                                {item}
                                             </div>
                                          ))}
                                       </div>
                                    ))}
                                 {open &&
                                    contant
                                       .slice(9)
                                       .map(({describtion}, index) => (
                                          <div
                                             key={index}
                                             className="grid grid-cols-4 gap-4 group"
                                          >
                                             {describtion.map((item, index) => (
                                                <div
                                                   key={index}
                                                   className="table-data-design"
                                                >
                                                   {item}
                                                </div>
                                             ))}
                                          </div>
                                       ))}
                              </div>
                              <div className="grid grid-cols-4 py-4 sm:py-6 md:py-8">
                                 {btn.map(({titleB, value}, index) => (
                                    <div
                                       key={index}
                                       className="max-w-[85%] mx-auto w-full group relative z-0"
                                    >
                                       <div className="group-last:bg-newP absolute sm:-top-0.5 -z-20 blur-md w-full h-full" />

                                       <div
                                          className="flex flex-col lg:gap-2 gap-1.5 items-center justify-center bg-feature-btn rounded-2xl py-2.5
                                     md:py-4 2xl:px-10 lg:px-7 px-3 h-full"
                                       >
                                          <div className="2xl:text-3xl md:text-lg text-sm text-white leading-[1.34] font-medium">
                                             {value}
                                          </div>
                                          {titleB && (
                                             <div className="text-xs md:text-md 2xl:text-base text-white font-medium">
                                                {titleB}
                                             </div>
                                          )}
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        ))}
                     </div>
                     {!open && (
                        <div className="flex justify-center absolute bottom-[17%] sm:bottom-[20%] md:bottom-[24%] lg:bottom-[27%] 2xl:bottom-[24%] left-1/2 -translate-x-1/2 text-white font-medium underline hover:text-primary duration-300 bg-black/40">
                           <button onClick={toggle}>View More</button>
                        </div>
                     )}
                  </div>
               </div>
               <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="md:text-md text-sm tracking-normal text-center text-gray-400"
               >
                  *Note: These features on Kalles meet the standard needs of a
                  store. <br className="hidden md:block" />
                  If merchants want advanced solutions, we recommend you install
                  the apps.
               </div>
            </div>
         </div>
      </section>
   );
}

export default PackageBuilt;

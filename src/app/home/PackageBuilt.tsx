"use client";
import React, {useState} from "react";

const builsPackages = [
   {
      title: "Shopify Features",
      content: [
         "Bundles & Discounts",
         "Smart Product Filters",
         "Advanced Mega Menu",
         "Cart drawer with free shipping goal",
         "Frequently Bought Together",
         "In-cart recommendations",
         "Video Thumbnail & 3D",
         "Countdown Timer",
         "Trust Badges",
         "Sales Popup",
         "Sticky Add To Cart",
         "Mobile Bottom Navigation",
         "Stunning Lookbook",
         "Quickview",
         "Compare, Wishlist",
         "Exit Intent Popup",
         "Inactive Tab & Cart Count",
         "Store Location Page",
         "Multiple Currencies & Languages",
         "Size Chart",
         "Back to stock notification",
         "AJAX Infinite Loading",
         "Pickup Availability",
         "Pre Orde",
      ],
      btn: [
         {
            value: "Total",
            titleB: "",
         },
      ],
   },
   {
      title: "Shopify App Cost",
      content: [
         "$180",
         "$240",
         "$120",
         "$200",
         "$150",
         "$144",
         "$120",
         "$84",
         "$25",
         "$79",
         "$45",
         "$30",
         "$160",
         "$79",
         "$80",
         "$180",
         "$50",
         "$39",
         "$79",
         "$69",
         "$90",
         "$30",
         "$30",
         "$45",
      ],
      btn: [
         {
            titleB: "Extra cost",
            value: (
               <>
                  <p className="text-lenear bg-hotP">$2358/year</p>
               </>
            ),
         },
      ],
   },
   {
      title: "Conversion Increase",
      content: [
         "0.7%",
         "0.3%",
         "0.35%",
         "0.4%",
         "0.65%",
         "0.57%",
         "0.2%",
         "0.55%",
         "0.19%",
         "0.27%",
         "0.3%",
         "0.24%",
         "0.2%",
         "0.%",
         "0.5%",
         "0.4%",
         "0.45%",
         "0.32%",
         "0.12%",
         "0.41%",
         "0.21%",
         "0.23%",
         "0.12%",
         "0.21%",
      ],
      btn: [
         {
            titleB: "Expected CR increase",
            value: (
               <>
                  <p className="text-lenear bg-hotP">8.05%</p>
               </>
            ),
         },
      ],
   },
   {
      title: "Kalles",
      className: "text-lenear bg-free",
      content: [
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
      ],
      btn: [
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
                     className="text-5xl sm:text-8xl md:text-10xl lg:text-12xl xl:text-13xl 2xl:text-16xl font-medium !tracking-[-2.4px] text-center text-white"
                  >
                     with Kalles built-in features
                  </h2>
               </div>
               <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="bg-features-build rounded-t-3xl w-full border-t border-x-2 border-transparent lg:mb-8 md:mb-8 mb-4 relative "
               >
                  <div className="bg-black rounded-t-3xl xl:p-12 lg:p-9 px-2.5  py-6 mt-[2px] w-full overflow-x-auto">
                     <div className="grid grid-cols-4 min-w-[700px] md:min-w-[1120px] xl:min-w-[1300px]">
                        {builsPackages.map(
                           ({title, content, className, btn}, index) => (
                              <div key={index} className="group">
                                 <div className="2xl:text-3xl md:text-lg text-md font-medium text-white flex justify-center 2xl:mb-12 mb-6">
                                    {title}
                                 </div>
                                 <div className="flex flex-col group-even:bg-gray-800 rounded-2xl 2xl:py-8 py-4">
                                    {content.slice(0, 9).map((items, index) => (
                                       <div className="py-6 border-b border-gray-400/20 last:border-b-0 flex flex-col items-center justify-center  group-first:items-start 2xl:mx-8 mx-2.5 2xl:h-[70px] md:h-16 h-[60px]">
                                          <div
                                             key={index}
                                             className={`text-gray-400 group-first:text-white 2xl:text-base md:text-md text-xs ${className}`}
                                          >
                                             {items}
                                          </div>
                                       </div>
                                    ))}
                                    {open &&
                                       content.slice(9).map((items, index) => (
                                          <div className="py-6 border-b border-gray-400/20 last:border-b-0 flex flex-col items-center justify-center  group-first:items-start 2xl:mx-8 mx-2.5 2xl:h-[70px] md:h-16 h-[60px]">
                                             <div
                                                key={index}
                                                className={`text-gray-400 group-first:text-white 2xl:text-base md:text-md text-xs ${className}`}
                                             >
                                                {items}
                                             </div>
                                          </div>
                                       ))}
                                 </div>
                                 <div className="py-2.5 sm:py-5 md:py-8 md:mx-5 mx-3">
                                    {btn.map(({titleB, value}, index) => (
                                       <div
                                          key={index}
                                          data-aos="fade-up"
                                          data-aos-delay={`${index * 200}`}
                                          className=" flex flex-col gap-2 items-center justify-center bg-feature-btn rounded-2xl md:h-24 md:py-4 py-2.5 2xl:px-10 px-4"
                                       >
                                          <div className="2xl:text-3xl md:text-lg text-md text-white leading-[1.4] font-medium">
                                             {value}
                                          </div>
                                          {titleB && (
                                             <div className="text-xs md:text-md 2xl:text-base text-white font-medium">
                                                {titleB}
                                             </div>
                                          )}
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )
                        )}
                     </div>
                     {!open && (
                        <div className="flex justify-center absolute md:bottom-[21%] sm:bottom-[17%] bottom-[14%] left-1/2 -translate-x-1/2 text-white font-medium underline hover:text-primary duration-300 bg-black/40">
                           <button onClick={toggle}>View More</button>
                        </div>
                     )}
                  </div>
               </div>
               <div className="md:text-md text-sm tracking-normal text-center text-gray-400">
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

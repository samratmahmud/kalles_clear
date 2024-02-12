import React from "react";

const size = [
   {
      colorBg: [
         {
            color: "bg-orange-300",
         },
         {
            color: "bg-blue-200",
         },
         {
            color: "bg-green-200",
         },
      ],
      sizes: [
         {
            sized: "xs",
         },
         {
            sized: "s",
         },
         {
            sized: "m",
            className: "text-primary",
         },
         {
            sized: "l",
         },
         {
            sized: "xl",
         },
      ],
   },
];

function Features() {
   return (
      <section>
         <div id="features" className="container">
            <div className="max-w-[1700px] mx-auto mb-16 md:mb-20 lg:mb-28 xl:mb-40 2xl:mb-[200px]">
               <div className="flex lg:flex-row flex-col gap-8 lg:gap-2 lg:items-end justify-between 2xl:mb-16 lg:mb-12 md:mb-10 mb-8">
                  <div className="flex justify-center lg:justify-start items-center sm:gap-8 gap-3">
                     <img
                        data-aos="fade-right"
                        className=" w-14 sm:w-[70px] lg:w-auto"
                        src="/images/features.svg"
                        alt=""
                     />
                     <h2
                        data-aos="fade-up"
                        className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-10xl font-medium text-white"
                     >
                        All{" "}
                        <span className="text-lenear bg-one-stop underline relative">
                           Boost Sales
                           <span className="bg-one-stop h-0.5 w-full absolute bottom-1 md:bottom-2 left-0" />
                        </span>{" "}
                        Features
                        <br /> in One Theme
                     </h2>
                  </div>
                  <div
                     data-aos="fade-up"
                     className="xl:text-xl sm:text-lg text-base -tracking-[0.32px] xl:leading-[1.4em] leading-[1.4em] text-center lg:text-left"
                  >
                     Buy one, get all premium features to level up <br />{" "}
                     customer experience and rocket sales.
                  </div>
               </div>
               <div className="grid grid-cols-12 gap-7">
                  <div className="col-span-12 md:col-span-6 xl:col-span-5 relative md:min-h-[380px] group cursor-pointer">
                     <img
                        className="w-full"
                        src="/images/item1 (1).png"
                        alt=""
                     />
                     <div className="absolute xl:bottom-14 lg:bottom-10 bottom-8 xl:right-10right-4 right-[5%] lg:right-[8%]">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl md:text-lg text-sm font-medium text-white mb-4 text-center lg:text-left"
                        >
                           Smart Product Filters
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] md:text-[14px] text-sm leading-[1.2] tracking-normal 2xl:max-w-[300px] md:max-w-[260px] max-w-[220px] text-center lg:text-left"
                        >
                           Filtering products is fast, convenient and smart by
                           auto tags entry & multiple product attributes
                        </p>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 xl:col-span-7 relative min-h-[300px] group cursor-pointer">
                     <img
                        className="w-full"
                        src="/images/item2 (1).png"
                        alt=""
                     />
                     <div className="absolute xl:top-12 md:bottom-7 bottom-5 2xl:right-8 xl:right-4 left-0 xl:left-auto w-full md:w-auto">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl md:text-lg text-md font-medium text-white mb-4 text-center md:text-left"
                        >
                           Pre-purchase upsell
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] md:text-[14px] text-sm leading-[1.2] tracking-normal 2xl:max-w-[275px] md:max-w-[240px] max-w-[220px] mx-auto md:ml-0 text-center md:text-left"
                        >
                           Upsell and cross-sell easily on product pages with
                           related items
                        </p>
                        <div
                           data-aos="fade-up"
                           data-aos-delay="700"
                           className="py-5 hidden xl:block"
                        >
                           {size.map(({colorBg, sizes}, index) => (
                              <div key={index}>
                                 <div className="flex gap-3 mb-3">
                                    {colorBg.map(({color}) => (
                                       <div
                                          key={index}
                                          className="first:border border-primary rounded-full p-1"
                                       >
                                          <div
                                             className={`w-7 aspect-square ${color} rounded-full`}
                                          />
                                       </div>
                                    ))}
                                 </div>
                                 <div className="flex gap-3">
                                    {sizes.map(({sized, className}, index) => (
                                       <div
                                          key={index}
                                          className={`text-sm uppercase ${className}`}
                                       >
                                          {sized}
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="absolute top-7 right-[3%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 relative group cursor-pointer">
                     <img src="/images/item3 (2).png" alt="" />
                     <div className="absolute lg:bottom-8 bottom-6 px-2 flex flex-col items-center w-full">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl md:text-lg text-md font-medium text-white mb-4 text-center"
                        >
                           Product Variant Swatches
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] md:text-[14px] text-sm leading-[1.2] tracking-normal 2xl:max-w-[340px] md:max-w-[300px] max-w-[250px] text-center"
                        >
                           Swatch products with multiple attributes at once in
                           products, collections, homepage, etc.
                        </p>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 relative group cursor-pointer">
                     <img
                        className="w-full"
                        src="/images/item4 (1).png"
                        alt=""
                     />
                     <div className="absolute md:top-12 top-8 px-2 flex flex-col items-center w-full">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl md:text-lg text-md font-medium text-white mb-4 text-center 2xl:max-w-[250px] md:max-w-[200px] max-w-[150px] mx-auto"
                        >
                           Cart Drawer With Free Shipping Goal
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] md:text-[14px] text-sm leading-[1.2] tracking-normal 2xl:max-w-[355px] md:max-w-[315px] max-w-[270px] text-center"
                        >
                           Improve shopping convenience & sales with mini cart
                           showing free shipping notification
                        </p>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 relative group cursor-pointer">
                     <img
                        className="w-full"
                        src="/images/item5 (1).png"
                        alt=""
                     />
                     <div className="absolute lg:bottom-10 bottom-8 px-2 w-full">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl md:text-lg text-md font-medium text-white mb-4 text-center"
                        >
                           Frequently Bought Together
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] md:text-[14px] text-sm leading-[1.2] tracking-normal 2xl:max-w-[360px] md:max-w-[320px] max-w-[270px] mx-auto text-center"
                        >
                           Encourage average order value by showing frequently
                           bought together products
                        </p>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="md:col-span-6 col-span-12 relative group cursor-pointer">
                     <img className="w-full" src="/images/item6.png" alt="" />
                     <div className="absolute lg:bottom-10 md:bottom-6 bottom-3 lg:left-10 left-3 w-full">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl md:text-lg text-md font-medium text-white mb-4"
                        >
                           Video Thumbnail & 3D
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] md:text-[14px] text-sm leading-[1.2] tracking-normal 2xl:max-w-[460px] lg:max-w-[400px] md:max-w-[320px] max-w-[320px]"
                        >
                           Stunning product multi-media such as video, 3D models
                           improve conversion rate & reduce returns
                        </p>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="md:col-span-6 col-span-12 relative group cursor-pointer">
                     <img className="w-full" src="/images/item7.png" alt="" />
                     <div className="absolute top-12 sm:top-14 xl:top-20 2xl:top-24 xl:left-14 left-7 w-full">
                        <h3
                           data-aos="fade-right"
                           data-aos-delay="200"
                           className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-8xl leading-tight font-medium text-white max-w-[125px] sm:max-w-[145px] md:max-w-[160px] lg:max-w-[212px] xl:max-w-[230px] 2xl:max-w-[290px]"
                        >
                           Increase
                           <div className="text-lenear bg-one-stop inline-block relative">
                              <span className="w-full h-0.5 bg-one-stop absolute bottom-0.5" />
                              FOMO & Trust
                           </div>
                           For Any Single Product
                        </h3>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="xl:col-span-7 md:col-span-6 col-span-12 relative min-h-[300px] group cursor-pointer">
                     <img className="w-full" src="/images/item8.png" alt="" />
                     <div className="absolute xl:top-12 lg:top-6 bottom-4 px-2 w-full">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl md:text-lg text-md font-medium text-white mb-4 text-center"
                        >
                           Sticky Add To Cart
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] md:text-[14px] text-sm leading-[1.2] tracking-normal 2xl:max-w-[360px] md:max-w-[280px] max-w-[250px] mx-auto text-center"
                        >
                           Persistent add-to-cart bar for easy and quick product
                           purchase
                        </p>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="xl:col-span-5 md:col-span-6 col-span-12 relative group cursor-pointer">
                     <img className="w-full" src="/images/item9.png" alt="" />
                     <div className="absolute lg:top-12 top-5 px-2 w-full">
                        <h2
                           data-aos="fade-up"
                           data-aos-delay="200"
                           className="2xl:text-3xl text-lg font-medium text-white mb-4 text-center"
                        >
                           Pre Order
                        </h2>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="400"
                           className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal text-center"
                        >
                           Make it easier for customers to <br /> pre-order your
                           coming soon products
                        </p>
                     </div>
                     <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                        <img
                           className="w-6 h-4"
                           src="/images/icons8-arrow-right-50.png"
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

export default Features;

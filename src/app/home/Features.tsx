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

const featuresImagesGroup = [
   {
      title: "Smart Product Filters",
      thumbnail: "/images/item1 (1).png",
      describtiton: (
         <>
            Filtering products is fast, convenient and smart by auto tags entry
            & multiple product attributes
         </>
      ),
      className: "bottom-14 right-[8%]",
      classNames: "xl:col-span-5 col-span-6",
   },
   {
      title: "Pre-purchase upsell",
      thumbnail: "/images/item2 (1).png",
      describtiton: (
         <>Upsell and cross-sell easily on product pages with related items</>
      ),
      className: "xl:top-11 bottom-0 2xl:right-[8%] right-4 w-full text-center",
      classNames: "xl:col-span-7 col-span-6",
      size: [
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
      ],
   },
   {
      title: "Product Variant Swatches",
      thumbnail: "/images/item3 (2).png",
      describtiton: (
         <>
            Swatch products with multiple attributes at once in products,
            collections, homepage, etc.
         </>
      ),
      className: "bottom-10 text-center left-0 right-0 w-full",
      classNames: "xl:col-span-4 col-span-6",
   },
   {
      title: <>Cart Drawer With Free Shipping Goal</>,
      thumbnail: "/images/item4 (1).png",
      describtiton: (
         <>
            Improve shopping convenience & sales with mini cart showing free
            shipping notification
         </>
      ),
      className: "top-10 text-center left-0 right-0 w-full",
      classNames: "xl:col-span-4 col-span-6",
   },
   {
      title: "Frequently Bought Together",
      thumbnail: "/images/item5 (1).png",
      describtiton: (
         <>
            Encourage average order value by showing frequently bought together
            products
         </>
      ),
      className: "bottom-8 text-center left-0 right-0 w-full",
      classNames: "xl:col-span-4 col-span-6",
   },
   {
      title: "Video Thumbnail & 3D",
      thumbnail: "/images/item6.png",
      describtiton: (
         <>
            Stunning product multi-media such as video, 3D models improve
            conversion rate & reduce returns
         </>
      ),
      className: "bottom-10 left-12 w-full",
      classNames: "col-span-6",
   },
   {
      title: (
         <>
            <h3 className="text-8xl font-medium">
               Increase <br />
               <p className="text-lenear bg-one-stop inline-block">
                  FOMO & Trust
               </p>{" "}
               <br /> For Any Single <br /> Product
            </h3>
         </>
      ),
      thumbnail: "/images/item7.png",
      className: "top-24 left-12 w-full",
      classNames: "col-span-6",
   },
   {
      title: "Sticky Add To Cart",
      thumbnail: "/images/item8.png",
      describtiton: (
         <>Persistent add-to-cart bar for easy and quick product purchase</>
      ),
      className: "top-12 text-center left-0 right-0 w-full",
      classNames: "col-span-7",
   },
   {
      title: "Pre Order",
      thumbnail: "/images/item9.png",
      describtiton: (
         <>
            Make it easier for customers to pre-order your coming soon products
         </>
      ),
      className: "top-12 text-center left-0 right-0 w-full",
      classNames: "col-span-5",
   },
];

function Features() {
   return (
      <section>
         <div id="features" className="container">
            <div className="max-w-[1700px] mx-auto mb-[200px]">
               <div className="flex lg:flex-row flex-col gap-8 lg:gap-2 lg:items-end justify-between 2xl:mb-16 lg:mb-12 md:mb-10 mb-8">
                  <div className="flex justify-center lg:justify-start items-center gap-8">
                     <img
                        className="w-[70px] lg:w-auto"
                        src="/images/features.svg"
                        alt=""
                     />
                     <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-10xl font-medium text-white">
                        All{" "}
                        <span className="text-lenear bg-one-stop underline relative">
                           Boost Sales
                           <span className="bg-one-stop h-0.5 w-full absolute bottom-2 left-0" />
                        </span>{" "}
                        Features
                        <br /> in One Theme
                     </h2>
                  </div>
                  <div className="xl:text-xl text-lg xl:leading-[1.4em] leading-[1.4em] text-center lg:text-left">
                     Buy one, get all premium features to level up <br />{" "}
                     customer experience and rocket sales.
                  </div>
               </div>
               <div className="grid grid-cols-12 gap-7">
                  {/* {featuresImagesGroup.map(
                     (
                        {
                           title,
                           thumbnail,
                           describtiton,
                           className,
                           classNames,
                           size,
                        },
                        index
                     ) => (
                        <div
                           key={index}
                           className={`relative group cursor-pointer ${classNames}`}
                        >
                           <img className="w-full" src={thumbnail} alt="" />
                           <div className={`absolute  ${className}`}>
                              <div className="w-full">
                                 <h3 className="2xl:text-3xl text-lg font-medium text-white mb-4">
                                    {title}
                                 </h3>
                                 <p
                                    className={`2xl:text-base text-md tracking-normal `}
                                 >
                                    {describtiton}
                                 </p>
                                 {size && (
                                    <div className="py-5 hidden xl:block">
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
                                                {sizes.map(
                                                   (
                                                      {sized, className},
                                                      index
                                                   ) => (
                                                      <div
                                                         key={index}
                                                         className={`text-sm uppercase ${className}`}
                                                      >
                                                         {sized}
                                                      </div>
                                                   )
                                                )}
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                 )}
                              </div>
                           </div>
                           <div className="absolute top-8 right-[8%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                              <img
                                 className="w-6 h-4"
                                 src="/images/icons8-arrow-right-50.png"
                                 alt=""
                              />
                           </div>
                        </div>
                     )
                  )} */}
                  <div className="col-span-6 xl:col-span-5 relative">
                     <img src="/images/item1 (1).png" alt="" />
                     <div className="absolute bottom-14 xl:right-10 right-4">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4">
                           Smart Product Filters
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal xl:max-w-[300px] max-w-[270px]">
                           Filtering products is fast, convenient and smart by
                           auto tags entry & multiple product attributes
                        </p>
                     </div>
                  </div>
                  <div className="col-span-6 xl:col-span-7 relative">
                     <img
                        className="w-full"
                        src="/images/item2 (1).png"
                        alt=""
                     />
                     <div className="absolute top-16 right-8">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4">
                           Smart Product Filters
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal max-w-[300px]">
                           Filtering products is fast, convenient and smart by
                           auto tags entry & multiple product attributes
                        </p>
                        <div className="py-5 hidden xl:block">
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
                  </div>
                  <div className="col-span-6 xl:col-span-4 relative">
                     <img src="/images/item3 (2).png" alt="" />
                     <div className="absolute bottom-12 px-2 flex flex-col items-center w-full">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4 text-center">
                           Product Variant Swatches
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal max-w-[340px] text-center">
                           Swatch products with multiple attributes at once in
                           products, collections, homepage, etc.
                        </p>
                     </div>
                  </div>
                  <div className="col-span-6 xl:col-span-4 relative">
                     <img src="/images/item4 (1).png" alt="" />
                     <div className="absolute top-12 px-2 flex flex-col items-center w-full">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4 text-center max-w-[250px] mx-auto">
                           Cart Drawer With Free Shipping Goal
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal max-w-[355px] text-center">
                           Improve shopping convenience & sales with mini cart
                           showing free shipping notification
                        </p>
                     </div>
                  </div>
                  <div className="col-span-6 xl:col-span-4 relative">
                     <img src="/images/item5 (1).png" alt="" />
                     <div className="absolute bottom-12 px-2 w-full">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4 text-center">
                           Frequently Bought Together
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal max-w-[360px] mx-auto text-center">
                           Encourage average order value by showing frequently
                           bought together products
                        </p>
                     </div>
                  </div>
                  <div className="col-span-6 relative">
                     <img className="w-full" src="/images/item6.png" alt="" />
                     <div className="absolute bottom-14 left-12 w-full">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4">
                           Video Thumbnail & 3D
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal max-w-[460px]">
                           Stunning product multi-media such as video, 3D models
                           improve conversion rate & reduce returns
                        </p>
                     </div>
                  </div>
                  <div className="col-span-6 relative">
                     <img className="w-full" src="/images/item7.png" alt="" />
                     <div className="absolute top-[103px] left-14 w-full">
                        <h3 className="text-8xl font-medium text-white max-w-[290px]">
                           Increase
                           <div className="text-lenear bg-one-stop inline-block relative">
                              <span className="w-full h-0.5 bg-one-stop absolute bottom-0.5" />
                              FOMO & Trust
                           </div>
                           For Any Single Product
                        </h3>
                     </div>
                  </div>
                  <div className="xl:col-span-7 col-span-6 relative">
                     <img className="w-full" src="/images/item8.png" alt="" />
                     <div className="absolute top-14 px-2 w-full">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4 text-center">
                           Sticky Add To Cart
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal max-w-[360px] mx-auto text-center">
                           Persistent add-to-cart bar for easy and quick product
                           purchase
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-5 col-span-6 relative">
                     <img className="w-full" src="/images/item9.png" alt="" />
                     <div className="absolute top-14 px-2 w-full">
                        <h2 className="2xl:text-3xl text-lg font-medium text-white mb-4 text-center">
                           Pre Order
                        </h2>
                        <p className="2xl:text-[16px] text-[14px] leading-[1.2] tracking-normal max-w-[290px] mx-auto text-center">
                           Make it easier for customers to pre-order your coming
                           soon products
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Features;

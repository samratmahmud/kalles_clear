"use client";
import React from "react";
import Masonry from "react-responsive-masonry";

const cardsGroup = [
   {
      title: "Mobile Bottom Navigation",
      thumbnail: "/images/1 (1).png",
      describtiton: (
         <>
            Shopping on mobile is much more convenient <br />
            with clean bottom navigation
         </>
      ),
      className: "md:bottom-10 bottom-7 left-0 right-0 text-center",
      classNames:
         "lg:col-span-4 md:col-span-6 col-span-12 bg-gray-800 rounded-2xl min-h-[400px]",
   },
   {
      title: "Popup & Sidebar Search",
      thumbnail: "/images/2.png",
      describtiton: `Dynamic ways to filter a product, enhance shopping convenience`,
      className: "lg:top-10 bottom-8 left-0 right-0 text-center",
      classNames:
         "lg:col-span-8 md:col-span-6 col-span-12 bg-gray-800 rounded-2xl min-h-[400px]",
   },
   {
      title: "Stunning Lookbook",
      thumbnail: "/images/3.png",
      describtiton: (
         <>Showcase your items in the most eye-catching way with Lookbook</>
      ),
      className: "bottom-8 left-0 right-0 text-center",
      classNames:
         "md:col-span-6 col-span-12 bg-gray-800 rounded-2xl min-h-[320px]",
   },
   {
      title: "Quickview",
      thumbnail: "/images/4.png",
      describtiton: (
         <>
            Allow shoppers to view product info right on home or collection
            pages
         </>
      ),
      className: "md:bottom-8 bottom-2 left-0 right-0 text-center",
      classNames: "md:col-span-6 col-span-12",
   },
   {
      title: "Compare, Wishlist",
      thumbnail: "/images/5.png",
      describtiton: (
         <>
            Make shopping experience more fun & informative with Compare &
            Wishlist
         </>
      ),
      className: "md:bottom-8 bottom-2 left-0 right-0 text-center",
      classNames: "md:col-span-6 col-span-12 bg-gray-950 rounded-2xl",
   },
   {
      title: "Exit Intent Popup",
      thumbnail: "/images/6.png",
      describtiton: (
         <>
            Win back customers with exit intent popup showing{" "}
            <br className="hidden md:block" /> discounts & recommend products
         </>
      ),
      className: "md:bottom-8 bottom-2 left-0 right-0 text-center",
      classNames: "md:col-span-6 col-span-12 bg-gray-950 rounded-2xl",
   },
   {
      title: (
         <>
            <p className="max-w-[400px] md:max-w-60 mx-auto">
               Multiple Currencies & Languages
            </p>
         </>
      ),
      thumbnail: "/images/18.jpeg",
      describtiton: (
         <>
            Smoothly switching between multiple <br /> currencies and languages
         </>
      ),
      className: "md:bottom-8 bottom-5 left-0 right-0 text-center",
      classNames:
         "3xl:col-span-4 md:col-span-6 col-span-12 bg-gray-950 rounded-2xl min-h-[330px]",
   },
   {
      fontsA: "500+",
      title: "Google Fonts & Custom Fonts",
      thumbnail: "/images/10.png",
      describtiton: <>Freely use any fonts with Kalles huge font library</>,
      btn: "Font Install Service by Fontify",
      className: "md:bottom-8 bottom-3 left-0 right-0 text-center",
      classNames:
         "3xl:col-span-4 md:col-span-6 col-span-12 bg-gray-950 rounded-2xl",
   },
   {
      title: "Size Chart",
      thumbnail: "/images/11.png",
      describtiton: (
         <>Clean size chart helps customers purchase with confidence</>
      ),
      className: "md:bottom-8 bottom-4 left-0 right-0 text-center",
      classNames:
         "3xl:col-span-4 md:col-span-6 col-span-12 bg-gray-950 rounded-2xl",
   },
   {
      title: "Stunning Lookbook",
      thumbnail: "/images/3.png",
      describtiton: (
         <>Showcase your items in the most eye-catching way with Lookbook</>
      ),
      className: "md:bottom-8 bottom-4 left-0 right-0 text-center",
      classNames:
         "md:col-span-6 col-span-12 bg-gray-950 rounded-2xl min-h-[300px]",
   },
   {
      title: "Quickview",
      thumbnail: "/images/4.png",
      describtiton: (
         <>
            Allow shoppers to view product info right on home or collection
            pages
         </>
      ),
      className: "md:bottom-8 bottom-5 left-0 right-0 text-center",
      classNames: "md:col-span-6 col-span-12",
   },
];

function FeaturesCards() {
   return (
      <section>
         <div className="container">
            <div className="max-w-[1700px] mx-auto mb-16 sm:mb-20 md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-56 relative">
               <span className="bg-primary w-80 aspect-square absolute -bottom-60 left-1/4 -translate-x-1/4 blur-[250px]" />
               <div className="grid grid-cols-12 gap-7 relative">
                  <span className="bg-primary w-96 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[220px] hidden md:block" />
                  {cardsGroup.map(
                     (
                        {
                           title,
                           thumbnail,
                           describtiton,
                           className,
                           classNames,
                           btn,
                           fontsA,
                        },
                        index
                     ) => (
                        <div
                           key={index}
                           className={`relative group cursor-pointer ${classNames}`}
                        >
                           <img
                              className="w-full opacity-30 xl:opacity-100"
                              src={thumbnail}
                              alt=""
                           />
                           <div
                              className={`absolute overflow-hidden ${className}`}
                           >
                              <div className="w-full md:px-4 px-2">
                                 {fontsA && (
                                    <div
                                       data-aos="fade-up"
                                       className="lg:text-13xl text-9xl text-lenear bg-one-stop inline-block font-medium mb-2"
                                    >
                                       {fontsA}
                                    </div>
                                 )}
                                 <h3
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    className="xl:text-3xl text-lg font-medium text-white mb-4"
                                 >
                                    {title}
                                 </h3>
                                 <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    className="xl:text-base text-md tracking-normal leading-[1.22] xl:leading-[1.2]"
                                 >
                                    {describtiton}
                                 </p>
                                 {btn && (
                                    <div
                                       data-aos="fade-up"
                                       data-aos-delay="600"
                                       className="text-md bg-features-btn inline-block py-2.5 px-10 mt-6 rounded-lg text-white font-medium"
                                    >
                                       {btn}
                                    </div>
                                 )}
                              </div>
                           </div>
                           <div className="absolute top-7 right-[5%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                              <img
                                 className="w-6 h-4"
                                 src="/images/icons8-arrow-right-50.png"
                                 alt=""
                              />
                           </div>
                        </div>
                     )
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}

export default FeaturesCards;

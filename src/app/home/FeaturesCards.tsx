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
      className: "bottom-12 left-0 right-0 text-center",
      classNames: "col-span-4 bg-gray-800 rounded-2xl",
   },
   {
      title: "Popup & Sidebar Search",
      thumbnail: "/images/2.png",
      describtiton: `Dynamic ways to filter a product, enhance shopping convenience`,
      className: "top-10 left-0 right-0 text-center",
      classNames: "col-span-8 bg-gray-800 rounded-2xl",
   },
   {
      title: "Stunning Lookbook",
      thumbnail: "/images/3.png",
      describtiton: (
         <>Showcase your items in the most eye-catching way with Lookbook</>
      ),
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-6 bg-gray-800 rounded-2xl",
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
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-6",
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
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-6 bg-gray-950 rounded-2xl",
   },
   {
      title: "Exit Intent Popup",
      thumbnail: "/images/6.png",
      describtiton: (
         <>
            Win back customers with exit intent popup showing <br />
            discounts & recommend products
         </>
      ),
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-6 bg-gray-950 rounded-2xl",
   },
   {
      title: (
         <>
            Multiple Currencies <br /> & Languages
         </>
      ),
      thumbnail: "/images/18.jpeg",
      describtiton: (
         <>
            Smoothly switching between multiple <br /> currencies and languages
         </>
      ),
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-4 bg-gray-950 rounded-2xl",
   },
   {
      fontsA: "500+",
      title: "Google Fonts & Custom Fonts",
      thumbnail: "/images/10.png",
      describtiton: <>Freely use any fonts with Kalles huge font library</>,
      btn: "Font Install Service by Fontify",
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-4 bg-gray-950 rounded-2xl",
   },
   {
      title: "Size Chart",
      thumbnail: "/images/11.png",
      describtiton: (
         <>Clean size chart helps customers purchase with confidence</>
      ),
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-4 bg-gray-950 rounded-2xl",
   },
   {
      title: "Stunning Lookbook",
      thumbnail: "/images/3.png",
      describtiton: (
         <>Showcase your items in the most eye-catching way with Lookbook</>
      ),
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-6 bg-gray-950 rounded-2xl",
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
      className: "bottom-8 left-0 right-0 text-center",
      classNames: "col-span-6",
   },
];

function FeaturesCards() {
   return (
      <section>
         <div className="container-width mb-56 relative">
            <span className="bg-primary w-80 aspect-square absolute -bottom-60 left-1/4 -translate-x-1/4 blur-[250px]" />
            <div className="grid grid-cols-12 gap-7 relative">
               <span className="bg-primary w-96 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[220px]" />
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
                        <img className="opacity-50" src={thumbnail} alt="" />
                        <div className={`absolute ${className}`}>
                           <div className="w-full px-12">
                              {fontsA && (
                                 <div className="text-13xl text-lenear bg-one-stop inline-block font-medium">
                                    {fontsA}
                                 </div>
                              )}
                              <h3 className="text-3xl font-medium text-white mb-2">
                                 {title}
                              </h3>
                              <p className="text-base tracking-normal">
                                 {describtiton}
                              </p>
                              {btn && (
                                 <div className="text-md bg-features-btn inline-block py-2 px-10 mt-6 rounded-lg text-white font-medium">
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
      </section>
   );
}

export default FeaturesCards;

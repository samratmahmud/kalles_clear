import React from "react";

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
      classNames: "col-span-8",
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
      className: "bottom-0 left-0 right-0 text-center",
      classNames: "col-span-6 h-[70%]",
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
      className: "bottom-0 left-0 right-0 text-center",
      classNames: "col-span-6 absolute",
   },
];

function FeaturesCards() {
   return (
      <section>
         <div className="container-width">
            <div className="grid grid-cols-12 gap-7 relative">
               <span className="bg-primary w-96 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[220px]" />
               {cardsGroup.map(
                  (
                     {title, thumbnail, describtiton, className, classNames},
                     index
                  ) => (
                     <div
                        key={index}
                        className={`relative group cursor-pointer ${classNames}`}
                     >
                        <img className="opacity-50" src={thumbnail} alt="" />
                        <div className={`absolute ${className}`}>
                           <div className="w-full">
                              <h3 className="text-3xl font-medium text-white mb-2">
                                 {title}
                              </h3>
                              <p className="text-base tracking-normal">
                                 {describtiton}
                              </p>
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

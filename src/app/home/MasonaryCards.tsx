import React from "react";

const imagesGroup = [
   {
      thumbnail: [
         "/images/1.jpeg",
         "/images/2.jpeg",
         "/images/3.jpeg",
         "/images/4.jpeg",
         "/images/5.jpeg",
      ],
   },
   {
      thumbnail: [
         "/images/6.jpeg",
         "/images/7.jpeg",
         "/images/8.jpeg",
         "/images/9.jpeg",
         "/images/10.jpeg",
         "/images/11.jpeg",
      ],
   },
   {
      thumbnail: [
         "/images/12.jpeg",
         "/images/13.jpeg",
         "images/14.jpeg",
         "/images/15.jpeg",
         "/images/16.jpeg",
         "/images/17.jpeg",
      ],
   },
];

function MasonaryCards() {
   return (
      <section>
         <div className="container">
            <div className="relative mb-8 md:mb-12 lg:mb-20 xl:mb-32 2xl:mb-44 max-w-[1700px] mx-auto">
               <div className="sticky top-28 z-10 flex justify-center mb-16 sm:mb-20 md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-52">
                  <div className="backdrop-blur-md inline-block rounded-3xl bg-black/65 w-full md:w-auto">
                     <h2 className="flex gap-8 items-center text-3xl md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-10xl text-white font-medium justify-center py-5 md:py-7 px-7 md:px-12 lg:px-24 max-w-[784px] h-40 mx-auto">
                        <span className="text-10xl sm:text-13xl md:text-[90px] lg:text-[96px] xl:text-18xl font-medium md:tracking-[-6.4px] bg-50+ text-lenear">
                           25+
                        </span>
                        Ready to Use Sections
                     </h2>
                  </div>
               </div>
               <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-4">
                  {imagesGroup.map(({thumbnail}, index) => (
                     <div
                        key={index}
                        className="flex flex-col xl:gap-8 gap-4 4xl:first:mt-20 4xl:last:mt-20"
                     >
                        {thumbnail.map((items, index) => (
                           <img
                              key={index}
                              className="w-full rounded-xl"
                              src={items}
                              alt=""
                           />
                        ))}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default MasonaryCards;

import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const contentOne = [
   {
      thumbnail: "/images/4 (1).jpeg",
      title: "True Decadence",
      describtion: "United Kingdom",
      href: "/",
   },
   {
      thumbnail: "/images/1 (1).jpeg",
      title: "Nala und Luna",
      describtion: "Switzerland",
      href: "/",
   },
   {
      thumbnail: "/images/2 (1).jpeg",
      title: "Mymanu",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/3 (1).jpeg",
      title: "Blomdahl Jewelry",
      describtion: "Australia",
      href: "/",
   },
   {
      thumbnail: "/images/4 (1).jpeg",
      title: "True Decadence",
      describtion: "United Kingdom",
      href: "/",
   },
   {
      thumbnail: "/images/1 (1).jpeg",
      title: "Nala und Luna",
      describtion: "Switzerland",
      href: "/",
   },
   {
      thumbnail: "/images/2 (1).jpeg",
      title: "Mymanu",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/3 (1).jpeg",
      title: "Blomdahl Jewelry",
      describtion: "Australia",
      href: "/",
   },
   {
      thumbnail: "/images/4 (1).jpeg",
      title: "True Decadence",
      describtion: "United Kingdom",
      href: "/",
   },
   {
      thumbnail: "/images/1 (1).jpeg",
      title: "Nala und Luna",
      describtion: "Switzerland",
      href: "/",
   },
   {
      thumbnail: "/images/2 (1).jpeg",
      title: "Mymanu",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/3 (1).jpeg",
      title: "Blomdahl Jewelry",
      describtion: "Australia",
      href: "/",
   },
];

const contentTwo = [
   {
      thumbnailTwo: "/images/7 (1).jpeg",
      titleTwo: "JW PEI",
      describtionTwo: "United States",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/8 (1).jpeg",
      titleTwo: "Ugreen",
      describtionTwo: "United States",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/5 (1).jpeg",
      titleTwo: "Good in the Woods",
      describtionTwo: "USA",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/6 (1).jpeg",
      titleTwo: "Ruby Rose",
      describtionTwo: "Colombia",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/7 (1).jpeg",
      titleTwo: "JW PEI",
      describtionTwo: "United States",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/8 (1).jpeg",
      titleTwo: "Ugreen",
      describtionTwo: "United States",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/5 (1).jpeg",
      titleTwo: "Good in the Woods",
      describtionTwo: "USA",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/6 (1).jpeg",
      titleTwo: "Ruby Rose",
      describtionTwo: "Colombia",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/7 (1).jpeg",
      titleTwo: "JW PEI",
      describtionTwo: "United States",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/8 (1).jpeg",
      titleTwo: "Ugreen",
      describtionTwo: "United States",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/5 (1).jpeg",
      titleTwo: "Good in the Woods",
      describtionTwo: "USA",
      hrefTwo: "/",
   },
   {
      thumbnailTwo: "/images/6 (1).jpeg",
      titleTwo: "Ruby Rose",
      describtionTwo: "Colombia",
      hrefTwo: "/",
   },
];

function Explore() {
   return (
      <section>
         <div className="mb-[200px]">
            <div className="flex flex-col items-center mb-20">
               <h3 className="text-5xl font-medium text-lenear bg-one-stop tex-tlenear inline-block mb-3">
                  See Kalles in real live?
               </h3>
               <h2 className="text-16xl font-medium text-white tracking-[-2.4px]">
                  Explore websites built by Kalles
               </h2>
            </div>
            <div>
               <Marquee speed={60} pauseOnClick={true}>
                  {contentOne.map(
                     ({thumbnail, title, describtion, href}, index) => (
                        <Link
                           href={href}
                           key={index}
                           className="group"
                           target="_blank"
                        >
                           <div className="bg-white/10 border-2 border-transparent rounded-2xl mx-3">
                              <div className="bg-black p-4 rounded-2xl">
                                 <img
                                    className="w-full max-w-[660px] rounded-2xl"
                                    src={thumbnail}
                                    alt=""
                                 />
                                 <div className="flex items-center justify-between gap-3 py-8 px-4">
                                    <div>
                                       <h4 className="text-xl leading-[1.4] text-white mb-2">
                                          {title}
                                       </h4>
                                       <p className="text-white/50">
                                          {describtion}
                                       </p>
                                    </div>
                                    <div className="w-10 h-10 group-hover:bg-primary duration-300 rounded-lg px-2.5 py-3">
                                       <img
                                          src="/images/icons8-arrow-50.png"
                                          alt=""
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     )
                  )}
               </Marquee>
               <Marquee speed={60} pauseOnClick={true} direction="right">
                  {contentTwo.map(
                     (
                        {thumbnailTwo, titleTwo, describtionTwo, hrefTwo},
                        index
                     ) => (
                        <Link
                           href={hrefTwo}
                           key={index}
                           className="group"
                           target="_blank"
                        >
                           <div className="bg-white/10 border-2 border-transparent rounded-2xl mx-3">
                              <div className="bg-black p-4 rounded-2xl">
                                 <img
                                    className="w-full max-w-[660px] rounded-2xl"
                                    src={thumbnailTwo}
                                    alt=""
                                 />
                                 <div className="flex items-center justify-between gap-3 py-8 px-4">
                                    <div>
                                       <h4 className="text-xl leading-[1.4] text-white mb-2">
                                          {titleTwo}
                                       </h4>
                                       <p className="text-white/50">
                                          {describtionTwo}
                                       </p>
                                    </div>
                                    <div className="w-10 h-10 group-hover:bg-primary duration-300 rounded-lg px-2.5 py-3">
                                       <img
                                          src="/images/icons8-arrow-50.png"
                                          alt=""
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     )
                  )}
               </Marquee>
            </div>
         </div>
      </section>
   );
}

export default Explore;

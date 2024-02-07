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
         <div className="2xl:mb-[200px] xl:mb-40 lg:mb-32 md:mb-20 sm:mb-16 mb-10 relative z-0">
            <div className="bg-blue-300 max-w-[416px] aspect-square w-full rounded-full blur-[300px] absolute -z-10 top-0 left-[50%] translate-x-[-50%]" />
            <div className="flex flex-col items-center xl:mb-20 lg:mb-14 md:mb-10 sm:mb-8 mb-6">
               <h3
                  data-aos="fade-up"
                  className="2xl:text-5xl lg:text-3xl md:text-xl text-md font-medium text-lenear bg-one-stop tex-tlenear inline-block mb-3"
               >
                  See Kalles in real live?
               </h3>
               <h2
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="text-lg sm:text-5xl md:text-8xl lg:text-11xl xl:text-13xl 2xl:text-16xl font-medium text-white md:tracking-[-2.4px]"
               >
                  Explore websites built by Kalles
               </h2>
            </div>
            <div className="flex flex-col gap-6">
               <Marquee speed={60} pauseOnClick={true}>
                  {contentOne.map(
                     ({thumbnail, title, describtion, href}, index) => (
                        <Link
                           href={href}
                           key={index}
                           className="group"
                           target="_blank"
                        >
                           <div className="border-2 border-white/15 rounded-2xl md:mx-3 mx-1.5">
                              <div className="2xl:max-w-[660px] lg:max-w-[550px] md:max-w-[440px] max-w-[375px] w-full md:pt-4 pt-3 md:px-4 px-3 rounded-2xl">
                                 <img
                                    className="w-full rounded-2xl"
                                    src={thumbnail}
                                    alt=""
                                 />
                                 <div className="flex items-center justify-between gap-3 lg:py-8 py-4 px-4">
                                    <div>
                                       <h4 className="lg:text-xl md:text-base text-md leading-[1.4] text-white mb-2">
                                          {title}
                                       </h4>
                                       <p className="text-white/50 text-sm md:text-base">
                                          {describtion}
                                       </p>
                                    </div>
                                    <div className="w-10 h-10 group-hover:bg-primary duration-300 rounded-lg px-3 md:px-2.5 py-3">
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
                           <div className="border-2 border-white/20 rounded-2xl mx-3">
                              <div className="2xl:max-w-[660px] lg:max-w-[550px] md:max-w-[440px] max-w-[375px] w-full md:pt-4 pt-3 md:px-4 px-3 rounded-2xl">
                                 <img
                                    className="w-full max-w-[660px] rounded-2xl"
                                    src={thumbnailTwo}
                                    alt=""
                                 />
                                 <div className="flex items-center justify-between gap-3 lg:py-8 py-4 px-4">
                                    <div>
                                       <h4 className="lg:text-xl md:text-base text-md leading-[1.4] text-white mb-2">
                                          {titleTwo}
                                       </h4>
                                       <p className="text-white/50 text-sm md:text-base">
                                          {describtionTwo}
                                       </p>
                                    </div>
                                    <div className="w-10 h-10 group-hover:bg-primary duration-300 rounded-lg px-3 md:px-2.5 py-3">
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

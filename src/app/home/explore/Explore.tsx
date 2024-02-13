import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import ExploreCards from "./ExploreCards";

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
      thumbnail: "/images/7 (1).jpeg",
      title: "JW PEI",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/8 (1).jpeg",
      title: "Ugreen",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/5 (1).jpeg",
      title: "Good in the Woods",
      describtion: "USA",
      href: "/",
   },
   {
      thumbnail: "/images/6 (1).jpeg",
      title: "Ruby Rose",
      describtion: "Colombia",
      href: "/",
   },
   {
      thumbnail: "/images/7 (1).jpeg",
      title: "JW PEI",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/8 (1).jpeg",
      title: "Ugreen",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/5 (1).jpeg",
      title: "Good in the Woods",
      describtion: "USA",
      href: "/",
   },
   {
      thumbnail: "/images/6 (1).jpeg",
      title: "Ruby Rose",
      describtion: "Colombia",
      href: "/",
   },
   {
      thumbnail: "/images/7 (1).jpeg",
      title: "JW PEI",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/8 (1).jpeg",
      title: "Ugreen",
      describtion: "United States",
      href: "/",
   },
   {
      thumbnail: "/images/5 (1).jpeg",
      title: "Good in the Woods",
      describtion: "USA",
      href: "/",
   },
   {
      thumbnail: "/images/6 (1).jpeg",
      title: "Ruby Rose",
      describtion: "Colombia",
      href: "/",
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
                        <ExploreCards
                           href={href}
                           {...{thumbnail, title, describtion}}
                           key={index}
                        />
                     )
                  )}
               </Marquee>
               <Marquee speed={60} pauseOnClick={true} direction="right">
                  {contentTwo.map(
                     ({thumbnail, title, describtion, href}, index) => (
                        <ExploreCards
                           href={href}
                           {...{thumbnail, title, describtion}}
                           key={index}
                        />
                     )
                  )}
               </Marquee>
            </div>
         </div>
      </section>
   );
}

export default Explore;

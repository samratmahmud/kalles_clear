import Link from "next/link";
import React from "react";

const logoGroup = [
   {
      name: "Power Elite Author",
      logo: "/images/power.svg",
   },
   {
      name: "Milestone Member",
      logo: "/images/milestone.svg",
   },
   {
      name: "Author Level 13",
      logo: "/images/author.svg",
   },
   {
      name: "Top Monthly Author",
      logo: "/images/Mauthor.svg",
   },
   {
      name: "Weekly Top Seller",
      logo: "/images/Wauthor.svg",
   },
   {
      name: "Trendsetter",
      logo: "/images/trendsetter.svg",
   },
   {
      name: "Affiliate Level 5",
      logo: "/images/Affiliate.svg",
   },
   {
      name: "Collector Level 3",
      logo: "/images/Collector.svg",
   },
];

function CommerceCretificate() {
   return (
      <div className="max-w-[1240px] mx-auto rounded-3xl flex flex-col items-center lg:pt-20 md:pt-14 pt-8 px-[15px] pb-8 md:pb-0 md:bg-commerce-bg">
         <div className="relative inline-block overflow-hidden rounded-xl mb-6">
            <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
            <img src="/images/head.png" alt="" />
         </div>
         <h2
            data-aos="fade-up"
            className="text-white text-base sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-8xl text-center font-medium mb-6"
         >
            Commerce Coach Certificate
         </h2>
         <h3
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex gap-3 items-center text-white text-3xl font-medium mb-5"
         >
            From{" "}
            <span>
               <img src="/images/shopify_brands.png" alt="" />
            </span>
         </h3>
         <Link
            data-aos="fade-up"
            data-aos-delay="300"
            href="/"
            target="_blank"
            className="text-base hover:text-primary duration-300 underline font-medium text-white mb-6"
         >
            Learn more
         </Link>
         <div className="flex flex-wrap justify-center gap-6 xl:pb-24 lg:pb-20 md:pb-16 sm:pb-10 pb-5">
            {logoGroup.map(({name, logo}, index) => (
               <div
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                  key={index}
                  className="flex flex-col gap-3 items-center group relative"
               >
                  <span className="relative z-0 group">
                     <img src={logo} alt="" />
                     <span className="group-hover:bg-buttonS3 bg-transparent blur-xl rounded-full w-16 h-16 xl:flex items-center hidden justify-center absolute -top-4 -left-4 -z-10" />
                  </span>
                  <p className="xl:block hidden text-xs opacity-0 absolute -bottom-6 text-gray-300/60 whitespace-nowrap group-hover:opacity-100 duration-500">
                     {name}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default CommerceCretificate;

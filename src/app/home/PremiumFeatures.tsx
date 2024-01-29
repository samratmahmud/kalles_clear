import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

function PremiumFeatures() {
   return (
      <section className="2xl:mb-32 xl:mb-24 lg:mb-16 md:mb-12 mb-8">
         <div className="container-width">
            <div className="flex lg:flex-row flex-col justify-between lg:items-end mb-16">
               <div className="mb-2.5">
                  <h3
                     data-aos="fade-up"
                     className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                  >
                     <img src="/images/linearplus.svg" alt="" />
                     <span className="xl:text-xl text-lg font-medium bg-one-stop text-lenear">
                        WHY CHOOSE KALLES?
                     </span>
                  </h3>
                  <h2
                     data-aos="fade-down-right"
                     className="2xl:text-10xl md:text-7xl sm:text-4xl text-3xl text-white leading-normal font-medium text-center lg:text-left max-w-[630px]"
                  >
                     Stand Out From The Crowd With Premium Features
                  </h2>
               </div>
               <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="lg:max-w-[432px] mx-auto lg:mx-0 lg:text-xl text-base text-center lg:text-left mb-4"
               >
                  Enjoy the exclusive features that make building your web pages
                  a joyful moment. All in one theme!
               </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:gap-6 gap-4 xl:mb-16 lg:mb-14 md:mb-10 mb-8">
               <div className="flex md:flex-row flex-col gap-7 p-[15px] md:p-6 xl:py-20 xl:pl-14 xl:pr-10 bg-gray-800 rounded-2xl md:col-span-2 relative z-0 justify-between">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-one-stop max-w-[300px] aspect-square w-full rounded-full -z-10 blur-3xl md:block hidden" />
                  <div>
                     <div
                        data-aos="fade-up"
                        className="text-10xl sm:text-13xl md:text-[90px] lg:text-[96px] xl:text-17xl leading-normal font-medium text-lenear bg-50+ inline-block mt-5"
                     >
                        50+
                     </div>
                     <h2
                        data-aos="fade-right"
                        className="lg:text-6xl text-3xl text-white font-medium mb-5"
                     >
                        High -quality demos
                     </h2>
                     <div data-aos="fade-right" className="flex">
                        <Buttons
                           href="#Demos"
                           name="Explore Demo"
                           icon="/images/icons8-menu-32.png"
                        />
                     </div>
                  </div>
                  <div data-aos="fade-up">
                     <img className="w-full" src="/images/item1.png" alt="" />
                  </div>
               </div>
               <div
                  className="bg-cover bg-center w-full bg-no-repeat relative rounded-2xl flex flex-col justify-end pb-14 min-h-[350px] md:min-h-[400px] xl:min-h-[496px]"
                  style={{backgroundImage: "url(/images/item2.png)"}}
               >
                  <div className="max-h-[50%] flex justify-center items-center absolute top-1/4 left-0 right-0">
                     <img src="/images/item2_i.png" alt="" />
                  </div>
                  <div className="">
                     <h2
                        data-aos="fade-up"
                        className="text-center text-white lg:text-3xl text-lg font-medium mb-10 px-5"
                     >
                        Developed by{" "}
                        <span className="bg-one-stop text-lenear">
                           Power Elite
                        </span>{" "}
                        on Envato Market
                     </h2>
                     <div className="flex gap-3 justify-center">
                        <div data-aos="fade-right">
                           <Buttons
                              href="/"
                              className="rounded-full lg:py-[5px] py-[3px] lg:pl-1.5 pl-1 lg:pr-4 pr-2"
                              size="small"
                              name="32.000+ Sales"
                              icon="/images/power.svg"
                           />
                        </div>
                        <div data-aos="fade-up">
                           <Buttons
                              href="/"
                              className="rounded-full lg:py-[5px] py-[3px] lg:pl-1.5 pl-1 lg:pr-4 pr-2"
                              size="small"
                              name="5.0 Stars Ratings"
                              icon="/images/icons8-star-90.png"
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <Link
                  href="/"
                  className="rounded-2xl bg-no-repeat w-full flex flex-col justify-end lg:p-9 md:p-7 p-6 relative group min-h-[350px] md:min-h-[400px] xl:min-h-[496px] bg-cover bg-center"
                  style={{backgroundImage: "url(/images/item3.png)"}}
               >
                  <div className="absolute top-10 right-10">
                     <img
                        className="w-4 opacity-0 group-hover:opacity-100 duration-300"
                        src="/images/icons8-arrow-right-32.png"
                        alt=""
                     />
                  </div>
                  <h2
                     data-aos="fade-right"
                     className="xl:text-6xl text-lg lg:text-xl text-white font-medium mb-4"
                  >
                     <span className="bg-one-stop text-lenear xl:text-3xl text-lg font-medium inline-block">
                        Supported by
                     </span>{" "}
                     Commerce Coach
                  </h2>
                  <span data-aos="fade-up">
                     Server{" "}
                     <span className="text-xl font-medium text-white">
                        100k+
                     </span>{" "}
                     customers
                  </span>
               </Link>
               <Link
                  href="/"
                  className="flex flex-col items-center p-9 2xl:p-14 relative group min-h-[350px] md:min-h-[400px] xl:min-h-[496px] bg-cover bg-center"
                  style={{backgroundImage: "url(/images/item4.png)"}}
               >
                  <div className="absolute top-10 right-10">
                     <img
                        className="w-4 opacity-0 group-hover:opacity-100 duration-300"
                        src="/images/icons8-arrow-right-32.png"
                        alt=""
                     />
                  </div>
                  <h2
                     data-aos="fade-down"
                     className="text-center text-lg lg:text-xl xl:text-3xl leading-[1.2] font-medium text-white 2xl:max-w-[300px]"
                  >
                     <span className="relative">
                        One Click{" "}
                        <span className="absolute -bottom-1 left-0">
                           <img src="/images/smallunderline.svg" alt="" />
                        </span>
                     </span>
                     Import demo and more...
                  </h2>
               </Link>
               <div
                  className="flex flex-col justify-end items-center xl:p-12 p-9 2xl:p-14 min-h-[350px] md:min-h-[400px] xl:min-h-[496px] bg-cover bg-center"
                  style={{backgroundImage: "url(/images/item5.png)"}}
               >
                  <span
                     data-aos="fade-up"
                     className="text-white text-center text-lg lg:text-xl xl:text-3xl font-medium leading-[1.2]"
                  >
                     Optimized for{" "}
                     <span className="text-green-600 underline">SEO</span>{" "}
                     <br className="hidden xl:block" />
                     <span className="bg-one-stop text-lenear relative">
                        {" "}
                        & High Performance
                        <span className="h-[0.5px] w-full bg-one-stop absolute bottom-0.5 left-0" />
                     </span>
                  </span>
               </div>
            </div>
            <div className="xl:max-w-[860px] mx-auto bg-gray-black bg-contain rounded-2xl border border-transparent">
               <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-6 gap-4 px-6 py-[23px] bg-gray-800 rounded-2xl overflow-hidden">
                  <div data-aos="fade-up">
                     <img src="/images/shopify_brands (1).png" alt="" />
                  </div>
                  <div
                     data-aos="fade-up"
                     data-aos-delay="200"
                     className="text-base text-center"
                  >
                     <span className="text-white">Enjoy 3 months</span> of
                     shopify for
                     <span className="text-lenear bg-pink-primary">
                        {" "}
                        $1/month{" "}
                     </span>{" "}
                     - Start your free trial
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300">
                     <Buttons
                        className="rounded-lg xl:py-2.5 py-2 px-4"
                        href="/"
                        name="Start Free Trial"
                        size="small"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default PremiumFeatures;

"use client";
import Buttons from "@/components/common/Buttons";
import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const demosItems = [
   {
      name: "All Demos",
      card: [
         {
            title: "Home Fashion Default",
            thumbnail: "/images/home-default.jpeg",
            path: "/",
            hot: "Hot",
         },
         {
            title: "Nutri-Vitamin",
            thumbnail: "/images/home-nutri-vitamin.jpeg",
            path: "/",
            newP: "New",
         },
         {
            title: "Home Handmade 2",
            thumbnail: "/images/landing-handmade2.jpeg",
            path: "/",
         },
         {
            title: "Home Pets",
            thumbnail: "/images/home-pets.png",
            path: "/",
         },
         {
            title: "Home Tee Store",
            thumbnail: "/images/home-tee (1).jpeg",
            path: "/",
         },
         {
            title: "Home Fashion 15",
            thumbnail: "/images/home-fashion-15 (1).png",
            path: "/",
         },
         {
            title: "Home Classic",
            thumbnail: "/images/home-classic.jpeg",
            path: "/",
            hot: "Hot",
         },
         {
            title: "Home Metro",
            path: "/",
            thumbnail: "/images/home-metro.jpeg",
         },
         {
            title: "Home LookBook",
            path: "/",
            thumbnail: "/images/home-lookbook.jpeg",
            newP: "New",
         },
         {
            title: "Home Parallax",
            path: "/",
            thumbnail: "/images/home-parallax.jpeg",
         },
         {
            title: "Home Fashion 11",
            path: "/",
            thumbnail: "/images/home-fashion-11.jpeg",
            newP: "New",
         },
         {
            title: "Home Fashion 9",
            path: "/",
            thumbnail: "/images/home-fashion9.jpeg",
            newP: "New",
         },
         {
            title: "Home LookBook",
            path: "/",
            thumbnail: "/images/home-lookbook.jpeg",
            newP: "New",
         },
         {
            title: "Home Decor",
            path: "/",
            thumbnail: "/images/home-decor.jpeg",
            hot: "Hot",
         },
         {
            title: "Home Decor 2",
            path: "/",
            thumbnail: "/images/home-decor2.jpeg",
         },
         {
            title: "Home Furniture",
            path: "/",
            thumbnail: "/images/home-furniture-1.jpeg",
         },
         {
            title: "Home Furniture 2",
            path: "/",
            thumbnail: "/images/home-furniture.jpeg",
         },
         {
            title: "Home Furniture 3",
            path: "/",
            thumbnail: "/images/home-furniture-2.jpeg",
         },
         {
            title: "Home Furniture 4",
            path: "/",
            thumbnail: "/images/home-furniture-4.jpeg",
         },
         {
            title: "Home New Furniture",
            path: "/",
            thumbnail: "/images/home-furniture-modern.jpeg",
            hot: "Hot",
         },
         {
            title: "Home Electric",
            thumbnail: "/images/home-electric.jpeg",
            path: "/",
         },
         {
            title: "Home Electric Vertical",
            thumbnail: "/images/home-electric-2.jpeg",
            path: "/",
            newP: "New",
         },
         {
            title: "Home Electronic 4",
            thumbnail: "/images/home-electronic.jpeg",
            path: "/",
         },
         {
            title: "Home Hi Tech",
            thumbnail: "/images/home-hitech.jpeg",
            path: "/",
         },
         {
            title: "Home Phonecase 4",
            thumbnail: "/images/home-phonecase.jpeg",
            path: "/",
         },
         {
            title: "Home Watches",
            thumbnail: "/images/home-watches.jpeg",
            path: "/",
         },
         {
            title: "Home Jewelry",
            thumbnail: "/images/home-jewelry.jpeg",
            path: "/",
         },
         {
            title: "Home Baby",
            thumbnail: "/images/home-baby.jpeg",
            path: "/",
            newP: "New",
         },
         {
            title: "Home Kid & Accessories",
            thumbnail: "/images/home-kid-accessories.jpeg",
            path: "/",
         },
         {
            title: "Home Bicycle",
            thumbnail: "/images/home-bicycle.jpeg",
            path: "/",
         },
         {
            title: "Home Hiking",
            thumbnail: "/images/home-hiking.jpeg",
            path: "/",
         },
         {
            title: "Home Sport Accessories",
            thumbnail: "/images/home-sport-accessories.jpeg",
            path: "/",
         },
         {
            title: "Home Sport",
            thumbnail: "/images/home-sport-fitness.jpeg",
            path: "/",
            hot: "Hot",
         },
         {
            title: "Nutri-Vitamin",
            thumbnail: "/images/home-nutri-vitamin.jpeg",
            path: "/",
            newP: "New",
         },
         {
            title: "Home Handmade 2",
            thumbnail: "/images/landing-handmade2.jpeg",
            path: "/",
         },
         {
            title: "Home Pets",
            thumbnail: "/images/home-pets.png",
            path: "/",
         },
         {
            title: "Home Digital",
            thumbnail: "/images/home-digital.jpeg",
            path: "/",
         },
         {
            title: "One Product Store",
            thumbnail: "/images/home-single-product.jpeg",
            path: "/",
         },
         {
            title: "Home Handmade",
            thumbnail: "/images/home-handmade.jpeg",
            path: "/",
         },
         {
            title: "Home Bakery",
            thumbnail: "/images/home-bakery.jpeg",
            path: "/",
         },
         {
            title: "Home Bag",
            thumbnail: "/images/home-bag.jpeg",
            path: "/",
         },
         {
            title: "One Product Store",
            thumbnail: "/images/home-single-product.jpeg",
            path: "/",
         },
         {
            title: "Home Handmade",
            thumbnail: "/images/home-handmade.jpeg",
            path: "/",
         },
         {
            title: "Home Bakery",
            thumbnail: "/images/home-bakery.jpeg",
            path: "/",
         },
         {
            title: "Home Pets",
            thumbnail: "/images/home-pets.png",
            path: "/",
         },
         {
            title: "Home Plant",
            thumbnail: "/images/home-plant.jpeg",
            path: "/",
         },
         {
            title: "Home Barber",
            thumbnail: "/images/home-barber.jpeg",
            path: "/",
         },
         {
            title: "Home Handmade 2",
            thumbnail: "/images/landing-handmade2.jpeg",
            path: "/",
         },
         {
            title: "Home Pets",
            thumbnail: "/images/home-pets.png",
            path: "/",
         },
         {
            title: "Home Digital",
            thumbnail: "/images/home-digital.jpeg",
            path: "/",
         },
         {
            title: "Home Organic",
            thumbnail: "/images/home-organic.jpeg",
            path: "/",
            hot: "Hot",
         },
      ],
   },
   {
      name: "Fashion",
      icon: "/images/icons8-fashion-24.png",
      card: [
         {
            title: "Home Fashion Default",
            path: "/",
            thumbnail: "/images/home-default.jpeg",
         },
         {
            title: "Home Tee Store",
            thumbnail: "/images/home-tee (1).jpeg",
            path: "/",
         },
         {
            title: "Home Fashion 15",
            thumbnail: "/images/home-fashion-15 (1).png",
            path: "/",
         },
         {
            title: "Home Classic",
            thumbnail: "/images/home-classic.jpeg",
            path: "/",
            hot: "Hot",
         },
         {
            title: "Home Video Banner",
            path: "/",
            thumbnail: "/images/home-tee.jpeg",
         },
         {
            title: "Home Categories Links",
            path: "/",
            thumbnail: "/images/home-categories-links.jpeg",
            hot: "Hot",
         },
         {
            title: "Home Metro",
            path: "/",
            thumbnail: "/images/home-metro.jpeg",
         },
         {
            title: "Home LookBook",
            path: "/",
            thumbnail: "/images/home-lookbook.jpeg",
            newP: "New",
         },
         {
            title: "Home Parallax",
            path: "/",
            thumbnail: "/images/home-parallax.jpeg",
         },
         {
            title: "Home Fashion 11",
            path: "/",
            thumbnail: "/images/home-fashion-11.jpeg",
            newP: "New",
         },
         {
            title: "Home Fashion 9",
            path: "/",
            thumbnail: "/images/home-fashion9.jpeg",
            newP: "New",
         },
      ],
   },
   {
      name: "Furniture",
      icon: "/images/icons8-furniture-50.png",
      card: [
         {
            title: "Home Decor",
            path: "/",
            thumbnail: "/images/home-decor.jpeg",
            hot: "Hot",
         },
         {
            title: "Home Decor 2",
            path: "/",
            thumbnail: "/images/home-decor2.jpeg",
         },
         {
            title: "Home Furniture",
            path: "/",
            thumbnail: "/images/home-furniture-1.jpeg",
         },
         {
            title: "Home Furniture 2",
            path: "/",
            thumbnail: "/images/home-furniture.jpeg",
         },
         {
            title: "Home Furniture 3",
            path: "/",
            thumbnail: "/images/home-furniture-2.jpeg",
         },
         {
            title: "Home Furniture 4",
            path: "/",
            thumbnail: "/images/home-furniture-4.jpeg",
         },
         {
            title: "Home New Furniture",
            path: "/",
            thumbnail: "/images/home-furniture-modern.jpeg",
            hot: "Hot",
         },
      ],
   },
   {
      name: "Electronics",
      icon: "/images/icons8-electronic-50.png",
      card: [
         {
            title: "Home Electric",
            thumbnail: "/images/home-electric.jpeg",
            path: "/",
         },
         {
            title: "Home Electric Vertical",
            thumbnail: "/images/home-electric-2.jpeg",
            path: "/",
            newP: "New",
         },
         {
            title: "Home Electronic 4",
            thumbnail: "/images/home-electronic.jpeg",
            path: "/",
         },
         {
            title: "Home Hi Tech",
            thumbnail: "/images/home-hitech.jpeg",
            path: "/",
         },
         {
            title: "Home Phonecase 4",
            thumbnail: "/images/home-phonecase.jpeg",
            path: "/",
         },
         {
            title: "Home Watches",
            thumbnail: "/images/home-watches.jpeg",
            path: "/",
         },
      ],
   },
   {
      name: "Jewelry",
      icon: "/images/icons8-jewelry-96.png",
      card: [
         {
            title: "Home Jewelry",
            thumbnail: "/images/home-jewelry.jpeg",
            path: "/",
         },
      ],
   },
   {
      name: "Kids",
      icon: "/images/icons8-carousel-24.png",
      card: [
         {
            title: "Home Baby",
            thumbnail: "/images/home-baby.jpeg",
            path: "/",
            newP: "New",
         },
         {
            title: "Home Kid & Accessories",
            thumbnail: "/images/home-kid-accessories.jpeg",
            path: "/",
         },
      ],
   },
   {
      name: "Sports",
      icon: "/images/icons8-ez-curl-bar-50.png",
      card: [
         {
            title: "Home Bicycle",
            thumbnail: "/images/home-bicycle.jpeg",
            path: "/",
         },
         {
            title: "Home Hiking",
            thumbnail: "/images/home-hiking.jpeg",
            path: "/",
         },
         {
            title: "Home Sport Accessories",
            thumbnail: "/images/home-sport-accessories.jpeg",
            path: "/",
         },
         {
            title: "Home Sport",
            thumbnail: "/images/home-sport-fitness.jpeg",
            path: "/",
            hot: "Hot",
         },
      ],
   },
   {
      name: "More",
      icon: "/images/icons8-more-50.png",
      card: [
         {
            title: "Nutri-Vitamin",
            thumbnail: "/images/home-nutri-vitamin.jpeg",
            path: "/",
            newP: "New",
         },
         {
            title: "Home Handmade 2",
            thumbnail: "/images/landing-handmade2.jpeg",
            path: "/",
         },
         {
            title: "Home Pets",
            thumbnail: "/images/home-pets.png",
            path: "/",
         },
         {
            title: "Home Digital",
            thumbnail: "/images/home-digital.jpeg",
            path: "/",
         },
         {
            title: "One Product Store",
            thumbnail: "/images/home-single-product.jpeg",
            path: "/",
         },
         {
            title: "Home Handmade",
            thumbnail: "/images/home-handmade.jpeg",
            path: "/",
         },
         {
            title: "Home Bakery",
            thumbnail: "/images/home-bakery.jpeg",
            path: "/",
         },
         {
            title: "Home Bag",
            thumbnail: "/images/home-bag.jpeg",
            path: "/",
         },
         {
            title: "One Product Store",
            thumbnail: "/images/home-single-product.jpeg",
            path: "/",
         },
         {
            title: "Home Handmade",
            thumbnail: "/images/home-handmade.jpeg",
            path: "/",
         },
         {
            title: "Home Bakery",
            thumbnail: "/images/home-bakery.jpeg",
            path: "/",
         },
         {
            title: "Home Pets",
            thumbnail: "/images/home-pets.png",
            path: "/",
         },
         {
            title: "Home Plant",
            thumbnail: "/images/home-plant.jpeg",
            path: "/",
         },
         {
            title: "Home Barber",
            thumbnail: "/images/home-barber.jpeg",
            path: "/",
         },
         {
            title: "Home Handmade 2",
            thumbnail: "/images/landing-handmade2.jpeg",
            path: "/",
         },
         {
            title: "Home Pets",
            thumbnail: "/images/home-pets.png",
            path: "/",
         },
         {
            title: "Home Digital",
            thumbnail: "/images/home-digital.jpeg",
            path: "/",
         },
         {
            title: "Home Organic",
            thumbnail: "/images/home-organic.jpeg",
            path: "/",
            hot: "Hot",
         },
      ],
   },
];

function Demos() {
   const [tab, setTab] = React.useState(0);

   return (
      <section>
         <div
            id="Demos"
            className="container-width mb-8 sm:mb-10 md:mb-14 lg:mb-20 xl:mb-28"
         >
            <h2 className="text-white font-medium flex md:flex-row flex-col items-center md:gap-8 gap-3 justify-center lg:mb-10 md:mb-8 mb-5">
               <span className="text-10xl sm:text-13xl md:text-[90px] lg:text-[96px] xl:text-17xl font-medium text-lenear bg-50+ inline-block">
                  50+
               </span>
               <span className="xl:text-15xl md:text-8xl text-4xl tracking-[-2.4px]">
                  Stunning Demos
               </span>
            </h2>
            <p
               data-aos="fade-up"
               className="md:text-base text-md text-center xl:mb-16 lg:mb-12 md:mb-10 mb-8 max-w-[900px] mx-auto"
            >
               All home pages, inner pages and elements are included with the
               purchase. Mix and blend elements from different demos as per your
               preference and create awesome store with Kalles!
            </p>
            <div>
               <div className="mb-16 relative z-0">
                  <div className="min-h-[100px] w-full bg-primary absolute -top-10 blur-[180px] -z-10 hidden md:block" />
                  <div className="flex justify-center gap-4 overflow">
                     {demosItems.map(({name, icon}, index) => (
                        <div
                           key={index}
                           onClick={() => setTab(index)}
                           className={`md:text-base text-md cursor-pointer border-2 md:py-[9px] py-2.5 px-4 bg-gray-600/30 rounded-lg hover:text-primary duration-300 flex items-center flex-shrink-0 mb-5 gap-3 ${
                              tab === index
                                 ? "border-primary text-white"
                                 : "border-gray-300/10"
                           }`}
                        >
                           {icon && (
                              <img
                                 className="w-4 aspect-square"
                                 src={icon}
                                 alt=""
                              />
                           )}
                           {name}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-4 md:gap-5">
                  {demosItems[tab].card?.map(
                     ({thumbnail, path, title, hot, newP}, index) => (
                        <div
                           key={index}
                           className="bg-demos-card rounded-2xl p-[5px] md:p-4 group"
                        >
                           <div className="relative z-0 mb-3.5 overflow-hidden">
                              <img
                                 className="rounded-2xl w-full"
                                 src={thumbnail}
                                 alt=""
                              />

                              <div className="flex justify-center absolute z-20 left-0 right-0 bottom-14 duration-300 delay-100 xl:-translate-x-3/4 -translate-x-0 group-hover:translate-x-0">
                                 <div className="inline-block bg-demos-btn sm:[background-image:none] relative z-40 rounded-lg">
                                    <Buttons
                                       size="small"
                                       className="rounded-lg sm:py-2 py-1.5 px-4"
                                       href={path}
                                       name="Demo"
                                    />
                                 </div>
                              </div>
                              <div
                                 className="absolute z-10 inset-0 xl:translate-y-[600px] group-hover:translate-y-0 duration-300 delay-150"
                                 style={{
                                    backgroundImage:
                                       "linear-gradient(179deg, rgba(24, 24, 24, 0.00) 44.58%, rgba(12, 12, 12, 0.53) 79.19%, #000 99.19%)",
                                 }}
                              />
                           </div>
                           <div className="flex justify-between gap-3 items-center">
                              <h3 className="text-white text-base md:text-md font-medium hover:text-primary duration-300 cursor-pointer">
                                 {title}
                              </h3>
                              {hot && (
                                 <p className="text-sm font-medium py-0.5 px-2 rounded-full bg-newP text-white">
                                    {hot}
                                 </p>
                              )}
                              {newP && (
                                 <p className="text-sm font-medium py-0.5 px-2 rounded-full bg-newP text-white">
                                    {newP}
                                 </p>
                              )}
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

export default Demos;

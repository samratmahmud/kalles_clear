"use client";
import Link from "next/link";
import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const pagesItems = [
   {
      name: "Product Pages",
      path: "#products",
   },
   {
      name: "Inner Pages",
      path: "#inner-page",
   },
   {
      name: "Portfolio",
      path: "#portfolio",
   },
   {
      name: "Shop Pages",
      path: "#shop-page",
   },
   {
      name: "Blog Pages",
      path: "#blog-page",
   },
];

const pagesCards = [
   {
      id: "products",
      cards: [
         {
            thumbnail: "/images/pro-1.jpeg",
            title: "Product Detail Layout 1",
            href: "",
         },
         {
            thumbnail: "/images/pro-2.jpeg",
            title: "Product Detail Layout 2",
            href: "",
         },
         {
            thumbnail: "/images/Product_layout_3.jpeg",
            title: "Product Detail Layout 3",
            href: "",
         },
         {
            thumbnail: "/images/Product_layout_4.jpeg",
            title: "Product Detail Layout 4",
            href: "",
         },
         {
            thumbnail: "/images/pro-5.jpeg",
            title: "Product Bundle",
            href: "",
         },
         {
            thumbnail: "/images/pro-1.jpeg",
            title: "Product Detail Layout 1",
            href: "",
         },
         {
            thumbnail: "/images/pro-2.jpeg",
            title: "Product Detail Layout 2",
            href: "",
         },
         {
            thumbnail: "/images/Product_layout_3.jpeg",
            title: "Product Detail Layout 3",
            href: "",
         },
         {
            thumbnail: "/images/Product_layout_4.jpeg",
            title: "Product Detail Layout 4",
            href: "",
         },
         {
            thumbnail: "/images/pro-5.jpeg",
            title: "Product Bundle",
            href: "",
         },
         {
            thumbnail: "/images/pro-1.jpeg",
            title: "Product Detail Layout 1",
            href: "",
         },
         {
            thumbnail: "/images/pro-2.jpeg",
            title: "Product Detail Layout 2",
            href: "",
         },
         {
            thumbnail: "/images/Product_layout_3.jpeg",
            title: "Product Detail Layout 3",
            href: "",
         },
         {
            thumbnail: "/images/Product_layout_4.jpeg",
            title: "Product Detail Layout 4",
            href: "",
         },
         {
            thumbnail: "/images/pro-5.jpeg",
            title: "Product Bundle",
            href: "",
         },
      ],
   },
   {
      id: "inner-page",
      cards: [
         {
            thumbnail: "/images/about.jpeg",
            title: "About",
            href: "",
         },
         {
            thumbnail: "/images/contact.jpeg",
            title: "Contact",
            href: "",
         },
         {
            thumbnail: "/images/my-account.jpeg",
            title: "My Account",
            href: "",
         },
         {
            thumbnail: "/images/size-guide.jpeg",
            title: "Size Guide",
            href: "",
         },
         {
            thumbnail: "/images/contact.jpeg",
            title: "Contact",
            href: "",
         },
         {
            thumbnail: "/images/my-account.jpeg",
            title: "My Account",
            href: "",
         },
         {
            thumbnail: "/images/contact.jpeg",
            title: "Contact",
            href: "",
         },
         {
            thumbnail: "/images/size-guide.jpeg",
            title: "Size Guide",
            href: "",
         },
         {
            thumbnail: "/images/404.jpeg",
            title: "404",
            href: "",
         },
      ],
   },
   {
      id: "portfolio",
      cards: [
         {
            thumbnail: "/images/Portfolio_3.jpeg",
            title: "Portfolio 2 Columns",
            href: "",
         },
         {
            thumbnail: "/images/Portfolio_4.jpeg",
            title: "Portfolio 3 Columns",
            href: "",
         },
         {
            thumbnail: "/images/Portfolio_2.jpeg",
            title: "Portfolio 4 Columns",
            href: "",
         },
         {
            thumbnail: "/images/portfolio-shop.jpeg",
            title: "Single Portfolio With Shop",
            href: "",
         },
      ],
   },
   {
      id: "shop-page",
      cards: [
         {
            thumbnail: "/images/shop-grid.jpeg",
            title: "Shop Grid Layout",
            href: "",
         },
         {
            thumbnail: "/images/shop-masonry.jpeg",
            title: "Shop Masonry Layout",
            href: "",
         },
         {
            thumbnail: "/images/shop-metro.jpeg",
            title: "Shop Packery Layout",
            href: "",
         },
         {
            thumbnail: "/images/shop-right.jpeg",
            title: "Shop Right Sidebar",
            href: "",
         },
         {
            thumbnail: "/images/shop-metro.jpeg",
            title: "Shop Packery Layout",
            href: "",
         },
         {
            thumbnail: "/images/shop-right.jpeg",
            title: "Shop Right Sidebar",
            href: "",
         },
         {
            thumbnail: "/images/shop-metro.jpeg",
            title: "Shop Packery Layout",
            href: "",
         },
         {
            thumbnail: "/images/shop-right.jpeg",
            title: "Shop Right Sidebar",
            href: "",
         },
         {
            thumbnail: "/images/Sub_collections.jpeg",
            title: "Sub Collection",
            href: "",
         },
      ],
   },
   {
      id: "blog-page",
      cards: [
         {
            thumbnail: "/images/blog-grid.jpeg",
            title: "Blog Grid",
            href: "",
         },
         {
            thumbnail: "/images/blog-masonry.jpeg",
            title: "Blog Masonry",
            href: "",
         },
         {
            thumbnail: "/images/blog-left.jpeg",
            title: "Blog Left Sidebar",
            href: "",
         },
         {
            thumbnail: "/images/single-post-width-product.jpeg",
            title: "Single Post With Product Listing",
            href: "",
         },
         {
            thumbnail: "/images/blog-masonry.jpeg",
            title: "Blog Masonry",
            href: "",
         },
         {
            thumbnail: "/images/blog-left.jpeg",
            title: "Blog Left Sidebar",
            href: "",
         },
         {
            thumbnail: "/images/single-post-width-product.jpeg",
            title: "Single Post With Product Listing",
            href: "",
         },
         {
            thumbnail: "/images/blog_product_list.jpeg",
            title: "Single Post With Categories",
            href: "",
         },
      ],
   },
];

function PagesGroup() {
   const [tab, setTab] = React.useState(0);

   return (
      <section>
         <div className="container">
            <div className="max-w-[1700px] mx-auto mb-20 sm:mb-24 md:mb-32 lg:mb-40 xl:mb-48 2xl:mb-56">
               <div className="flex xl:flex-row flex-col gap-7 justify-between">
                  <div className="xl:w-[30%] md:flex flex-row xl:flex-col gap-6 overflow-x-scroll lg:overflow-clip pb-4 hidden">
                     {pagesItems.map(({name, path}, index) => (
                        <Link
                           href={path}
                           key={index}
                           className="flex-shrink-0"
                           onClick={() => setTab(index)}
                        >
                           <h2
                              className={`text-lenear 4xl:text-13xl 2xl:text-10xl xl:text-8xl text-4xl leading-[1.1] font-medium tracking-[-1.28px] inline-block cursor-pointer ${
                                 tab === index ? "bg-one-stop" : "bg-black-gray"
                              }`}
                           >
                              {name}
                              <p
                                 className={`${
                                    tab === index ? "opacity-100" : "opacity-0"
                                 }`}
                              >
                                 <img
                                    className="w-full"
                                    src="/images/smallunderline.svg"
                                    alt=""
                                 />
                              </p>
                           </h2>
                        </Link>
                     ))}
                  </div>
                  <div className="xl:w-[65%]">
                     <div className="bg-primary-pink-gradient z-0 relative h-full rounded-3xl border-x-2 border-transparent overflow-hidden">
                        <div className="absolute top-0 z-10 w-full">
                           <img src="/images/pages_bg.svg" alt="" />
                        </div>
                        <div className="md:px-8 pt-0 lg:max-h-[915px] max-h-[700px] overflow-hidden overflow-y-scroll scroll-smooth bg-black -mr-8 rounded-3xl relative mt-0.5 w-full md:w-auto">
                           <span className="w-full h-8 bg-black block sticky top-0 z-50" />
                           <div className="flex flex-col gap-6 relative z-40">
                              {pagesCards.map(({cards, id}, index) => (
                                 <div
                                    key={index}
                                    id={id}
                                    className="grid md:grid-cols-2 gap-x-6 md:gap-y-10 gap-y-6"
                                 >
                                    {cards.map(
                                       ({thumbnail, title, href}, index) => (
                                          <Link
                                             key={index}
                                             href={href}
                                             id={id}
                                             className="px-4 pt-4 border-t border-x border-slate-800 rounded-2xl"
                                          >
                                             <div className="flex gap-1 mb-3">
                                                {[...Array(3)].map(
                                                   (_, index) => (
                                                      <span
                                                         className="w-1.5 aspect-square bg-gray-200 rounded-full opacity-30"
                                                         key={index}
                                                      ></span>
                                                   )
                                                )}
                                             </div>
                                             <img
                                                className="w-full rounded-lg mb-6"
                                                src={thumbnail}
                                                alt=""
                                             />
                                             <h3 className="text-white text-base font-medium text-center hover:text-primary duration-300">
                                                {title}
                                             </h3>
                                          </Link>
                                       )
                                    )}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default PagesGroup;

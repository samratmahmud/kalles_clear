"use client";
import Buttons from "@/components/common/Buttons";
import React, {useState} from "react";

const dealsitem = [
   {
      icon: "/images/1 (4).png",
      name: "EComposer Page Builder - Free Partner Plan (save $150/year)",
      dealCrad: [
         {
            thumbnail:
               "https://themes.the4.co/kalles-5/assets/images/partner/1.webp",
            Title: "EComposer Page Builder - Free Standard Plan 6 Months (Save $114)",
            describtion: `Build any page type or section with
            intuitive drag-drop editor. 300+
            templates available and 20+ boost
            sales extensions.`,
            list: [
               <>
                  <strong>How to redeem:</strong> Buy Kalles then install
                  EComposer and chat with in-app support mention your offer.
               </>,
               "Who to apply: Only new users",
            ],
         },
      ],
   },
   {
      icon: "/images/2 (3).png",
      name: "Shopify 45-days free trial.",
      dealCrad: [
         {
            thumbnail:
               "https://themes.the4.co/kalles-5/assets/images/partner/6.webp",
            Title: "Sign up Shopify for only $1 in 3 months",
            describtion: `As a Shopify commerce coach, The4 invites you to create new Shopify account with the exclusive offer. Limited time & slots only so hurry up!

            `,
         },
      ],
   },
   {
      icon: "/images/3 (1).png",
      name: "The4 - Get 7% cashback to your PayPal",
      dealCrad: [
         {
            thumbnail:
               "https://themes.the4.co/kalles-5/assets/images/partner/2.webp",
            Title: "The4 - Get 7% cashback to your PayPal",
            describtion: `The4 premium themes are used by 40k Shopify merchants, rated 5.0/5 over 3000 reviews.`,
            list: [
               <>
                  <strong>How to claim:</strong> Users buy from 7 licenses of
                  any The4 theme can get 7% cashback, contact
                  the4studio.net@gmail.com to claim deal.
               </>,
               "Who to apply: Current and new users",
            ],
         },
      ],
   },
   {
      icon: "https://themes.the4.co/kalles-5/assets/images/partner/icon/7.webp",
      name: "Fontify: Google & Custom Fonts",
      dealCrad: [
         {
            thumbnail:
               "https://themes.the4.co/kalles-5/assets/images/partner/7.webp",
            Title: "Fontify- Free upload 15 first custom fonts",
            describtion: `The most popular font changer for Shopify store (change any Goolge & Custom fonts)`,
            list: [
               <>
                  <strong>How to redeem:</strong> Install Fontify and chat with
                  support mention Fontify+Kalles to redeem your offer
               </>,
               "Who to apply: New users only",
            ],
         },
      ],
   },
   {
      icon: "	https://themes.the4.co/kalles-5/assets/images/partner/icon/8.webp",
      name: "Avada Trust Badges Sale Pop‑up",
      dealCrad: [
         {
            thumbnail:
               "https://themes.the4.co/kalles-5/assets/images/partner/8.webp",
            Title: "AVADA Marketing automation - 20% in First 2 months all paid plans",
            describtion: `Marketing Automation in multi-channels: email, SMS, WhatsApp, web push. Reach your customers personally and make them happy to buy with appealing follow-up messages.`,
            list: [
               <>
                  <strong>How to redeem:</strong> Use code THE420 at
                  subscription page
               </>,
               "Who to apply: New shops only (shops that never upgrade before)",
            ],
         },
      ],
   },
   {
      icon: "/images/6 (1).png",
      name: "FlashSearch - Get 20% OFF on all Paid plans",
      dealCrad: [
         {
            thumbnail:
               "https://themes.the4.co/kalles-5/assets/images/partner/5.webp",
            Title: "FlashSearch - Get 20% OFF on all Paid plans",
            describtion: `FlashSearch helps you optimize and increase user experience by quickly searching for products that match your keywords or sometimes those products are prioritized by yourself.`,
            list: [
               <>
                  <strong>How to redeem:</strong> Just click to the link below.
               </>,
               "Who to apply: New users",
            ],
         },
      ],
   },
];

function ExclusiveDeals() {
   const [tab, setTab] = useState(0);
   return (
      <section>
         <div className="container">
            <div className="max-w-[1600px] mx-auto 2xl:mb-32 xl:mb-24 lg:mb-20 md:mb-16 mb-10">
               <div className="2xl:bg-features-build w-full 2xl:rounded-t-3xl 2xl:border-t 2xl:border-x-2 border-transparent">
                  <div className="3xl:p-12 2xl:p-5 2xl:mt-0.5 bg-black rounded-t-3xl">
                     <div className="flex xl:flex-row flex-col-reverse justify-between gap-5 bg-demos-card p-4 rounded-2xl">
                        <div className="w-full xl:max-w-[600px]">
                           {dealsitem[tab].dealCrad?.map(
                              (
                                 {thumbnail, Title, describtion, list}: any,
                                 index
                              ) => (
                                 <div key={index} className="">
                                    <div data-aos="zoom-in" className="mb-6">
                                       <img
                                          className="rounded-xl xl:max-h-[338px] w-full"
                                          src={thumbnail}
                                          alt=""
                                       />
                                    </div>
                                    <h3
                                       data-aos="fade-down-left"
                                       className="md:text-3xl text-lg font-medium mb-4 text-white md:px-4 px-1.5"
                                    >
                                       {Title}
                                    </h3>
                                    <div
                                       data-aos="fade-up"
                                       className="md:px-4 px-1.5 lg:mb-10 md:mb-8 mb-5"
                                    >
                                       <p className="mb-4 text-md md:text-base">
                                          {describtion}
                                       </p>
                                       {list && (
                                          <ul
                                             data-aos="fade-up"
                                             className="flex flex-col gap-3 list-disc pl-4"
                                          >
                                             {list.map(
                                                (item: any, index: number) => (
                                                   <li
                                                      key={index}
                                                      className="text-md md:text-base"
                                                   >
                                                      {item}
                                                   </li>
                                                )
                                             )}
                                          </ul>
                                       )}
                                    </div>
                                    <div className="flex items-center gap-6 px-4">
                                       <div data-aos="fade-down-right">
                                          <Buttons
                                             href="/"
                                             name="Claim Your Deal"
                                             target="_blank"
                                          />
                                       </div>
                                       <div data-aos="fade-up-left">
                                          <Buttons
                                             href="/"
                                             name="Buy Kalles Now"
                                             varient="outlined"
                                             target="_blank"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              )
                           )}
                        </div>
                        <div className="xl:max-w-[720px] w-full xl:mt-10 mt-5">
                           <h2 className="text-xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-10xl tracking-[-0.96px] font-medium text-white lg:max-w-[440px] text-center lg:text-left mb-10">
                              Exclusive deals from{" "}
                              <span className="bg-one-stop text-lenear">
                                 our partners
                              </span>
                           </h2>
                           <div className="xl:grid 2xl:grid-cols-2 flex flex-wrap justify-center xl:gap-6 gap-4">
                              {dealsitem.map(({icon, name}, index) => (
                                 <div
                                    key={index}
                                    onClick={() => setTab(index)}
                                    className={`flex gap-6 items-center 3xl:p-6 2xl:p-5 p-4 rounded-3xl cursor-pointer max-w-[307px] 2xl:max-w-none hover:bg-exclusive-tab duration-300 ${
                                       index === tab ? "bg-exclusive-tab" : ""
                                    }`}
                                 >
                                    <img
                                       className="max-w-16 rounded-xl"
                                       src={icon}
                                       alt=""
                                    />
                                    <p className="2xl:text-base text-md text-white leading-[1.4] !tracking-[0.09px] hidden xl:block">
                                       {name}
                                    </p>
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

export default ExclusiveDeals;

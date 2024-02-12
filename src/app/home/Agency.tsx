"use client";
import AgencyItem from "@/components/template/AgencyItem";
import Link from "next/link";
import React from "react";

const agencyBtn = [
   {
      name: "Chris Foster",
      agencyTitle: [
         {
            thumbanil: "/images/1.2.jpeg",
            title: (
               <>
                  "I absolutely love it. There are so many things{" "}
                  <br className="hidden xl:block" /> you can do with Gecko
                  theme. It's really quite unbelievable."
               </>
            ),
         },
      ],
   },
   {
      name: "Tyler Wisniewski",
      nameS: ". Ceo of Yoga Junkie Fitness",
      agencyTitle: [
         {
            thumbanil: "/images/1 (2).jpeg",
            title: (
               <>
                  "Kalles by The4 helps you create a beautiful{" "}
                  <br className="hidden xl:block" /> website. Plus, their
                  amazing support team is with{" "}
                  <br className="hidden xl:block" /> you every step of the way"
               </>
            ),
         },
      ],
   },
   {
      name: "Cristian Batrincea",
      nameS: ". Founder of Creative Agency",
      agencyTitle: [
         {
            thumbanil: "/images/3 (2).jpeg",
            title: (
               <>
                  "I am impressed with the loading speed of The4 theme,{" "}
                  <br className="hidden xl:block" /> it is faster than some
                  previous ones I've use."
               </>
            ),
         },
      ],
   },
];

function Agency() {
   const [tab, setTab] = React.useState(0);
   return (
      <section>
         <div className="container">
            <div className="max-w-[1240px] mx-auto bg-commerce-bg rounded-3xl 3xl:mb-60 2xl:mb-48 xl:mb-40 lg:mb-32 md:mb-24 sm:mb-20 mb-16">
               <div className="lg:py-20 md:p-11 py-10 px-4 flex flex-col items-center">
                  <div>
                     {agencyBtn[tab].agencyTitle?.map(
                        ({thumbanil, title}, index) => (
                           <div
                              key={index}
                              className="flex flex-col items-center"
                           >
                              <div className="lg:mb-10 md:mb-8 mb-5">
                                 <img
                                    data-aos="fade-up"
                                    className="rounded-full w-16 aspect-square md:w-20"
                                    src={thumbanil}
                                    alt=""
                                 />
                              </div>
                              <h2
                                 data-aos="fade-up"
                                 data-aos-delay="150"
                                 className="xl:text-5xl lg:text-4xl md:text-3xl text-base font-medium text-white max-w-[950px]  text-center tracking-normal xl:mb-14 lg:mb-11 md:mb-9 mb-7"
                              >
                                 {title}
                              </h2>
                           </div>
                        )
                     )}
                  </div>
                  <div className="flex flex-wrap justify-center gap-6">
                     {agencyBtn.map(({name, nameS}, index) => (
                        <AgencyItem
                           name={name}
                           nameS={nameS}
                           key={index}
                           isActive={tab === index}
                           handelChange={() => setTab(index)}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Agency;

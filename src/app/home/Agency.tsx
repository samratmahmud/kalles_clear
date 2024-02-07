"use client";
import Link from "next/link";
import React from "react";

const agencyBtn = [
   {
      name: "Chris Foster",
      path: "/",
   },
   {
      name: "Tyler Wisniewski",
      nameS: ". Ceo of Yoga Junkie Fitness",
      path: "/",
   },
];

function Agency() {
   const [open, setOpen] = React.useState(false);
   return (
      <section>
         <div className="container">
            <div className="max-w-[1240px] mx-auto bg-commerce-bg rounded-3xl 3xl:mb-80 2xl:mb-64 xl:mb-48 lg:mb-36 md:mb-24 sm:mb-20 mb-16">
               <div className="lg:py-20 md:p-12 py-10 px-4 flex flex-col items-center">
                  <div className="lg:mb-10 md:mb-8 mb-5">
                     <img
                        data-aos="fade-up"
                        className="rounded-full w-16 aspect-square md:w-20"
                        src="/images/1 (2).jpeg"
                        alt=""
                     />
                  </div>
                  <h2
                     data-aos="fade-up"
                     data-aos-delay="150"
                     className="lg:text-5xl md:text-3xl text-base font-medium text-white max-w-[800px] text-center xl:mb-14 lg:mb-11 md:mb-9 mb-7"
                  >
                     "Kalles by The4 helps you create a beautiful website. Plus,
                     their amazing support team is with you every step of the
                     way"
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6">
                     {agencyBtn.map(({name, nameS, path}, index) => (
                        <Link
                           href={path}
                           key={index}
                           data-aos="fade-up"
                           data-aos-delay={index * 200}
                           className="relative inline-block overflow-hidden rounded-lg bg-slate-600/30 border border-white/20 cursor-pointer group"
                        >
                           <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
                           <p className="py-2.5 px-4 hover:text-white duration-300 font-medium flex gap-1">
                              {name}
                              <span className="hidden lg:block">{nameS}</span>
                           </p>
                        </Link>
                     ))}
                     <Link
                        data-aos="fade-up"
                        data-aos-delay="500"
                        href="/"
                        className={`relative inline-block overflow-hidden rounded-lg bg-slate-600/30 border border-white/20 cursor-pointer group whitespace-nowrap`}
                     >
                        <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
                        <p
                           onMouseEnter={() => setOpen(true)}
                           onMouseLeave={() => setOpen(false)}
                           className={`py-2.5 px-4 font-medium duration-500 ease-linear flex gap-1 ${
                              !open
                                 ? "max-w-[180px]"
                                 : "xl:max-w-[500px] max-w-[180px] text-white"
                           }`}
                        >
                           Cristian Batrincea{" "}
                           <span className="hidden xl:block">
                              <span>.</span> Founder of Creative Agency
                           </span>
                        </p>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Agency;

// "use client";
// import Link from "next/link";
// import React from "react";

// const agencyBtn = [
//    {
//       name: "Chris Foster",
//       path: "/",
//    },
//    {
//       name: "Tyler Wisniewski . Ceo of Yoga Junkie Fitness",
//       path: "/",
//    },
//    {
//       name: "Cristian Batrincea . Founder of Creative Agency",
//       path: "/",
//    },
// ];

// function Agency() {
//    const [open, setOpen] = React.useState(false);

//    return (
//       <section>
//          <div className="container">
//             <div className="max-w-[1240px] mx-auto bg-commerce-bg rounded-3xl">
//                <div className="py-20 flex flex-col items-center">
//                   <div className="mb-10">
//                      <img
//                         className="rounded-full"
//                         src="/images/1 (2).jpeg"
//                         alt=""
//                      />
//                   </div>
//                   <h2 className="text-5xl font-medium text-white max-w-[800px] text-center mb-14">
//                      "Kalles by The4 helps you create a beautiful website. Plus,
//                      their amazing support team is with you every step of the
//                      way"
//                   </h2>
//                   <div className="flex gap-4">
//                      {agencyBtn.map(({name, path}, index) => (
//                         <Link
//                            href={path}
//                            key={index}
//                            onMouseEnter={() => setOpen(true)}
//                            onMouseOut={() => setOpen(false)}
//                            className={`relative inline-block overflow-hidden rounded-lg bg-slate-600/30 border border-white/20 cursor-pointer group whitespace-nowrap duration-500 ${
//                               !open && index
//                                  ? "last:max-w-[180px] last:outline"
//                                  : "last:max-w-[500px]"
//                            }`}
//                         >
//                            <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
//                            <p
//                               className={`py-2.5 px-4 text-base font-medium text-white group-first:text-slate-300/50 group-last:text-slate-300/50`}
//                            >
//                               {name}
//                            </p>
//                         </Link>
//                      ))}
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// }

// export default Agency;

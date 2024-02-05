"use client";
import React from "react";

function Agency() {
   const [open, setOpen] = React.useState(false);
   return (
      <section>
         <div className="container">
            <div className="max-w-[1240px] mx-auto bg-commerce-bg rounded-3xl mb-80">
               <div className="py-20 flex flex-col items-center">
                  <div className="mb-10">
                     <img
                        className="rounded-full"
                        src="/images/1 (2).jpeg"
                        alt=""
                     />
                  </div>
                  <h2 className="text-5xl font-medium text-white max-w-[800px] text-center mb-14">
                     "Kalles by The4 helps you create a beautiful website. Plus,
                     their amazing support team is with you every step of the
                     way"
                  </h2>
                  <div className="flex gap-6">
                     <div className="relative inline-block overflow-hidden rounded-lg bg-slate-600/30 border border-white/20 cursor-pointer">
                        <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
                        <p className="py-2.5 px-4 text-base font-medium">
                           Chris Foster
                        </p>
                     </div>
                     <div className="relative inline-block overflow-hidden rounded-lg bg-slate-600/30 border border-white/20 cursor-pointer">
                        <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
                        <p className="py-2.5 px-4 text-base font-medium text-white">
                           Tyler Wisniewski . Ceo of Yoga Junkie Fitness
                        </p>
                     </div>
                     <div
                        className={`relative inline-block overflow-hidden rounded-lg bg-slate-600/30 border border-white/20 cursor-pointer group whitespace-nowrap`}
                     >
                        <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
                        <p
                           onMouseEnter={() => setOpen(true)}
                           onMouseLeave={() => setOpen(false)}
                           className={`py-2.5 px-4 text-base font-medium overflow-hidden duration-500 ${
                              !open ? "max-w-[180px]" : "max-w-[500px]"
                           }`}
                        >
                           Cristian Batrincea . Founder of Creative Agency
                        </p>
                     </div>
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

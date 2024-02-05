import React from "react";

const demoVideo = [
   {
      title: "Menu Mobile",
      video: "/images/menu_mobile.mp4",
   },
   {
      title: "Filters Collection",
      video: "/images/filters.mp4",
   },
   {
      title: "Add to cart",
      video: "/images/atc.mp4",
   },
   {
      title: "Check out",
      video: "/images/checkout.mp4",
   },
];

function Experience() {
   return (
      <section>
         <div className="container">
            <div className="max-w-[1700px] mx-auto relative mb-32">
               <span className="bg-one-stop max-w-[440px] w-full aspect-square absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 blur-[220px] rounded-full" />
               <div className="flex flex-col items-center mb-14">
                  <h3 className="text-5xl font-medium text-lenear bg-one-stop mb-3">
                     Ensure your website
                  </h3>
                  <h2 className="text-16xl font-medium tracking-[-2.4px] text-white mb-10">
                     with Mobile-first Experience
                  </h2>
                  <p className="text-center text-md md:text-base">
                     Responsive on all devices and specially optimized for
                     mobile. <br />
                     Convert 80% of mobile visitors into customers with Kalles
                     smooth designs.
                  </p>
               </div>
               <div className="flex justify-between gap-3">
                  {demoVideo.map(({title, video}, index) => (
                     <div key={index} className="w-[calc(25%-12px)]">
                        <div className="bg-exclusive-tab border-2 border-transparent rounded-2xl mb-4">
                           <video
                              className="w-full bg-video-bg p-4 rounded-2xl  relative z-10"
                              src={video}
                              autoPlay
                           />
                        </div>
                        <div className="text-xl font-medium text-white text-center leading-[1.4]">
                           {title}
                        </div>
                     </div>
                  ))}
               </div>
               <div></div>
            </div>
         </div>
      </section>
   );
}

export default Experience;

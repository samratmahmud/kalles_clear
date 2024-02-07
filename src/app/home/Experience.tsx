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
            <div className="max-w-[1700px] mx-auto relative 2xl:mb-32 xl:mb-24 lg:mb-20 md:mb-14 mb-10">
               <span className="bg-one-stop max-w-[440px] w-full aspect-square absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 blur-[220px] rounded-full" />
               <div className="flex flex-col items-center mb-7 md:mb-10 lg:mb-12 xl:mb-14">
                  <h3
                     data-aos="fade-up"
                     className="2xl:text-5xl lg:text-3xl sm:text-xl text-md font-medium text-lenear bg-one-stop mb-3"
                  >
                     Ensure your website
                  </h3>
                  <h2
                     data-aos="fade-up"
                     data-aos-delay="100"
                     className="text-3xl sm:text-8xl md:text-10xl lg:text-12xl xl:text-13xl 2xl:text-16xl font-medium md:!tracking-[-2.4px] text-center text-white xl:mb-10 lg:mb-8 md:mb-6 mb-3"
                  >
                     with Mobile-first Experience
                  </h2>
                  <p
                     data-aos="fade-up"
                     data-aos-delay="200"
                     className="text-center text-md md:text-base"
                  >
                     Responsive on all devices and specially optimized for
                     mobile. <br className="hidden lg:block" />
                     Convert 80% of mobile visitors into customers with Kalles
                     smooth designs.
                  </p>
               </div>
               <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                  {demoVideo.map(({title, video}, index) => (
                     <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="lg:w-[calc(25%-12px)"
                     >
                        <div className="bg-exclusive-tab border-2 border-transparent rounded-2xl mb-4">
                           <video
                              className="w-full bg-video-bg p-4 rounded-2xl  relative z-10"
                              src={video}
                              autoPlay
                           />
                        </div>
                        <div className="lg:text-xl sm:text-base text-md font-medium text-white text-center leading-[1.4]">
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

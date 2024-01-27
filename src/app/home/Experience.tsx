import Link from "next/link";
import React from "react";

function Experience() {
   return (
      <section>
         <div className="container relative">
            <span className="bg-one-stop max-w-[440px] w-full aspect-square absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 blur-[220px] rounded-full" />
            <div className="flex flex-col items-center mb-14">
               <h3 className="text-5xl font-medium text-lenear bg-one-stop mb-3">
                  Ensure your website
               </h3>
               <h2 className="text-16xl font-medium tracking-[-2.4px] text-white mb-10">
                  with Mobile-first Experience
               </h2>
               <p className="text-center">
                  Responsive on all devices and specially optimized for mobile.{" "}
                  <br />
                  Convert 80% of mobile visitors into customers with Kalles
                  smooth designs.
               </p>
            </div>
            <div></div>
         </div>
      </section>
   );
}

export default Experience;
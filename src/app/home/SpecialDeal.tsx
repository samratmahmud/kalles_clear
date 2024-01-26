import Buttons from "@/components/common/Buttons";
import React from "react";

function SpecialDeal() {
   return (
      <section>
         <div className="container mb-36">
            <div>
               <h2 className="text-10xl leading-[1.2] tracking-normal text-white font-medium mb-6">
                  Buy Kalles to{" "}
                  <span className="text-lenear bg-newP relative">
                     get{" "}
                     <span className="w-full h-[3px] bg-newP absolute bottom-2 left-0 inline-block" />
                  </span>{" "}
                  <br />
                  <p className="text-lenear bg-one-stop inline relative">
                     EComposer Partner Plan
                     <span className="w-full h-0.5 bg-one-stop absolute bottom-2 left-0" />
                  </p>{" "}
                  <br />
                  (6 months Free, Save $114)
               </h2>
               <p className="mb-14">
                  EComposer is the top rated Shopify Page Builder which is fully
                  integrated with Kalles. Want to design your pages with a
                  powerful drag-drop editor?
               </p>
               <div className="flex gap-6">
                  <Buttons
                     href="/"
                     name="Try Live Demo"
                     icon="/images/icons8-trolley-64.png"
                  />
                  <Buttons
                     href="/"
                     name="Install EComposer Free"
                     icon="/images/icons8-pallet-50.png"
                     varient="outlined"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default SpecialDeal;

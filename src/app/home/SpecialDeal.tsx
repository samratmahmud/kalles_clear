import Buttons from "@/components/common/Buttons";
import React from "react";

function SpecialDeal() {
   return (
      <section>
         <div id="specialDeal" className="max-w-[1700px] mx-auto">
            <div className="grid xl:grid-cols-2 gap-6 mb-44 relative z-0">
               <span className="bg-primary max-w-[432px] aspect-square w-full absolute top-[70%] left-[35%] rounded-full -z-10 blur-[300px]" />
               <div className="pl-[7%] mt-10">
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
                  <p className="mb-14 max-w-[650px]">
                     EComposer is the top rated Shopify Page Builder which is
                     fully integrated with Kalles. Want to design your pages
                     with a powerful drag-drop editor?
                  </p>
                  <div className="flex gap-6 mb-14">
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
                  <div className="bg-gray-black border border-transparent rounded-2xl max-w-[455px]">
                     <div className="flex items-center gap-6 p-6 bg-black rounded-2xl">
                        <img
                           className="w-6 h-6"
                           src="/images/icons8-pallet-50.png"
                           alt=""
                        />
                        <div className="text-md tracking-normal">
                           <span className="text-white">How to claim:</span> Buy
                           Kalles &gt; Install EComposer <br /> then chat with
                           support in-app to claim your deal.
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <img src="/images/1 (2).png" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default SpecialDeal;

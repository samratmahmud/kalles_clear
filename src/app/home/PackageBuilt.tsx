import React from "react";

const builsPackages = [
   {
      title: "Shopify Features",
      content: [
         "Bundles & Discounts",
         "Smart Product Filters",
         "Advanced Mega Menu",
         "Cart drawer with free shipping goal",
         "Frequently Bought Together",
         "In-cart recommendations",
         "Video Thumbnail & 3D",
         "Countdown Timer",
         "Trust Badges",
         "Sales Popup",
         "Sticky Add To Cart",
         "Mobile Bottom Navigation",
         "Stunning Lookbook",
         "Quickview",
         "Compare, Wishlist",
         "Exit Intent Popup",
         "Inactive Tab & Cart Count",
         "Store Location Page",
         "Multiple Currencies & Languages",
         "Size Chart",
         "Back to stock notification",
         "AJAX Infinite Loading",
         "Pickup Availability",
         "Pre Orde",
      ],
   },
   {
      title: "Shopify App Cost",
      content: [
         "$180",
         "$240",
         "$120",
         "$200",
         "$150",
         "$144",
         "$120",
         "$84",
         "$25",
         "$79",
         "$45",
         "$30",
         "$160",
         "$79",
         "$80",
         "$180",
         "$50",
         "$39",
         "$79",
         "$69",
         "$90",
         "$30",
         "$30",
         "$45",
      ],
   },
   {
      title: "Conversion Increase",
      content: [
         "0.7%",
         "0.3%",
         "0.35%",
         "0.4%",
         "0.65%",
         "0.57%",
         "0.2%",
         "0.55%",
         "0.19%",
         "0.27%",
         "0.3%",
         "0.24%",
         "0.2%",
         "0.%",
         "0.5%",
         "0.4%",
         "0.45%",
         "0.32%",
         "0.12%",
         "0.41%",
         "0.21%",
         "0.23%",
         "0.12%",
         "0.21%",
      ],
   },
   {
      title: "Kalles",
      className: "text-lenear bg-free",
      content: [
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
         "Free",
      ],
   },
];

function PackageBuilt() {
   return (
      <section>
         <div className="container mb-40">
            <div className="flex flex-col items-center justify-center">
               <h3 className="text-5xl font-medium text-lenear bg-one-stop text-center mb-3">
                  Save $2369 per year
               </h3>
               <h2 className="text-16xl font-medium text-center text-white mb-16">
                  with Kalles built-in features
               </h2>
            </div>
            <div className="bg-features-build rounded-t-3xl w-full border-t border-transparent">
               <div className="bg-black rounded-t-3xl px-12 pt-12 mx-[1px] mt-[2px]">
                  <div className="grid grid-cols-4">
                     {builsPackages.map(
                        ({title, content, className}, index) => (
                           <div key={index} className="group">
                              <div className="mb-12 flex justify-center">
                                 <thead className="text-3xl font-medium text-white pb-12">
                                    {title}
                                 </thead>
                              </div>
                              <tr className="flex flex-col group-even:bg-gray-800 rounded-2xl py-8">
                                 {content.map((items, index) => (
                                    <td className="py-6 border-b border-gray-400/20 last:border-b-0 flex flex-col items-center justify-center  group-first:items-start mx-8 h-[86px]">
                                       <span
                                          key={index}
                                          className={`text-gray-400 group-first:text-white ${className}`}
                                       >
                                          {items}
                                       </span>
                                    </td>
                                 ))}
                              </tr>
                           </div>
                        )
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default PackageBuilt;

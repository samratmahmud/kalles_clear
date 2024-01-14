"use client";
import React from "react";

const demosItems = [
  {name: "All Demos"},
  {name: "Fashion", icon: "/images/icons8-fashion-24.png"},
  {name: "Furniture", icon: "/images/icons8-furniture-50.png"},
  {name: "Electronics", icon: "/images/icons8-electronic-50.png"},
  {name: "Jewelry", icon: "/images/"},
  {name: "Kids", icon: "/images/"},
  {name: "Sports", icon: "/images/"},
  {name: "More", icon: "/images/"},
];

function Demos() {
  const [tab, setTab] = React.useState(0);

  return (
    <section>
      <div className="container-width">
        <h2 className="text-white font-medium flex items-center gap-8 justify-center mb-10">
          <span className="text-18xl text-lenear bg-50+ inline-block leading-[1]">
            50+
          </span>
          <span className="text-15xl">Stunning Demos</span>
        </h2>
        <p className="text-center mb-16">
          All home pages, inner pages and elements are included with the
          purchase. Mix and blend elements from <br /> different demos as per
          your preference and create awesome store with Kalles!
        </p>
        <div className="flex justify-center gap-4 mb-16 relative z-0">
          <div className="min-h-[100px] w-full bg-primary absolute -top-5 blur-[200px] -z-10" />
          {demosItems.map(({name, icon}, index) => (
            <div
              key={index}
              onClick={() => setTab(index)}
              className={`cursor-pointer border py-[9px] px-4 bg-gray-600/30 rounded-lg hover:text-primary duration-300 flex items-center gap-3 ${
                tab === index
                  ? "border-primary text-white"
                  : "border-gray-300/10"
              }`}
            >
              {icon && <img className="w-4 aspect-square" src={icon} alt="" />}
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Demos;

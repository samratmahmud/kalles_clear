"use client";
import Buttons from "@/components/common/Buttons";
import React from "react";

const demosItems = [
  {
    name: "All Demos",
    card: [
      {
        title: "Home Fashion Default",
        thumbnail: "/images/home-default.jpeg",
        path: "",
        hot: "Hot",
      },
      {
        title: "Nutri-Vitamin",
        thumbnail: "/images/home-nutri-vitamin.jpeg",
        path: "",
        newP: "New",
      },
      {
        title: "Home Handmade 2",
        thumbnail: "/images/landing-handmade2.jpeg",
        path: "",
      },
      {
        title: "Home Pets",
        thumbnail: "/images/home-pets.png",
        path: "",
      },
      {
        title: "Home Tee Store",
        thumbnail: "/images/home-tee (1).jpeg",
        path: "",
      },
      {
        title: "Home Fashion 15",
        thumbnail: "/images/home-fashion-15 (1).png",
        path: "",
      },
      {
        title: "Home Classic",
        thumbnail: "/images/home-classic.jpeg",
        path: "",
        hot: "Hot",
      },
    ],
  },
  {
    name: "Fashion",
    icon: "/images/icons8-fashion-24.png",
    card: [
      {
        title: "Home Fashion Default",
        path: "",
        thumbnail: "/images/home-default.jpeg",
      },
      {
        path: "",
        thumbnail: "/images/home-tee.jpeg",
      },
      {
        path: "",
        thumbnail: "/images/home-fashion-15.png",
        hot: "Hot",
      },
      {
        path: "",
        thumbnail: "/images/home-fashion-15.png",
      },
      {
        path: "",
        thumbnail: "/images/home-fashion-15.png",
        newP: "New",
      },
    ],
  },
  {
    name: "Furniture",
    icon: "/images/icons8-furniture-50.png",
  },
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
        <div>
          <div className="flex justify-center gap-4 mb-16 relative z-0">
            <div className="min-h-[100px] w-full bg-primary absolute -top-10 blur-[180px] -z-10" />
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
                {icon && (
                  <img className="w-4 aspect-square" src={icon} alt="" />
                )}
                {name}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8">
            {demosItems[tab].card?.map(
              ({thumbnail, path, title, hot, newP}, index) => (
                <div key={index} className="bg-demos-card rounded-2xl p-4">
                  <div className="relative z-0 group mb-3.5 overflow-hidden">
                    <img
                      className="rounded-2xl w-full"
                      src={thumbnail}
                      alt=""
                    />
                    <div className="flex justify-center absolute z-20 left-0 right-0 bottom-14 duration-300 -translate-x-3/4 group-hover:translate-x-0">
                      <Buttons
                        size="small"
                        className="rounded-lg py-2.5"
                        href={path}
                        name="Demo"
                      />
                    </div>
                    <div
                      className="absolute z-10 inset-0 translate-y-[600px] group-hover:translate-y-0 duration-300"
                      style={{
                        backgroundImage:
                          "linear-gradient(179deg, rgba(24, 24, 24, 0.00) 44.58%, rgba(12, 12, 12, 0.53) 79.19%, #000 99.19%)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between gap-3 items-center">
                    <h3 className="text-white font-medium">{title}</h3>
                    {hot && (
                      <p className="text-sm font-medium py-0.5 px-2 rounded-full bg-newP text-white">
                        {hot}
                      </p>
                    )}
                    {newP && (
                      <p className="text-sm font-medium py-0.5 px-2 rounded-full bg-newP text-white">
                        {newP}
                      </p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demos;

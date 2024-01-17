import React from "react";

const featuresImagesGroup = [
  {
    title: "Smart Product Filters",
    thumbnail: "/images/item1 (1).png",
    describtiton:
      "Filtering products is fast, convenient  and smart by auto tags entry & multiple product attributes",
    className: "max-w-[300px] bottom-10 right-0",
    classNames: "col-span-5",
  },
  {
    title: "Pre-purchase upsell",
    thumbnail: "/images/item2 (1).png",
    describtiton:
      "Upsell and cross-sell easily on product pages with related items",
    className: "max-w-[300px] top-10 right-0",
    classNames: "col-span-7",
    size: [
      {
        colorBg: [
          {
            color: "bg-orange-300",
          },
          {
            color: "bg-blue-200",
          },
          {
            color: "bg-green-200",
          },
        ],
        sizes: [
          {
            sized: "xs",
          },
          {
            sized: "s",
          },
          {
            sized: "m",
            className: "text-primary",
          },
          {
            sized: "l",
          },
          {
            sized: "xl",
          },
        ],
      },
    ],
  },
  {
    title: "Product Variant Swatches",
    thumbnail: "/images/item3 (2).png",
    describtiton: `Swatch products with multiple attributes
      at once in products, collections,
      homepage, etc.`,
    className: "max-w-[300px] bottom-8 left-8",
    classNames: "col-span-4",
  },
  {
    title: "Cart Drawer With Free Shipping Goal",
    thumbnail: "/images/item4 (1).png",
    describtiton: `Improve shopping convenience & sales with
    mini cart showing free shipping notification,
      homepage, etc.`,
    className: "max-w-[300px] top-8 left-8",
    classNames: "col-span-4",
  },
  {
    title: "Frequently Bought Together",
    thumbnail: "/images/item5 (1).png",
    describtiton: `Encourage average order value by showing
    frequently bought together products,
      homepage, etc.`,
    className: "max-w-[300px] bottom-8 left-8",
    classNames: "col-span-4",
  },
];

function Features() {
  return (
    <section>
      <div className="container-width">
        <div className="flex gap-3 items-end justify-between mb-16">
          <div className="flex items-center gap-8">
            <img src="/images/features.svg" alt="" />
            <h2 className="text-10xl font-medium text-white">
              All{" "}
              <span className="text-lenear bg-one-stop underline relative">
                Boost Sales
                <span className="bg-one-stop h-0.5 w-full absolute bottom-2 left-0" />
              </span>{" "}
              Features
              <br /> in One Theme
            </h2>
          </div>
          <div className="text-xl ">
            Buy one, get all premium features to level up <br /> customer
            experience and rocket sales.
          </div>
        </div>
        <div className="grid grid-cols-12 gap-7">
          {featuresImagesGroup.map(
            (
              {title, thumbnail, describtiton, className, classNames, size},
              index
            ) => (
              <div key={index} className={`${classNames}`}>
                <div className="relative">
                  <img src={thumbnail} alt="" />
                  <div className={`absolute ${className}`}>
                    <h3 className="text-lg font-medium text-white mb-4">
                      {title}
                    </h3>
                    <p className="text-md tracking-normal">{describtiton}</p>
                    {size && (
                      <div className="py-5">
                        {size.map(({colorBg, sizes}, index) => (
                          <div key={index}>
                            <div className="flex gap-3 mb-3">
                              {colorBg.map(({color}) => (
                                <div
                                  key={index}
                                  className="first:border border-primary rounded-full p-1"
                                >
                                  <div
                                    className={`w-7 aspect-square ${color} rounded-full`}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-3">
                              {sizes.map(({sized, className}, index) => (
                                <div
                                  key={index}
                                  className={`text-sm uppercase ${className}`}
                                >
                                  {sized}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Features;

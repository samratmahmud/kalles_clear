import React from "react";

const featuresImagesGroup = [
  {
    title: "Smart Product Filters",
    thumbnail: "/images/item1 (1).png",
    describtiton: (
      <>
        Filtering products is fast, convenient <br /> and smart by auto tags
        entry & <br />
        multiple product attributes
      </>
    ),
    className: "bottom-14 right-[8%]",
    classNames: "col-span-5",
  },
  {
    title: "Pre-purchase upsell",
    thumbnail: "/images/item2 (1).png",
    describtiton: (
      <>
        Upsell and cross-sell easily on product <br /> pages with related items
      </>
    ),
    className: "top-11 right-[8%]",
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
    describtiton: (
      <>
        Swatch products with multiple attributes <br /> at once in products,
        collections, <br /> homepage, etc.
      </>
    ),
    className: "bottom-10 text-center left-0 right-0 w-full",
    classNames: "col-span-4",
  },
  {
    title: (
      <>
        Cart Drawer With <br /> Free Shipping Goal
      </>
    ),
    thumbnail: "/images/item4 (1).png",
    describtiton: (
      <>
        Improve shopping convenience & sales with <br /> mini cart showing free
        shipping notification
      </>
    ),
    className: "top-10 text-center left-0 right-0 w-full",
    classNames: "col-span-4",
  },
  {
    title: "Frequently Bought Together",
    thumbnail: "/images/item5 (1).png",
    describtiton: (
      <>
        Encourage average order value by showing <br /> frequently bought
        together products
      </>
    ),
    className: "bottom-8 text-center left-0 right-0 w-full",
    classNames: "col-span-4",
  },
  {
    title: "Video Thumbnail & 3D",
    thumbnail: "/images/item6.png",
    describtiton: (
      <>
        Stunning product multi-media such as video, 3D models <br /> improve
        conversion rate & reduce returns
      </>
    ),
    className: "bottom-10 left-12 w-full",
    classNames: "col-span-6",
  },
  {
    title: (
      <>
        <h3 className="text-8xl font-medium">
          Increase <br />
          <p className="text-lenear bg-one-stop inline-block">
            FOMO & Trust
          </p>{" "}
          <br /> For Any Single <br /> Product
        </h3>
      </>
    ),
    thumbnail: "/images/item7.png",
    className: "top-24 left-12 w-full",
    classNames: "col-span-6",
  },
  {
    title: "Sticky Add To Cart",
    thumbnail: "/images/item8.png",
    describtiton: (
      <>
        Persistent add-to-cart bar for easy and <br /> quick product purchase
      </>
    ),
    className: "top-12 text-center left-0 right-0 w-full",
    classNames: "col-span-7",
  },
  {
    title: "Pre Order",
    thumbnail: "/images/item9.png",
    describtiton: (
      <>
        Make it easier for customers to <br />
        pre-order your coming soon products
      </>
    ),
    className: "top-12 text-center left-0 right-0 w-full",
    classNames: "col-span-5",
  },
];

function Features() {
  return (
    <section id="features">
      <div className="container-width mb-[200px]">
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
              <div
                key={index}
                className={`relative group cursor-pointer ${classNames}`}
              >
                <img src={thumbnail} alt="" />
                <div className={`absolute  ${className}`}>
                  <div className="w-full">
                    <h3 className="text-3xl font-medium text-white mb-4">
                      {title}
                    </h3>
                    <p className="text-base tracking-normal">{describtiton}</p>
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
                <div className="absolute top-8 right-[8%] border border-gray-700 border-opacity-50 px-1 py-2 rounded-md opacity-0 group-hover:opacity-100 duration-300">
                  <img
                    className="w-6 h-4"
                    src="/images/icons8-arrow-right-50.png"
                    alt=""
                  />
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

import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

function PremiumFeatures() {
  return (
    <section className="mb-32">
      <div className="container-width">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="flex items-center gap-3 mb-6">
              <img src="/images/linearplus.svg" alt="" />
              <span className="text-xl font-medium bg-one-stop text-lenear">
                WHY CHOOSE KALLES?
              </span>
            </h3>
            <h2 className="text-10xl text-white font-medium mb-2">
              Stand Out From The Crowd <br /> With Premium Features
            </h2>
          </div>
          <p className="max-w-[432px] text-xl mb-4">
            Enjoy the exclusive features that make building your web pages a
            joyful moment. All in one theme!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-16">
          <div className="flex gap-7 py-20 pl-14 pr-10 bg-gray-800 rounded-2xl col-span-2 relative z-0 justify-between">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-one-stop max-w-[300px] aspect-square w-full rounded-full -z-10 blur-3xl" />
            <div>
              <div className="text-17xl font-medium text-lenear bg-50+ inline-block mt-5">
                50+
              </div>
              <h2 className="text-6xl text-white font-medium mb-12">
                High -quality <br /> demos
              </h2>
              <div className="flex">
                <Buttons
                  href="/"
                  name="Explore Demo"
                  icon="/images/icons8-menu-32.png"
                />
              </div>
            </div>
            <div>
              <img src="/images/item1.png" alt="" />
            </div>
          </div>
          <div
            className="bg-cover bg-center w-full bg-no-repeat relative rounded-2xl flex flex-col justify-end pb-14"
            style={{backgroundImage: "url(/images/item2.png)"}}
          >
            <div className="max-h-[50%] flex justify-center items-center absolute top-1/4 left-0 right-0">
              <img src="/images/item2_i.png" alt="" />
            </div>
            <div className="">
              <h2 className="text-center text-white text-3xl font-medium mb-10">
                Developed by Power Elite{" "}
                <span className="bg-one-stop text-lenear">Power Elite</span>{" "}
                <br /> on Envato Market
              </h2>
              <div className="flex gap-3 justify-center">
                <Buttons
                  href="/"
                  className="rounded-full"
                  size="small"
                  name="32.000+ Sales"
                  icon="/images/power.svg"
                />
                <Buttons
                  href="/"
                  className="rounded-full"
                  size="small"
                  name="5.0 Stars Ratings"
                  icon="/images/icons8-star-90.png"
                />
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="rounded-2xl bg-cover bg-no-repeat bg-center w-full flex flex-col justify-end min-h-[500px] p-14 relative group"
            style={{backgroundImage: "url(/images/item3.png)"}}
          >
            <div className="absolute top-10 right-10">
              <img
                className="w-4 opacity-0 group-hover:opacity-100 duration-300"
                src="/images/icons8-arrow-right-32.png"
                alt=""
              />
            </div>
            <p className="bg-one-stop text-lenear text-3xl font-medium inline-block">
              Supported by
            </p>
            <h2 className="text-6xl text-white font-medium mb-4">
              Commerce Coach{" "}
            </h2>
            <span>
              Server{" "}
              <span className="text-xl font-medium text-white">100k+</span>{" "}
              customers
            </span>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center p-14 relative group"
            style={{backgroundImage: "url(/images/item4.png)"}}
          >
            <div className="absolute top-10 right-10">
              <img
                className="w-4 opacity-0 group-hover:opacity-100 duration-300"
                src="/images/icons8-arrow-right-32.png"
                alt=""
              />
            </div>
            <h2 className="text-center text-3xl leading-[1.2] font-medium text-white">
              <span className="relative">
                One Click{" "}
                <span className="absolute -bottom-1 left-0">
                  <img src="/images/smallunderline.svg" alt="" />
                </span>
              </span>
              Import demo <br /> and more...
            </h2>
          </Link>
          <div
            className="flex flex-col justify-end items-center p-14"
            style={{backgroundImage: "url(/images/item5.png)"}}
          >
            <span className="text-white text-center text-3xl font-medium leading-[1.2]">
              Optimized for{" "}
              <span className="text-green-600 underline">SEO</span>{" "}
              <p className="bg-one-stop text-lenear relative">
                {" "}
                & High Performance
                <span className="h-[0.5px] w-full bg-one-stop absolute bottom-0.5 left-0" />
              </p>
            </span>
          </div>
        </div>
        <div className="max-w-[860px] mx-auto bg-gray-black bg-contain rounded-2xl relative min-h-[88px]">
          <div className="flex items-center gap-6 p-6 bg-gray-800 absolute inset-[1px] rounded-2xl">
            <div>
              <img src="/images/shopify_brands (1).png" alt="" />
            </div>
            <div>
              <span className="text-white">Enjoy 3 months</span> of shopify for
              <span className="text-lenear bg-pink-primary"> $1/month </span> -
              Start your free trial
            </div>
            <div>
              <Buttons
                className="rounded-lg py-2.5"
                href="/"
                name="Start Free Trial"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumFeatures;

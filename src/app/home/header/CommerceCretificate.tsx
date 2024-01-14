import Link from "next/link";
import React from "react";

const logoGroup = [
  {
    name: "Power Elite Author",
    logo: "/images/power.svg",
  },
  {
    name: "Milestone Member",
    logo: "/images/milestone.svg",
  },
  {
    name: "Author Level 13",
    logo: "/images/author.svg",
  },
  {
    name: "Top Monthly Author",
    logo: "/images/Mauthor.svg",
  },
  {
    name: "Weekly Top Seller",
    logo: "/images/Wauthor.svg",
  },
  {
    name: "Trendsetter",
    logo: "/images/trendsetter.svg",
  },
  {
    name: "Affiliate Level 5",
    logo: "/images/Affiliate.svg",
  },
  {
    name: "Collector Level 3",
    logo: "/images/Collector.svg",
  },
];

function CommerceCretificate() {
  return (
    <div
      className="max-w-[1240px] mx-auto rounded-3xl flex flex-col items-center pt-20 px-[15px] pb-32"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #151515 0%, rgba(0, 0, 0, 100) 80%)",
      }}
    >
      <div className="relative inline-block overflow-hidden rounded-xl mb-6">
        <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
        <img className="" src="/images/head.png" alt="" />
      </div>
      <h2 className="text-white text-8xl font-medium mb-6">
        Commerce Coach Certificate
      </h2>
      <h3 className="flex gap-3 items-center text-white text-3xl font-medium mb-5">
        From{" "}
        <span>
          <img src="/images/shopify_brands.png" alt="" />
        </span>
      </h3>
      <Link
        href="/"
        target="_blank"
        className="text-base hover:text-primary duration-300 underline font-medium text-white mb-6"
      >
        Learn more
      </Link>
      <div className="flex gap-6">
        {logoGroup.map(({name, logo}, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-center group relative"
          >
            <span className="relative z-0 group">
              <img src={logo} alt="" />
              <span className="group-hover:bg-buttonS3 bg-transparent blur-lg rounded-full w-16 h-16 flex items-center justify-center absolute -top-4 -left-4 -z-10" />
            </span>
            <p className="text-xs opacity-0 absolute -bottom-6 text-gray-300/60 whitespace-nowrap group-hover:opacity-100 duration-500">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommerceCretificate;

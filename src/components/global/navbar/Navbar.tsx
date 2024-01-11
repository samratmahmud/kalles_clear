import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const navLink = [
  {
    name: "Demos",
    path: "/",
  },
  {
    name: "Special Deal",
    path: "/",
    badgeNew: "New",
  },
  {
    name: "Features",
    path: "/",
  },
  {
    name: "Performance",
    path: "/",
    badgeHot: "Hot",
  },
  {
    name: "Support",
    path: "/",
  },
  {
    name: "Open Store Free",
    path: "/",
  },
];

function Navbar() {
  return (
    <nav className="bg-black sticky top-0 z-[1040]">
      <div className="container flex items-center justify-between gap-3 py-6">
        <Link
          href="/"
          className="text-6xl text-white -tracking-[1.7px] leading-8 font-bold"
        >
          kalles
        </Link>
        <div className="flex gap-6">
          {navLink.map(({name, path, badgeNew, badgeHot}, index) => (
            <div key={index} className="">
              <Link
                href={path}
                className="text-white hover:text-blue-600 duration-500 relative"
              >
                {name}
                {badgeNew && (
                  <span className="bg-newP px-1.5 py-[1px] text-xs font-medium text-white rounded-3xl absolute -top-3.5 right-0">
                    {badgeNew}
                  </span>
                )}
                {badgeHot && (
                  <span className="bg-hotP px-1.5 py-[1px] text-xs font-medium text-white rounded-3xl absolute -top-3.5 right-0">
                    {badgeHot}
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Buttons
            href="#"
            icon="/images/icons8-trolley-64.png"
            name="Buy Now $89"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";
import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const navLink = [
   {
      name: "Demos",
      path: "#Demos",
   },
   {
      name: "Special Deal",
      path: "#specialDeal",
      badgeNew: "New",
   },
   {
      name: "Features",
      path: "#features",
   },
   {
      name: "Performance",
      path: "#performance",
      badgeHot: "Hot",
   },
   {
      name: "Support",
      path: "#support",
   },
   {
      name: "Open Store Free",
      path: "/",
   },
];

function Navbar() {
   const [visible, setVisible] = useState(false);
   const [open, setOpen] = useState(false);
   const toggle = () => setOpen((prev) => !prev);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 150) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      };
      handleScroll();

      window.addEventListener("scroll", () => {
         handleScroll();
      });
   });

   return (
      <nav
         className={`sticky top-0 z-[1040] overflow-hidden ${
            !visible ? "bg-black" : "bg-black/80 backdrop-blur-md"
         }`}
      >
         <div className="container">
            <div className="flex items-center justify-between gap-3 py-6">
               <Link
                  href="/"
                  className="text-6xl text-white -tracking-[1.7px] leading-8 font-bold"
               >
                  kalles
               </Link>
               <div className="xl:flex hidden gap-6">
                  {navLink.map(({name, path, badgeNew, badgeHot}, index) => (
                     <div key={index} className="">
                        <Link
                           href={path}
                           className="text-white hover:text-primary duration-500 relative"
                        >
                           {name}
                           {badgeNew && (
                              <span className="bg-newP px-1.5 py-[1px] text-xs font-medium text-white rounded-3xl absolute -top-5 right-0">
                                 {badgeNew}
                              </span>
                           )}
                           {badgeHot && (
                              <span className="bg-hotP px-1.5 py-[1px] text-xs font-medium text-white rounded-3xl absolute -top-5 right-0">
                                 {badgeHot}
                              </span>
                           )}
                        </Link>
                     </div>
                  ))}
               </div>
               <div className="xl:block hidden">
                  <Buttons
                     href="#"
                     icon="/images/icons8-trolley-64.png"
                     name="Buy Now $89"
                  />
               </div>
               <div onClick={toggle} className="xl:hidden block cursor-pointer">
                  <img
                     className="w-8 aspect-square"
                     src="/images/icons8-menu-50 (1).png"
                     alt=""
                  />
               </div>
            </div>
            <div className="xl:hidden">
               <Drawer
                  onClose={toggle}
                  open={open}
                  direction="right"
                  style={{
                     maxWidth: "565px",
                     width: "85%",
                  }}
               >
                  <div className="bg-black h-full">
                     <div
                        onClick={toggle}
                        className="w-11 aspect-square cursor-pointer -translate-x-[100%]"
                     >
                        <img
                           className="bg-black p-2.5"
                           src="/images/icons8-close-50.png"
                           alt=""
                        />
                     </div>
                     <div className="text-6xl text-white -tracking-[1.7px] leading-8 font-bold flex justify-center py-12 px-6">
                        kalles
                     </div>
                     <div className="flex flex-col py-2.5 mb-2.5">
                        {navLink.map(({name, path}, index) => (
                           <div key={index} className="py-4 px-6">
                              <Link
                                 href={path}
                                 className="text-white hover:text-primary duration-500 relative"
                              >
                                 {name}
                              </Link>
                           </div>
                        ))}
                     </div>
                     <div className="flex px-4">
                        <Buttons
                           href="/"
                           icon="/images/icons8-trolley-64.png"
                           name="Buy Now $89"
                        />
                     </div>
                  </div>
               </Drawer>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;

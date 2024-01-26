import Link from "next/link";
import React from "react";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   icon?: string;
   name: string;
   varient?: "contained" | "outlined";
   size?: "small" | "medium";
   href: string;
   className?: string;
}

function Buttons(props: buttonProps) {
   const {
      name,
      icon,
      className,
      varient = "contained",
      size = "medium",
      href,
   } = props;

   let varientClasses: string[] = [];
   if (varient === "contained") {
      varientClasses = [
         "border",
         "border-slate-300/20",
         "text-white hover:text-primary",
         `${size === "medium" ? "py-4" : `{${className}}`}`,
         `${size === "medium" ? "px-6" : `{${className}}`}`,
         "bg-slate-600/30",
      ];
   }
   if (varient === "outlined") {
      varientClasses = ["text-white hover:text-primary"];
   }

   let BtnComp: any = Link;
   if (href) {
      BtnComp = Link;
   } else if (!href) {
      BtnComp = "div";
   }

   return (
      <BtnComp
         role="Button"
         className={`flex items-center justify-center duration-300 gap-2 ${
            size === "medium" ? "rounded-lg" : `${className}`
         } relative z-0 overflow-hidden ${varientClasses.join(" ")}`}
         tabindex={-1}
         {...(href ? {href} : {})}
      >
         {icon && (
            <div
               className={`${size === "medium" ? "" : "bg-black rounded-full"}`}
            >
               <img
                  className={`${
                     size === "medium" ? "w-5 h-5" : "w-8 aspect-square p-1.5"
                  }`}
                  src={icon}
                  alt=""
               />
            </div>
         )}
         <div className={`font-medium ${size === "medium" ? "" : "text-md"}`}>
            {name}
         </div>
         {varient === "contained" && (
            <div className="absolute top-0 left-0 -z-10">
               <div className="bg-buttonS1 w-7 h-9 blur-md animation-light-skew-one absolute top-2" />
               <div className="bg-buttonS2 w-7 h-9 blur-md animation-light-skew-two absolute top-2" />
               <div className="bg-buttonS3 w-7 h-9 blur-md animation-light-skew-three absolute top-2" />
               <div className="bg-btn-mb w-64 h-14 animation-light absolute top-0" />
            </div>
         )}
      </BtnComp>
   );
}

export default Buttons;

import React from "react";

interface agencyItemProps {
   name: string;
   nameS?: string;
   isActive?: boolean;
   handelChange?: () => void;
}

function AgencyItem(props: agencyItemProps) {
   const {name, nameS, isActive, handelChange} = props;
   const [open, setOpen] = React.useState(false);

   return (
      <div
         onClick={handelChange}
         onMouseEnter={() => setOpen(true)}
         onMouseLeave={() => setOpen(false)}
         className="relative inline-block overflow-hidden rounded-lg bg-slate-600/30 border border-white/20 cursor-pointer group"
      >
         <div className="bg-btn-mb w-64 h-full animation-light absolute top-0" />
         <p
            className={`py-2.5 px-4 hover:text-white duration-300 font-medium flex gap-1 ${
               isActive ? "text-white" : ""
            }`}
         >
            {name}
            <span
               className={`hidden lg:block duration-500 ease-linear overflow-hidden whitespace-nowrap ${
                  !open && !isActive ? "max-w-0" : "xl:max-w-[500px] max-w-0"
               }`}
            >
               {nameS}
            </span>
         </p>
      </div>
   );
}

export default AgencyItem;

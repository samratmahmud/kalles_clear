import Link from "next/link";
import React, {useEffect, useState} from "react";

function UpBotton() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const handelChange = () => {
         if (window.scrollY >= 350) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      };
      handelChange();

      window.addEventListener("scroll", () => {
         handelChange();
      });
   }, []);

   return (
      <div id="top" className="relative z-50">
         <Link
            aria-label="Back-top"
            href="#top"
            className={`w-10 h-10 rounded bg-primary fixed flex items-center justify-center bottom-7 right-5 duration-500 ${
               visible ? "opacity-100" : "opacity-0"
            }`}
         >
            <img
               className="-rotate-90"
               src="/images/icons8-arrow-24.png"
               alt=""
            />
         </Link>
      </div>
   );
}

export default UpBotton;

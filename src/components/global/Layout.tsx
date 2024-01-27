"use client";
import React, {ReactNode} from "react";
import Navbar from "./navbar/Navbar";
import Offer from "@/app/home/Offer";
import {ParallaxProvider} from "react-scroll-parallax";
import UpBotton from "./UpBotton";

interface layoutProps {
   children: ReactNode;
}

function Layout(props: layoutProps) {
   const {children} = props;

   return (
      <ParallaxProvider>
         <main className="bg-black">
            <Offer />
            <Navbar />
            <UpBotton />
            {children}
         </main>
      </ParallaxProvider>
   );
}

export default Layout;

"use client";
import React, {ReactNode, useEffect} from "react";
import Navbar from "./navbar/Navbar";
import Offer from "@/app/home/Offer";
import {ParallaxProvider} from "react-scroll-parallax";
import UpBotton from "./UpBotton";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./footer/Footer";

interface layoutProps {
   children: ReactNode;
}

function Layout(props: layoutProps) {
   const {children} = props;
   useEffect(() => {
      AOS.init({
         duration: 700,
         easing: "ease",
         once: true,
      });
   });

   return (
      <ParallaxProvider>
         <main className="bg-black">
            <Offer />
            <Navbar />
            <UpBotton />
            {children}
            <Footer />
         </main>
      </ParallaxProvider>
   );
}

export default Layout;

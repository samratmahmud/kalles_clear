"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Marquee from "react-fast-marquee";

function Offer() {
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
    <section id="top" className="bg-top-marque">
      <Marquee speed={60} pauseOnHover={true}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full" />
              <div className="flex items-center gap-3 py-[17px] px-8">
                <img
                  className="blur-[1px]"
                  src="/images/open-icon.svg"
                  alt=""
                />
                <p className="text-white font-medium duration-300 hover:text-blue-700 underline">
                  Open a Store Now
                </p>
              </div>
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>
            <div className="flex items-center py-[17px] px-8 gap-3">
              <img className="blur-[1px]" src="/images/fire.svg" alt="" />
              <div className="font-medium">
                <Link
                  href="/"
                  className="text-white duration-300 underline hover:text-blue-700"
                >
                  Start a free trial and enjoy 3 months
                </Link>
                <span> of Shopify for</span>
                <span className="text-green-400">$1/month.</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
      {visible && (
        <Link
          aria-label="Back-top"
          href="#top"
          className={`w-10 h-10 rounded bg-primary fixed flex items-center justify-center bottom-7 right-5 ${
            visible ? "block" : "hidden"
          }`}
        >
          <img
            className="-rotate-90"
            src="/images/icons8-arrow-24.png"
            alt=""
          />
        </Link>
      )}
    </section>
  );
}

export default Offer;

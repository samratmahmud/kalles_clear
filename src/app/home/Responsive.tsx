"use client";
import React from "react";
import {Parallax} from "react-scroll-parallax";

function Responsive() {
  return (
    <section>
      <div className="container-width mb-44">
        <Parallax translateX={[-20, 20]}>
          <div className="flex gap-3 items-center justify-between">
            <h2 className="text-19xl bg-clean-bg font-medium stroke-text">
              Clean
            </h2>
            <div className="border-[10px] rounded-full border-dotted border-red-800 animate-spin relative z-0">
              <span className="bg-one-stop w-64 aspect-square rounded-full absolute -top-[15%] -left-[15%] blur-[50px] -z-10" />
              <img
                className="w-48 rounded-full aspect-square"
                src="/images/purple-osteospermum-daisy-flower_1373-16.jpg"
                alt=""
              />
            </div>
          </div>
        </Parallax>
        <div className="text-19xl font-medium tracking-[-12px] mb-4 text-lenear bg-50+ text-center">
          Responsive
        </div>
        <Parallax translateX={[20, -20]}>
          <div className="flex gap-3 items-center justify-between">
            <img src="/images/arrow_right.svg" alt="" />
            <span className="text-19xl stroke-text bg-clean-bg font-medium">
              Versatile
            </span>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default Responsive;

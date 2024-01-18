import Buttons from "@/components/common/Buttons";
import React from "react";

function Advanced() {
  return (
    <section className="mb-[200px]">
      <div className="relative z-0 mb-32">
        <span className="bg-primary w-full h-1/5 absolute 4xl:top-[20%] top-1/4 -z-10 blur-[200px]" />
        <h2 className="text-17xl leading-[1.2] text-center font-medium text-lenear bg-Advanced xl:px-12 lg:px-8 px-4">
          Advanced Mega Menu
        </h2>
        <div
          className="bg-cover bg-no-repeat"
          style={{backgroundImage: "url('/images/lay2.png')"}}
        >
          <img className="w-full" src="/images/1.png" alt="" />
        </div>
      </div>
      <div className="max-w-[830px] mx-auto bg-gray-black bg-contain rounded-2xl relative min-h-20">
        <div className="text-xl font-medium p-6 bg-gray-800 absolute inset-[1px] rounded-2xl">
          <span className="text-lenear bg-one-stop">
            Dynamic & informative mega menu
          </span>{" "}
          helps buyers easily find their{" "}
          <span className="text-white">favorite items</span>
        </div>
      </div>
    </section>
  );
}

export default Advanced;

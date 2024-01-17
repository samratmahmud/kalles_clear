import React from "react";

function Responsive() {
  return (
    <section>
      <div className="container-width mb-44">
        <div className="flex gap-3 items-center justify-between">
          <h2 className="text-19xl text-lenear bg-clean-bg font-medium">
            Clean
          </h2>
          <img src="/images/clean_roted.svg" alt="" />
        </div>
        <div className="text-19xl font-medium tracking-[-12px] mb-4 text-lenear bg-50+ text-center">
          Responsive
        </div>
        <div className="flex gap-3 items-center justify-between">
          <img src="/images/arrow_right.svg" alt="" />
          <span className="text-19xl text-lenear bg-clean-bg font-medium">
            Versatile
          </span>
        </div>
      </div>
    </section>
  );
}

export default Responsive;

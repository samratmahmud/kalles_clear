import React from "react";

function PremiumFeatures() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="flex items-center gap-3 mb-6">
              <img src="/images/linearplus.svg" alt="" />
              <span className="text-xl font-medium bg-one-stop text-lenear">
                WHY CHOOSE KALLES?
              </span>
            </h3>
            <h2 className="text-10xl text-white font-medium mb-2">
              Stand Out From The Crowd <br /> With Premium Features
            </h2>
          </div>
          <p className="max-w-[432px] text-xl mb-4">
            Enjoy the exclusive features that make building your web pages a
            joyful moment. All in one theme!
          </p>
        </div>
      </div>
    </section>
  );
}

export default PremiumFeatures;

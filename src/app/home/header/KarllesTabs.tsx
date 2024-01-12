import React, {useState} from "react";

const tabItems = [
  {
    icon: "/images/icons8-home-48.png",
    name: "Home Page",
    thumnail: "/images/h_d_1.jpg",
  },
  {
    icon: "/images/icons8-products-26.png",
    name: "Product Page",
    thumnail: "/images/p_d_1.jpg",
  },
  {
    icon: "/images/icons8-menu-50.png",
    name: "Collection Page",
    thumnail: "/images/c_d_1.jpg",
  },
  {
    icon: "/images/icons8-edit-file-64.png",
    name: "Blog",
    thumnail: "/images/b_d_1.jpg",
  },
  {
    icon: "/images/icons8-menu-78.png",
    name: "More",
    thumnail: "/images/m_d_1.jpg",
  },
];

const tabIcon = [
  {
    icons: "/images/icons8-monitor-64.png",
  },
  {
    icons: "/images/icons8-page-64.png",
  },
];

function KarllesTabs() {
  const [tab, setTab] = useState(0);
  const [change, setChange] = useState(0);

  return (
    <div className="bg-[rgba(32,_32,_32,_0.32)] backdrop-blur-md p-3 rounded-3xl  duration-500">
      <div className="flex gap-1.5 ml-3 mb-3">
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className="w-2.5 h-2.5 border border-gray-300/25 rounded-full"
          />
        ))}
      </div>
      <div
        className="p-5 border border-[rgba(255,_255,_255,_0.06)] rounded-2xl backdrop:blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)",
        }}
      >
        <div className="pt-3 pr-5 pl-3">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 justify-between">
              <div>
                <h2 className="text-5xl text-white -tracking-[1.7px] leading-8 font-bold mb-14">
                  kalles
                </h2>
                <div className="flex flex-col gap-1.5">
                  {tabItems.map(({name, icon}, index) => (
                    <div
                      onClick={() => setTab(index)}
                      className={`flex items-center justify-between gap-3 cursor-pointer py-1.5 pl-1.5 pr-4 min-w-[220px] rounded-xl group duration-300 ${
                        tab === index
                          ? "border border-gray-300/10"
                          : "border border-transparent hover:border-gray-300/10"
                      }`}
                    >
                      <div className="flex gap-3 items-center">
                        <div
                          className={`w-8 h-8 rounded-lg p-1.5 border border-gray-300/10 duration-500 ${
                            tab === index
                              ? "bg-newP"
                              : "bg-gray-600/30 backdrop-blur group-hover:bg-newP"
                          }`}
                        >
                          <img src={icon} alt="" />
                        </div>
                        <div
                          className={`text-md duration-300 font-medium ${
                            tab === index
                              ? "text-white"
                              : "group-hover:text-white "
                          }`}
                        >
                          {name}
                        </div>
                      </div>
                      <img
                        className={`${
                          tab === index
                            ? ""
                            : "opacity-60 group-hover:opacity-100"
                        }`}
                        src="/images/icons8-arrow-24.png"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 border border-gray-300/10 p-4 mb-10 bg-gray-600/30 backdrop-blur rounded-2xl">
                <img src="/images/bdicon.svg" alt="" />
                <div className="text-md text-white whitespace-nowrap">
                  Power Elite Author{" "}
                  <span className="flex gap-1">
                    on
                    <img src="/images/market.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex border border-gray-300/30 rounded-lg mt-9 mb-4">
                {tabIcon.map(({icons}, index) => (
                  <div
                    key={index}
                    onClick={() => setChange(index)}
                    className={`cursor-pointer ${
                      change === index ? "bg-primary rounded-lg" : ""
                    }`}
                  >
                    <img className="w-8 h-8 p-1" src={icons} alt="" />
                  </div>
                ))}
              </div>
              <div className="p-3 border border-red-300/10 rounded-2xl mb-4">
                <img
                  className="rounded-2xl"
                  src={tabItems[tab].thumnail}
                  alt=""
                />
              </div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KarllesTabs;

import React from "react";

const imagesGroup = [
  {
    thumbnail: [
      "/images/1.jpeg",
      "/images/2.jpeg",
      "/images/3.jpeg",
      "/images/4.jpeg",
      "/images/5.jpeg",
    ],
  },
  {
    thumbnail: [
      "/images/6.jpeg",
      "/images/7.jpeg",
      "/images/8.jpeg",
      "/images/9.jpeg",
      "/images/10.jpeg",
      "/images/11.jpeg",
    ],
  },
  {
    thumbnail: [
      "/images/12.jpeg",
      "/images/13.jpeg",
      "images/14.jpeg",
      "/images/15.jpeg",
      "/images/16.jpeg",
      "/images/17.jpeg",
    ],
  },
];

function MasonaryCards() {
  return (
    <section>
      <div className="container-width mb-44">
        <div className="sticky top-28 flex justify-center">
          <div className="backdrop-blur-md inline-block  rounded-3xl bg-black/65 mb-56">
            <h2 className="flex gap-8 items-center text-10xl text-white font-medium justify-center px-24">
              <span className="text-18xl font-medium tracking-[-6.4px] bg-50+ text-lenear">
                25+
              </span>
              Ready to Use <br /> Sections
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {imagesGroup.map(({thumbnail}, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 first:mt-20 last:mt-20"
            >
              {thumbnail.map((items, index) => (
                <img
                  key={index}
                  className="w-full rounded-xl"
                  src={items}
                  alt=""
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MasonaryCards;

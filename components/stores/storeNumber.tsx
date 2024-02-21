import React from "react";

import { LuBadgeCheck, LuAward, LuBus, LuMessageSquare } from "react-icons/lu";

const StoreNumber = () => {
  return (
    <div className="w-full h-[130vh] lg:h-screen bg-black lg:flex">
      <div className="w-full h-1/2 lg:w-3/5 lg:h-full lg:flex lg:justify-end">
        <div className="gradient-div w-full h-full lg:w-3/4 lg:h-3/4 lg:mr-10 lg:mt-10 ">
          <div className="flex items-center text-center justify-center w-full h-1/6 ">
            <h1 className="text-white text-2xl font-black">What to Expect</h1>
          </div>

          <div className="w-11/12 h-5/6 mx-auto">
            <div className="h-1/2 w-full flex justify-between mx-auto ">
              <div className="glassmorphism  w-[48%] h-5/6 ">
                <LuAward className="text-white text-7xl pt-10 px-3 font-black" />
                <p className="text-white text-bold pt-2 px-3">
                  {" "}
                  Only Top Rated Designers and Brands.
                </p>
              </div>
              <div className="w-[48%] h-5/6 glassmorphism">
                <LuBadgeCheck className="text-white text-7xl pt-10 px-3 font-black" />
                <p className="text-white text-bold pt-2 px-3">
                  {" "}
                  Geniune and Original Brands.
                </p>
              </div>
            </div>
            <div className="h-1/2 w-full flex justify-between mx-auto">
              <div className="w-[48%] h-5/6 glassmorphism">
                <LuMessageSquare className="text-white text-7xl pt-10 px-3 font-black" />
                <p className="text-white text-bold pt-2 px-3">
                  {" "}
                  Readily Available 24/7 Customer Support{" "}
                </p>
              </div>
              <div className="w-[48%] h-5/6 glassmorphism">
                <LuBus className="text-white text-7xl pt-10 px-3 font-black" />
                <p className="text-white text-bold pt-2 px-3">
                  {" "}
                  Timely Shipping of Merchindise.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        // style={{ backgroundColor: "#ffebe6" }}
        className="w-full h-1/2 lg:w-2/5 lg:h-full flex flex-col items-center "
      >
        <div className="w-full h-1/4 flex flex-col items-center justify-end">
          <p className="exterior store-text px-3">700+</p>
          <p className="font-serif text-white opacity-50 px-3 text-2xl font-black tracking-tighter">
            Stores and designers
          </p>
        </div>

        <div className="w-full h-1/4 flex flex-col items-center justify-end">
          <p className="exterior store-text px-3">15000+</p>
          <p className="font-serif text-white opacity-50 px-3 text-2xl font-black tracking-tighter">
            Design and Clothes Sold
          </p>
        </div>

        <div className="w-full h-1/4 flex flex-col items-center justify-end">
          <p className="exterior store-text px-3">21+</p>
          <p className="font-serif text-white opacity-50 px-3 text-2xl font-black tracking-tighter">
            Counties in Kenya
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreNumber;

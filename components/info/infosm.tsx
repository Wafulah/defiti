"use client";

import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import styles from "@/components/styles";

const Infosm = () => {
  return (
    <div className="w-full bg-black h-[180vh]">
      <div className="w-11/12 h-5/6 mx-auto  bg-black">
        <div className="w-full h-full">
          <div className="h-1/6 w-3/4 mt-5  mx-auto">
            <h2 className=" pt-2 head-exterior half-text ">What We Offer</h2>
            <p className=" pt-2 text-white text-sm text-bold opacity-75">
              As Kenya&apos;s premier destination for luxury fashion, we take
              pride in curating the finest selection of top-tier styles.
            </p>
          </div>
          <div className="w-11/12 mx-auto ml-5 mt-2  h-5/6 flex flex-col justify-center">
            <div className="red-pink-gradient mt-2 w-full h-1/3 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold  ">
                Exclusive Store Collaborations
              </h3>
              <p className="text-white text-xs opacity-75 px-5">
                Partnering with renowned high-end stores, we bring you a curated
                selection of top-tier styles. Our collaboration ensures that you
                have access to the finest fashion from distinguished brands and
                designers.
              </p>
            </div>
            <div className="red-pink-gradient mt-2 w-full h-1/3 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold ">
                {" "}
                Personalized Design Expertise
              </h3>
              <p className="text-white text-xs opacity-75 px-5">
                Our expert designers are dedicated to creating clothing that
                reflects your individuality, ensuring a one-of-a-kind wardrobe
                that stands out.
              </p>
            </div>

            <div className="red-pink-gradient mt-2 w-full h-1/3 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold ">
                {" "}
                Trendsetting Fashion Collections
              </h3>
              <p className="text-white text-xs opacity-75 px-5 ">
                From timeless classics to cutting-edge styles, our fashion
                offerings embody the essence of sophistication and trendsetting
                elegance.
              </p>
            </div>
            <div className="red-pink-gradient mt-2 w-full h-1/3 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold ">
                {" "}
                Event-Ready Wardrobe Solutions
              </h3>
              <p className="text-white text-xs opacity-75 px-5">
                Find the perfect attire for every occasion with our
                event-centric fashion selections. Elevate your style with
                outfits designed to match the uniqueness of each event.
              </p>
            </div>
          </div>
          <div
            // style={styles.backColor}
            className="rounded-[20px] red-pink-gradient ml-5 mt-10 w-11/12 mx-auto h-[10%]  flex flex-col items-center text-center justify-center"
          >
            <p className="text-white text-lg px-5">
              What are you waiting for? Grab yourself a pair{" "}
            </p>{" "}
            <LuMoveRight className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infosm;

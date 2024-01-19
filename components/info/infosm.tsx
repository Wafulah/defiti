"use client";

import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import styles from "@/components/styles";

const Infosm = () => {
  return (
    <div style={{ height: "200vh" }} className="w-full bg-black">
      <div className="w-11/12 h-5/6 m-auto  bg-black">
        <div className="w-full h-1/3 relative">
          <Image
            src="/info.webp"
            alt="D'efiti Image"
            fill={true}
            layout="fill"
          />
        </div>
        <div className="w-full h-3/4">
          <div className="h-1/6 w-3/4 mt-5 ">
            <p className="pl-2 text-white text-lg text-bold">
              As Kenya&apos;s premier destination for luxury fashion, we take
              pride in curating the finest selection of top-tier styles.
            </p>
          </div>
          <div className="w-11/12 mx-auto ml-5 mt-2 lg:w-full h-1/3 flex justify-between">
            <div className="blackglassmorphism w-1/2 h-full">
              <h3 className="text-white text-lg text-bold  pl-2">
                {" "}
                Exclusive Store Collaborations
              </h3>
              <p className="text-white text-xs opacity-75 pr-10 pl-2">
                Partnering with renowned high-end stores, we bring you a curated
                selection of top-tier styles. Our collaboration ensures that you
                have access to the finest fashion from distinguished brands and
                designers.
              </p>
            </div>
            <div className="blackglassmorphism w-1/2 h-full ">
              <h3 className="text-white text-lg text-bold pr-5 pl-2">
                {" "}
                Personalized Design Expertise
              </h3>
              <p className="text-white text-xs opacity-75 pr-10 pl-2">
                Our expert designers are dedicated to creating clothing that
                reflects your individuality, ensuring a one-of-a-kind wardrobe
                that stands out.
              </p>
            </div>
          </div>
          <div className="w-11/12 mx-auto ml-5 lg:w-full h-1/3 flex justify-between">
            <div className="blackglassmorphism w-1/2 h-full flex flex-col items-center">
              <h3 className="text-white text-lg text-bold pr-5 pl-2">
                {" "}
                Trendsetting Fashion Collections
              </h3>
              <p className="text-white text-xs opacity-75 pr-10 pl-2 ">
                From timeless classics to cutting-edge styles, our fashion
                offerings embody the essence of sophistication and trendsetting
                elegance.
              </p>
            </div>
            <div className="blackglassmorphism w-1/2 h-full">
              <h3 className="text-white text-lg text-bold pr-5 pl-2">
                {" "}
                Event-Ready Wardrobe Solutions
              </h3>
              <p className="text-white text-xs opacity-75 pr-10 pl-2">
                Find the perfect attire for every occasion with our
                event-centric fashion selections. Elevate your style with
                outfits designed to match the uniqueness of each event.
              </p>
            </div>
          </div>
          <div
            // style={styles.backColor}
            className="gradient-div ml-5 mt-10 w-11/12 mx-auto h-1/6  flex flex-col items-center text-center justify-center"
          >
            <p className="text-white text-xl pr-5">
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

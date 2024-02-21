"use client";

import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import styles from "@/components/styles";

const Info = () => {
  return (
    <div className="w-full h-[130vh] ">
      <div className="w-11/12 h-full m-auto bg-black mx-auto">
        <div className="w-11/12 h-full mx-auto ">
          <div className="h-1/6 w-2/3 mt-10 ">
            <h2 className="pl-10 pt-2 head-exterior half-text ">
              What We Offer
            </h2>
            <p className="pl-10 pt-2 text-white opacity-75 text-lg text-bold">
              As Kenya&apos;s premier destination for luxury fashion, we take
              pride in curating the finest selection of top-tier styles.
            </p>
          </div>
          <div className="mx-auto mt-2 w-4/5 h-1/3 flex justify-between ">
            <div className="red-pink-gradient mt-2 w-2/5 h-5/6 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold ">
                Exclusive Store Collaborations
              </h3>
              <p className="text-white text-xs opacity-75 px-5">
                Partnering with renowned high-end stores, we bring you a curated
                selection of top-tier styles. Our collaboration ensures that you
                have access to the finest fashion from distinguished brands and
                designers. Explore the epitome of luxury through our exclusive
                store offerings.
              </p>
            </div>
            <div className="red-pink-gradient mt-2 w-2/5 h-5/6 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold">
                {" "}
                Personalized Design Expertise
              </h3>
              <p className="text-white text-xs opacity-75 px-5">
                Experience fashion tailored to your unique style with our
                personalized design services. Our expert designers are dedicated
                to creating clothing that reflects your individuality, ensuring
                a one-of-a-kind wardrobe that stands out
              </p>
            </div>
          </div>
          <div className="mx-auto mt-2 w-4/5 h h-1/3 flex justify-between">
            <div className="red-pink-gradient mt-2 w-2/5 h-5/6 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold">
                {" "}
                Trendsetting Fashion Collections
              </h3>
              <p className="text-white text-xs opacity-75 px-5">
                Stay ahead of the curve with our meticulously curated
                collections featuring the latest fashion trends. From timeless
                classics to cutting-edge styles, our fashion offerings embody
                the essence of sophistication and trendsetting elegance.
              </p>
            </div>
            <div className="red-pink-gradient mt-2 w-2/5 h-5/6 flex flex-col justify-center rounded-[20px] text-center">
              <h3 className="text-white text-lg text-bold">
                {" "}
                Event-Ready Wardrobe Solutions
              </h3>
              <p className="text-white text-xs opacity-75 px-5">
                Find the perfect attire for every occasion with our
                event-centric fashion selections. Whether it&apos;s a formal
                gathering, a casual affair, or a special event, we have you
                covered. Elevate your style with outfits designed to match the
                uniqueness of each event.
              </p>
            </div>
          </div>
          <div className="red-pink-gradient mt-2 w-full h-[10%]  flex items-center text-center justify-center">
            <p className="text-white text-xl pr-5 ">
              What are you waiting for? Grab yourself a pair{" "}
            </p>{" "}
            <LuMoveRight className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

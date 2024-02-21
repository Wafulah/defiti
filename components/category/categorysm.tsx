"use client";

import Image from "next/image";
import styles from "../styles";

import { LuMoveRight } from "react-icons/lu";

const Categorysm = () => {
  return (
    <div className="w-full h-[120vh]">
      <div className="w-11/12 mx-auto h-[7%]">
        <h2 className="pt-4 head-exterior sub-text ">Glamour Your Events</h2>
      </div>
      <div className="w-11/12 mx-auto h-[90%] ">
        <div className="w-full h-1/2 flex justify-center">
          <div
            style={styles.bottomBorder}
            className="mr-2 w-3/4 h-3/4 relative"
          >
            <div className="justify-center items-center text-center w-full h-1/3 absolute z-10 glassmorphism bottom-0 flex flex-col">
              <div className="w-3/4 h-full flex justify-center items-center text-center">
                <p className="font-black text-white text-xl">Wedding Dresses</p>
              </div>
              <div className="w-1/4 h-full flex justify-center items-center text-center">
                <LuMoveRight className="text-2xl text-white" />
              </div>
            </div>
            <Image
              src="/wedding.webp"
              alt="D'efiti Wedding Image"
              fill={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            style={styles.bottomBorder}
            className="ml-2 w-3/4 h-3/4 relative"
          >
            <div className="flex-col justify-center items-center text-center w-full h-1/3 absolute z-10 glassmorphism bottom-0 flex">
              <div className="w-3/4 h-full flex justify-center items-center text-center">
                <p className="font-black text-white text-xl">Official Suits</p>
              </div>
              <div className="w-1/4 h-full flex justify-center items-center text-center">
                <LuMoveRight className="text-2xl text-white" />
              </div>
            </div>

            <Image
              src="/suit.webp"
              alt="D'efiti Suits Image"
              fill={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full h-1/2 flex justify-center">
          <div
            style={styles.bottomBorder}
            className="mr-2 w-3/4 h-3/4 relative"
          >
            <div className="flex-col justify-center items-center text-center w-full h-1/3 absolute z-10 glassmorphism bottom-0 flex">
              <div className="w-3/4 h-full flex justify-center items-center text-center">
                <p className="font-black text-white text-xl">
                  Designer clothes
                </p>
              </div>
              <div className="w-1/4 h-full flex justify-center items-center text-center">
                <LuMoveRight className="text-2xl text-white" />
              </div>
            </div>
            <Image
              src="/designer.webp"
              alt="D'efiti Designer Image"
              fill={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            style={styles.bottomBorder}
            className="ml-2 w-3/4 h-3/4 relative"
          >
            <div className="flex-col justify-center items-center text-center w-full h-1/3 absolute z-10 glassmorphism bottom-0 flex">
              <div className="w-3/4 h-full flex justify-center items-center text-center">
                <p className="font-black text-white text-xl">Street Wear</p>
              </div>
              <div className="w-1/4 h-full flex justify-center items-center text-center">
                <LuMoveRight className="text-2xl text-white" />
              </div>
            </div>
            <Image
              src="/streetwear.webp"
              alt="D'efiti Streetwear Image"
              fill={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorysm;

"use client";

import Image from "next/image";
import styles from "../styles";

import { LuMoveRight } from "react-icons/lu";

const Categoryxl = () => {
  return (
    <div className="w-3/4 mx-auto h-screen">
      <div className="w-full h-1/2 flex justify-center">
        <div style={styles.bottomBorder} className="mr-2 w-3/4 h-3/4 relative">
          <div className="w-full h-2/5 absolute z-10 glassmorphism bottom-0 flex">
            <div className="w-3/4 h-full flex justify-center items-center text-center">
              <p className="font-black text-white text-2xl">Wedding Dresses</p>
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
        <div style={styles.bottomBorder} className="ml-2 w-3/4 h-3/4 relative">
        <div className="w-full h-2/5 absolute z-10 glassmorphism bottom-0 flex">
            <div className="w-3/4 h-full flex justify-center items-center text-center">
              <p className="font-black text-white text-2xl">Official Suits</p>
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
        <div style={styles.bottomBorder} className="mr-2 w-3/4 h-3/4 relative">
        <div className="w-full h-2/5 absolute z-10 glassmorphism bottom-0 flex">
            <div className="w-3/4 h-full flex justify-center items-center text-center">
              <p className="font-black text-white text-2xl">Designer clothes</p>
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
        <div style={styles.bottomBorder} className="ml-2 w-3/4 h-3/4 relative">
        <div className="w-full h-2/5 absolute z-10 glassmorphism bottom-0 flex">
            <div className="w-3/4 h-full flex justify-center items-center text-center">
              <p className="font-black text-white text-2xl">Street Wear</p>
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
  );
};

export default Categoryxl;

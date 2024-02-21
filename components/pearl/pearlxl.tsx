"use client";

import Image from "next/image";
import pearlStyles from "./pearlStyle";
import styles from "../styles";

import { LuMoveRight } from "react-icons/lu";

const Pearlxl = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full ">
        <div className="ml-5 mt-10 h-4/5 w-3/5 relative">
          <Image
            src="/designers.webp"
            alt="D'efiti Design Store Image"
            fill={true}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-1/2 h-full flex justify-end ">
        <div className="mr-7 mt-10 h-4/5 w-2/3 relative">
          <Image
            src="/phone.webp"
            alt="D'efiti Design Store Image"
            fill={true}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div
        style={pearlStyles.floatDiv}
        className="flex flex-col items-center text-center justify-center absolute w-2/5 h-1/2 mx-auto"
      >
        <h3 className="text-xl font-black flex">
        <div
        className="flex justify-center items-center mx-3 "
      >
        <div className="h-1 w-40 pink-gradient" />
        <div className="w-5 h-5 rounded-full bg-[rgb(255,55,0)]" />
      </div>  Giving <span style={styles.textColor}  className="pl-2">Kenyans</span>
        </h3>
        <h1 className="head-text">
          <span style={styles.textColor}>D&apos;efiti</span>
        </h1>
        <h3 className="text-xl font-black flex">
          <span style={styles.textColor} className="pr-2">Access To </span> Fashion.
          <div
        className="ml-3 flex justify-end items-center "
      >
        
        <div className="w-5 h-5 rounded-full bg-[rgb(255,55,0)]" />
        <div className="h-1 w-40 pink-gradient-left" />
      </div>
        </h3>
      </div>
      
     
    </div>
  );
};

export default Pearlxl;

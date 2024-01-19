"use client";

import Image from "next/image";
import styles from "../styles";

import { LuMoveRight } from "react-icons/lu";

const Pearlsm = () => {
  return (
    <div  className="h-[180vh] w-full">
      <div className="mx-auto w-11/12 h-1/4 ">
        <div className="mx-auto h-4/5 w-11/12 relative ">
          <Image
            src="/phone.webp"
            alt="D'efiti Design Store Image"
            fill={true}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className=" flex flex-col items-center text-center justify-center w-11/12 h-2/5 mx-auto">
        <h3 className="text-xl font-black">
        <div
        className="flex flex-col justify-center items-center "
      >
       <div className="w-1 h-60 pink-gradient-up" /> 
        <div className="w-5 h-5 rounded-full bg-[rgb(255,0,0)]" />
        
      </div>
          Giving <span style={styles.textColor}>Kenyans</span>
        </h3>
        <h1 className="head-text">
          <span style={styles.textColor}>D&apos;efiti</span>
        </h1>
        <h3 className="text-xl font-black ">
          <span style={styles.textColor}>Access To </span> Fashion.
          <div
        className="flex flex-col justify-center items-center mx-3 "
      >
        
        <div className="w-5 h-5 rounded-full bg-[rgb(255,0,0)]" />
        <div className="w-1 h-20 pink-gradient-down" />
      </div>
        </h3>
      </div>
      <div className="mx-auto w-11/12 h-1/3 ">
        <div className="mx-auto h-4/5 w-11/12 relative">
          <Image
            src="/designers.webp"
            alt="D'efiti Design Store Image"
            fill={true}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Pearlsm;

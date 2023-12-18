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
        <h3 className="text-xl font-black">
          Giving <span style={styles.textColor}>Kenyans</span>
        </h3>
        <h1 className="head-text">
          <span style={styles.textColor}>D&apos;efiti</span>
        </h1>
        <h3 className="text-xl font-black">
          <span style={styles.textColor}>Access To </span> Fashion.
        </h3>
      </div>
    </div>
  );
};

export default Pearlxl;

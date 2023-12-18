"use client";

import Image from "next/image";
import styles from "../styles";

import { LuMoveRight } from "react-icons/lu";

const Pearlsm = () => {
  return (
    <div style={styles.pearlsmHeight}  className="w-full">
      <div className="mx-auto w-11/12 h-2/5 ">
        <div className="mx-auto h-4/5 w-11/12 relative">
          <Image
            src="/phone.webp"
            alt="D'efiti Design Store Image"
            fill={true}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center w-11/12 h-1/5 mx-auto">
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
      <div className="mx-auto w-11/12 h-2/5 ">
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

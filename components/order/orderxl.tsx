"use client"

import Image from "next/image";
import styles from "../styles";

const Orderxl = () => {
  return (
  <div className="w-full h-screen">
          <div className="w-11/12 h-5/6 m-auto flex ">
          <div
          
          className="mr-2 w-1/2 h-full"
        >
            <div className="mt-2 w-full h-3/4 relative">
          <Image
            src="/wish.gif"
            alt="D'efiti Order Online Image"
            fill={true}
            layout="fill"
            objectFit="contain"
          />
          </div>
          <div className="w-full h-1/5 flex justify-center items-center">
            <h1 className="half-text">
              <span style={styles.textColor}>We will</span> Deliver
            </h1>

            </div>
        </div>
        <div
          
          className="mr-2 w-1/2 h-full"
        >
            <div className="w-full h-1/5 flex justify-center items-center">
            <h1 className="half-text">
              Make an <span style={styles.textColor}>Order</span>
            </h1>

            </div>
            <div className="mt-2 w-full h-3/4 relative">

          <Image
            src="/delivery.gif"
            alt="D'efiti Order Online Image"
            fill={true}
            layout="fill"
            objectFit="contain"
          />
          </div>
        </div>

          </div>
  </div>
  );
};

export default Orderxl;

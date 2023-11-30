"use client";

import Image from "next/image";
import styles from "../styles";

const Ordersm = () => {
  return (
    <div style={{ height: "110vh" }} className="w-full ">
      <div className="mt-5 w-11/12 h-5/6 m-auto  ">
        <div className="mr-2 w-full h-1/2">
          <div className="w-full h-1/5 flex justify-center items-center">
            <h1 className="half-text">
              <span style={styles.textColor}>Make the</span> Order
            </h1>
          </div>
          <div className="mt-2 w-full h-3/4 relative">
            <Image
              src="/wish.gif"
              alt="D'efiti Order Online Image"
              fill={true}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="mr-2 w-full h-1/2">
          <div className="w-full h-1/5 text-end flex justify-center items-center">
            <h1 className="half-text">
              We will <span style={styles.textColor}>Deliver</span>
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

export default Ordersm;

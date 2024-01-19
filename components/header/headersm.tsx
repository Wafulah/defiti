"use client";

import Image from "next/image";
import styles from "../styles";

const Headersm = () => {
  return (
    <div className="w-11/12 h-screen  mx-auto">
      <div className="h-full w-full mx-auto relative ">
        <div className="w-full h-full absolute z-20 top-10">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="mb-head-text text-white">
              Elevated <span className="head-exterior">Elegance</span>
            </h1>
            <h1 className="mb-head-text text-white">
              with <span style={styles.textColor}>Style</span>
            </h1>
          </div>
        </div>
        <div className="w-full h-full ">
          <div className="mt-2 w-full mx-auto h-3/4 relative">
            <Image
              src="/header.webp"
              alt="D'efiti Image"
              fill={true}
              layout="fill"
            />
          </div>
          <div
            style={styles.bottomBorder}
            className="w-full h-1/5 flex justify-between"
          >
            <div className="w-1/2 h-full items-center text-center flex">
              <p className="sub-text">
                Discover your <span className="head-exterior">Glamour</span>{" "}
              </p>
            </div>

            <div className="w-1/2 h-full items-center text-center flex">
              <div
                style={styles.backColor}
                className="justify-center items-center text-center flex rounded w-3/4 h-2/5 mx-auto"
              >
                <h1 className="sub-text text-white">Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headersm;

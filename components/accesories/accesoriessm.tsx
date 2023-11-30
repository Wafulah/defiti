"use client";

import Image from "next/image";
import styles from "@/components/styles";

const Accesoriessm = () => {
  return (
    <div style={{ height: "120vh" }} className="w-full bg-black">
      <div className="w-11/12 h-5/6 m-auto bg-black">
        <div className="w-full h-1/3 flex justify-center">
          <div
            style={styles.roundBorder}
            className="bg-orange-500 mt-5 mr-2 w-1/2 h-4/5 relative"
          >
            <Image
              src="/watch.webp"
              alt="D'efiti Wedding Image"
              fill={true}
              layout="fill"
              style={styles.roundBorder}
              objectFit="cover"
            />
          </div>

          <div
            style={styles.roundBorder}
            className="bg-orange-500 mt-5 mr-2 w-1/2 h-4/5 relative"
          >
            <Image
              src="/necklace.webp"
              alt="D'efiti Wedding Image"
              fill={true}
              layout="fill"
              style={styles.roundBorder}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="w-full h-1/3 flex justify-center">
          <div
            style={styles.bottomBorder}
            className="bg-orange-500 mt-5 mr-2 w-11/12 h-4/5 relative"
          >
            <Image
              src="/women.webp"
              alt="D'efiti Wedding Image"
              fill={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-center">
          <div
            style={styles.roundBottomBorder}
            className="bg-orange-500 mb-5 mr-2 w-1/2 h-4/5 relative"
          >
            <Image
              src="/shoes.webp"
              alt="D'efiti Wedding Image"
              fill={true}
              layout="fill"
              style={styles.roundBottomBorder}
              objectFit="cover"
            />
          </div>

          <div
            style={styles.roundBottomBorder}
            className="bg-orange-500 mb-5 mr-2 w-1/2 h-4/5 relative"
          >
            <Image
              src="/purse.webp"
              alt="D'efiti Wedding Image"
              fill={true}
              layout="fill"
              style={styles.roundBottomBorder}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesoriessm;

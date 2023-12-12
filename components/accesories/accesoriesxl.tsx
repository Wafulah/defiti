"use client";

import Image from "next/image";
import styles from "@/components/styles";
import { LuArrowUpRightSquare } from "react-icons/lu";

import "./waves.css";
import Info from "./infoxl";

const Accesoriesxl = () => {
  return (
    <div className="w-full h-screen relative">
      <Info />
      <div className="w-11/12 h-5/6 m-auto bg-black">
        <div className="w-full h-1/2 flex justify-center">
          <div
            style={styles.roundBorder}
            className="bg-orange-500 mt-5 mr-2 w-1/4 h-4/5 relative"
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
            style={styles.bottomBorder}
            className="bg-orange-500 mt-5 mr-2 w-1/3 h-4/5 relative"
          >
            <Image
              src="/women.webp"
              alt="D'efiti Wedding Image"
              fill={true}
              layout="fill"
              objectFit="cover"
            />

            <div className="wave h-1/2 w-full absolute bottom-0">
              <div
                style={styles.links}
                className="absolute bottom-0 w-full z-40 flex h-1/3"
              >
                <div className="w-2/3 h-full flex justify-start items-center">
                  <p className="text-white text-xl text-bold pl-10">
                    Women&apos;s Shoes
                  </p>
                </div>
                <div className="flex w-1/3 h-full items-center justify-end">
                  {" "}
                  <p className="text-white text-xl text-bold">Shop</p>
                  <a
                    href="https://sokofiti-store.vercel.app"
                    style={styles.linkItem}
                    target="_blank"
                  >
                    <LuArrowUpRightSquare className="text-3xl text-white font-black" />
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div
            style={styles.roundBorder}
            className="bg-orange-500 mt-5 mr-2 w-1/4 h-4/5 relative"
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
        <div className="w-full h-1/2 flex justify-center">
          <div
            style={styles.roundBottomBorder}
            className="bg-orange-500 mb-5 mr-2 w-1/4 h-full relative"
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
            className="bg-orange-500 mb-5 mr-2 w-1/3 h-full relative"
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

export default Accesoriesxl;

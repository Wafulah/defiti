"use client";

import Image from "next/image";
import styles from "@/components/styles";
import { LuArrowUpRightSquare } from "react-icons/lu";

import "./waves.css";
import Info from "./infoxl";

const Accesoriesxl = () => {
  return (
    <div className="w-full h-[140vh] relative">
      {/* <Info /> */}
      <div className="w-11/12 h-5/6 m-auto bg-black">
        <div className="h-1/6 w-full flex items-center justify-center">
          <h2 className="pt-4 head-exterior half-text ">
            Accesories Just For You
          </h2>
        </div>
        <div className="h-4/5 w-full mb-5">
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
              <div
                style={styles.roundBorder}
                className="wavesm h-full w-full absolute bottom-0 "
              >
                <div
                  style={styles.links}
                  className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex h-1/3"
                >
                  <div className=" mx-auto w-1/2 h-full flex justify-end text-center items-center">
                    <p className="text-white text-2xl text-bold ">Watches</p>
                  </div>
                  <div className=" w-1/2 h-full flex justify-start">
                    <a
                      href="https://sokofiti-store.vercel.app"
                      style={styles.linkItem}
                      target="_blank"
                      className="flex mx-auto w-1/2 h-full items-center justify-center text-center"
                    >
                      <LuArrowUpRightSquare className="text-4xl text-white font-black" />
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </div>
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
               <div
              style={styles.roundBorder}
              className="wavesm h-full w-full absolute bottom-0 "
            >
              <div
                style={styles.links}
                className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex h-1/3"
              >
                <div className=" mx-auto w-1/2 h-full flex justify-end text-center items-center">
                  <p className="text-white text-2xl text-bold ">Jewellry</p>
                </div>
                <div className=" w-1/2 h-full flex justify-start">
                  <a
                    href="https://sokofiti-store.vercel.app"
                    style={styles.linkItem}
                    target="_blank"
                    className="flex mx-auto w-1/2 h-full items-center justify-center text-center"
                  >
                    <LuArrowUpRightSquare className="text-4xl text-white font-black" />
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
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
               <div
              style={styles.roundBorder}
              className="wavesm h-full w-full absolute bottom-0 "
            >
              <div
                style={styles.links}
                className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex h-1/3"
              >
                <div className=" mx-auto w-1/2 h-full flex justify-end text-center items-center">
                  <p className="text-white text-2xl text-bold ">Shoes</p>
                </div>
                <div className=" w-1/2 h-full flex justify-start">
                  <a
                    href="https://sokofiti-store.vercel.app"
                    style={styles.linkItem}
                    target="_blank"
                    className="flex mx-auto w-1/2 h-full items-center justify-center text-center"
                  >
                    <LuArrowUpRightSquare className="text-4xl text-white font-black" />
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
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
               <div
              style={styles.roundBorder}
              className="wavesm h-full w-full absolute bottom-0 "
            >
              <div
                style={styles.links}
                className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex h-1/3"
              >
                <div className=" mx-auto w-3/5 h-full flex justify-end text-center items-center">
                  <p className="text-white text-2xl text-bold ">Bags & Purses</p>
                </div>
                <div className=" w-1/3 h-full flex justify-start">
                  <a
                    href="https://sokofiti-store.vercel.app"
                    style={styles.linkItem}
                    target="_blank"
                    className="flex mx-auto w-1/3 h-full items-center justify-start text-center"
                  >
                    <LuArrowUpRightSquare className="text-4xl text-white font-black" />
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesoriesxl;

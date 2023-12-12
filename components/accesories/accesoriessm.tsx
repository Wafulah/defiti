"use client";

import Image from "next/image";
import styles from "@/components/styles";

import { LuArrowUpRightSquare } from "react-icons/lu";
import "./waves.css";

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
            <div
              style={styles.roundBorder}
              className="wavesm h-full w-full absolute bottom-0 "
            >
              <div
                style={styles.links}
                className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex flex-col h-1/3"
              >
                <div className=" mx-auto w-2/3 h-full flex justify-center text-center items-center">
                  <p className="text-white text-lg text-bold ">Watches</p>
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
            <div
              style={styles.roundBorder}
              className="wavesm h-full w-full absolute bottom-0 "
            >
              <div
                style={styles.links}
                className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex flex-col h-1/3"
              >
                <div className=" mx-auto w-2/3 h-full flex justify-center text-center items-center">
                  <p className="text-white text-lg text-bold ">Jewelry</p>
                </div>
                <div className="flex w-1/2 h-full justify-start">
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
            <div
              style={styles.roundBorder}
              className="wavesm h-full w-full absolute bottom-0 "
            >
              <div
                style={styles.links}
                className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex flex-col h-1/3"
              >
                <div className=" mx-auto w-2/3 h-full flex justify-center text-center items-center">
                  <p className="text-white text-lg text-bold ">Shoes</p>
                </div>
                <div className="flex w-1/2 h-full justify-start">
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
            <div
              style={styles.roundBorder}
              className="wavesm h-full w-full absolute bottom-0 "
            >
              <div
                style={styles.links}
                className="leftsm justify-center items-center absolute bottom-0 w-full z-40 flex flex-col h-1/3"
              >
                <div className=" mx-auto w-2/3 h-full flex justify-center text-center items-center">
                  <p className="text-white text-lg text-bold ">Bags</p>
                </div>
                <div className="flex w-1/2 h-full justify-start">
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
      </div>
    </div>
  );
};

export default Accesoriessm;

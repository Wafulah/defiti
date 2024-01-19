"use client";

import styles from "@/components/styles";

import { LuArrowUpRightSquare } from "react-icons/lu";

const Info = () => {
  return (
    <div className="absolute w-screen h-screen ">
      <div style={styles.watchDiv} className="gradient-div absolute">
        <div className="w-11/12 h-4/5 mx-auto mt-3">
          <div className="w-full h-1/3 mt-10 flex text-start items-center justify-start">
            <p className="text-white text-3xl font-black">Watches</p>
          </div>
          <div className="mt-2">
            <p className="text-white text-lg text-bold">
              Rolex . Omega . Patek Philipe . Breitling . IWC . Apple . Seiko
            </p>
          </div>
          <div className="mt-2 flex w-full h-1/5 items-center justify-end">
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
      </div>

      <div style={styles.menDiv} className="gradient-div absolute">
        <div className="w-11/12 h-4/5 mx-auto mt-3">
          <div className="w-full h-1/3 mt-2 flex text-start items-center justify-start">
            <p className="text-white text-xl font-black">Men&apos;s Shoes</p>
          </div>
          <div className="mt-2">
            <p className="text-white text-lg text-bold">
              Get yourself classic shoes.
            </p>
          </div>
          <div className="flex w-full h-1/5 items-center justify-end">
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
      </div>

      <div style={styles.bagDiv} className="gradient-div absolute">
        <div className="w-11/12 h-4/5 mx-auto mt-3">
          <div className="w-full h-1/3 mt-4 flex text-end items-center justify-end">
            <p className="text-white text-3xl font-black">Bags</p>
          </div>
          <div className="mt-1">
            <p className="text-white text-lg text-bold pl-2">
              Handbags . Purses . Sling bags . Clutch bag . Crossbody
            </p>
          </div>
          <div className="mt-2 flex w-full h-1/5 items-center justify-end">
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
      </div>

      <div style={styles.jewelDiv} className="gradient-div absolute">
        <div className="w-11/12 h-4/5 mx-auto mt-3">
          <div className="w-full h-1/3 mt-2 flex text-end items-center justify-end">
            <p className="text-white text-3xl font-black">Jewelry</p>
          </div>
          <div className="mt-3">
            <p className="text-white text-lg text-bold pl-2">
              Necklaces . Earing . Bracelet . Ring
            </p>
          </div>
          <div className="mt-2 flex w-full h-1/5 items-center justify-end">
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
      </div>
    </div>
  );
};

export default Info;

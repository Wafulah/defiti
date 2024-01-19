"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about Us",
    },
    {
      id: 3,
      link: "Shop online",
    },
    {
      id: 4,
      link: "Suppliers",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div
      className="bg-black w-full lg:mt-0 mt-0"
    >
 
      <div className="lg:w-1/2 lg:justify-start lg:text-justify lg:items-start text-center justify-center items-center flex flex-col ">
        <ul className="pt-5 lg:justify-start lg:items-start flex flex-col justify-center items-center text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="lg:text-base px-4 cursor-pointer capitalize py-2 text-xl"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" p-4 text-white w-full text-center">
        <p className="text-white opacity-50 text-sm">
          &copy; D&apos;efiti Copyright 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;

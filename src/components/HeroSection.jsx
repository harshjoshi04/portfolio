"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect } from "react";

export default function HeroSection() {
  return (
    <div id="heroSection">
      <div className="md:text-7xl pt-24 font-medium text-[#64686D] flex justify-center  max-w-7xl mx-auto text-xl ">
        <div>
          <p className="capitalize" id="title">
            Hi,my name is{" "}
            <span className="text-orange-600 font-bold capitalize" id="title">
              harsh joshi
            </span>
          </p>
          <p
            className="text-center text-3xl py-4 md:py-8 opacity-80"
            id="titleJob"
          >
            Full Stack Developer
          </p>
          <p className="uppercase font-boldF font-bold  text-lg flex  items-center md:justify-center space-x-2">
            <span id="seeMore" className="tracking-wider">
              see works
            </span>
            <FaArrowRightLong
              className="text-orange-600"
              size={19}
              id="seeMore"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

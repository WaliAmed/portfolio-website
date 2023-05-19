import React from "react";
import web from "../../assets/Images/website.svg";
import black from "../../assets/Images/black.svg";
import horse from "../../assets/Images/horse.svg";
import tiles from "../../assets/Images/tiles.svg";
import perfume from "../../assets/Images/perfume.svg";
import gold from "../../assets/Images/gold.svg";
import art from "../../assets/Images/art.svg";
import portrait from "../../assets/Images/portrait.svg";
import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../Buttons/Transparent";

function FeaturedWork() {
  return (
    <div className="w-full pb-10 lg:py-20 flex flex-col items-center text-white">
      <h2 className="text-[30px] lg:text-[48px] uppercase">Featured Work</h2>

      <div className="w-10/12 py-10 grid grid-cols-4 relative">
        <span className="w-full">
          <img src={black} alt="" className="w-10/12" />
        </span>

        <span className="w-full row-span-2 col-span-2 flex justify-center items-start">
          <img src={web} alt="" className="w-10/12" />
        </span>

        <span className="w-full flex justify-end items-start ">
          <img src={horse} alt="" className="w-[100%]" />
        </span>

        <span className="w-full -mt-3 lg:-mt-20">
          <img src={tiles} alt="" className="" />
        </span>

        <span className="w-full mt-2 lg:mt-5 flex justify-end items-start ">
          <img src={perfume} alt="" className="w-[100%]" />
        </span>

        <span className="w-full mt-2 lg:mt-5 flex justify-end items-start ">
          <img src={gold} alt="" className="w-[100%]" />
        </span>

        <span className="w-full col-span-2 -mt-14 lg:-mt-32 flex justify-center">
          <img src={art} alt="" className="w-[90%]" />
        </span>

        <span className="w-full row-span-2 -mt-5 lg:-mt-20">
          <img src={portrait} alt="" className="w-[90%]" />
        </span>
      </div>

      <span className="flex">
        <div className="w-fit rounded-full border border-white/20 mr-3">
          <RxArrowTopRight className="m-1 text-xs" />
        </div>

        <Transparent ButtonTitle={"VIEW ALL"} />
      </span>
    </div>
  );
}

export default FeaturedWork;

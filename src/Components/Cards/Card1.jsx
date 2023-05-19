import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../Buttons/Transparent";

function Card1() {
  return (
    <div
      style={{ fontFamily: "Satoshi-Regular" }}
      className="w-11/12 flex flex-col justify-center py-10 px-10 border border-blue-300/30 backdrop-blur-sm bg-[#203764]/10 text-gray-300 rounded-sm space-y-1"
    >
      <p style={{ fontFamily: "Satoshi-Regular" }} className="text-xs">
        01
      </p>

      <h1 style={{ fontFamily: "Satoshi-Regular" }} className="lg:text-lg">
        Web Design & UI/UX
      </h1>

      <h2
        style={{ fontFamily: "Satoshi-Regular" }}
        className="text-xs lg:text-base"
      >
        Visually stunning web and mobile app designs that captivate your
        audience by blending brand voice and customer needs
      </h2>

      <div className="flex space-x-3 pt-6">
        <div className="w-fit rounded-full border border-white/20">
          <RxArrowTopRight className="m-1 text-xs" />
        </div>

        <Transparent ButtonTitle="VIEW IN PORTFOLIO" />
      </div>
    </div>
  );
}

export default Card1;

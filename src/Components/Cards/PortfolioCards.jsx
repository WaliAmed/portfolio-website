import React from "react";
import Transparent from "../Buttons/Transparent";
import { RxArrowTopRight } from "react-icons/rx";

function PortfolioCards({ title, image1, image2, image3, key }) {
  return (
    <div
      key={key}
      style={{ fontFamily: "Satoshi-Regular" }}
      className="w-[300px] h-[300px] flex flex-col text-gray-300 z-40 rounded-sm"
    >
      <span className="w-full h-[63%] flex overflow-hidden">
        <img src={image1} alt="" className="w-full h-full shadow-lg z-20" />
        <img
          src={image2}
          alt=""
          className="w-full h-full -ml-[25%] shadow-lg z-10"
        />
        <img
          src={image3}
          alt=""
          className="w-full h-full -ml-[25%] shadow-lg"
        />
      </span>

      <span className="w-full h-[37%] bg-gradient-to-l from-[#212336] to-[#2037647b] py-3 flex flex-col justify-around items-center">
        <h2 className="satoshi-light text-[20px] text-center uppercase">
          {title}
        </h2>

        <span className="w-full flex justify-center space-x-3">
          <div className="w-fit rounded-full border border-white/20 -ml-3">
            <RxArrowTopRight className="m-1 text-sm" />
          </div>
          <Transparent ButtonTitle={"VIEW ALBUM"} />
        </span>
      </span>
    </div>
  );
}

export default PortfolioCards;

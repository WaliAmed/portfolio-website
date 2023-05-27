import React from "react";
import Transparent from "../Buttons/Transparent";
import { RxArrowTopRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function PortfolioCards({ title, image1, image2, image3, key }) {
  let navigate = useNavigate();
  return (
    <div
      key={key}
      style={{ fontFamily: "Satoshi-Regular" }}
      className="w-[300px] h-[300px] flex flex-col text-gray-300 z-40 rounded-sm overflow-hidden"
    >
      <span className="w-full relative h-[63%] flex justify-start overflow-hidden">
        <img
          src={image1}
          alt=""
          className="w-60 bg-cover  h-full shadow-lg shadow-gray-500/50 z-20 -mt-1"
        />
        <img
          src={image2}
          alt=""
          className="w-60 h-full bg-cover -ml-[25%] shadow-lg shadow-gray-500/50 z-10 -mt-1"
        />
        <img
          src={image3}
          alt=""
          className="w-60 h-full -ml-[25%] shadow-lg shadow-gray-500/50 -mt-1"
        />

        <span className="w-full h-[87%] bottom-0 absolute z-30 backdrop-blur-sm bg-transparent/10"></span>
      </span>

      <span className="w-full h-[37%] z-30 -mt-7 bg-gradient-to-l from-[#04083D] to-[#060b4a] py-3 flex flex-col justify-around items-center">
        <h2 className="satoshi-light text-[20px] text-center uppercase">
          {title}
        </h2>

        <span className="w-full flex justify-center space-x-3">
          <div className="w-fit rounded-full border border-white/20 -ml-3">
            <RxArrowTopRight className="m-1 text-sm" />
          </div>
          <Transparent
            onClick={() => {
              navigate("view-all");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            ButtonTitle={"VIEW ALBUM"}
          />
        </span>
      </span>
    </div>
  );
}

export default PortfolioCards;

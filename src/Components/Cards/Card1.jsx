import { useEffect } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../Buttons/Transparent";
import { useLocation, useNavigate } from "react-router-dom";

function Card1({ item, index, rd }) {
  // const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     const { hash } = location;
  //     if (hash) {
  //       const element = document.querySelector(hash);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   }, 1500);
  // }, [location]);

  return (
    <div
      style={{ fontFamily: "Satoshi-Regular" }}
      className="w-[350px] md:w-full h-[260px] flex flex-col justify-center py-10 px-10 border border-blue-300/30 backdrop-blur-sm bg-[#203764]/10 text-gray-300 z-40 rounded-sm space-y-1"
    >
      <p style={{ fontFamily: "Satoshi-Regular" }} className="text-xs">
        {index <= 9 ? "0" : null}
        {index + 1}
      </p>

      <h1 style={{ fontFamily: "Satoshi-Regular" }} className="lg:text-lg">
        {item.title}
      </h1>

      <h2
        style={{ fontFamily: "Satoshi-Regular" }}
        className="text-xs lg:text-base"
      >
        {item.desc}
      </h2>

      <div className="flex space-x-3 pt-6">
        <div className="w-fit rounded-full border border-white/20">
          <RxArrowTopRight className="m-1 text-xs" />
        </div>

        <Transparent
          onClick={() => {
            navigate(`/portfolio/view-all/#${rd}`);
          }}
          ButtonTitle="VIEW IN PORTFOLIO"
        />
      </div>
    </div>
  );
}

export default Card1;
3;

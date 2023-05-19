import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function Card2(props) {
  return (
    <div className="w-11/12 my-5 lg:my-0 px-10 py-10 text-gray-300 rounded-sm border border-blue-300/20 backdrop-blur-lg bg-[#203764]/20">
      <h1 className="text-lg satoshi-light py-2">{props.title}</h1>

      <h2 className="">{props.desc}</h2>

      <div className="flex space-x-3 pt-8">
        <div className="w-fit h-fit flex justify-center items-center self-center rounded-full border border-white/20">
          <AiOutlineStar className="m-1 text-xs" />
        </div>

        <span className="flex flex-col">
          <p>{props.auth}</p>
          <p>{props.desig}</p>
        </span>
      </div>
    </div>
  );
}

export default Card2;
